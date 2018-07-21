// We defined 'inventory' as a global variable, and used an IIFE to assign
// it to an object that contains all the app logic. The advantage of exposing
// inventory to the global namespace is that we can inspect the 'inventory'
// variable in the console to check its state, which we won't be able to do if
// we hide the inventory inside jQuery's document ready callback function.

// The purpose of the IIFE, together with the global 'inventory' is to say that
// inventory is the only variable that can be observed from the outside, and
// any other variables declared in this app should be private and not leaked
// to the global namespace.

// Finally, instead of putting the initialization logic directly in jQuery's
// document ready callback function, we put the 'init' method in the inventory
// object, to allow it to access other properties of the inventory object,
// if necessary. We bind the 'inventory.init()' method with the inventory object
// itself to set the 'this' value in the ethod.

var inventory;

(function() {
  inventory = {
    collection: [],
    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },
    cacheTemplate: function() {
      var $i_tmpl = $('#inventory_item').remove();
      this.template = $i_tmpl.html();
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
    },
  };
})();

// jQuery document ready function shorthand, takes callback as argument
// initializing inventory
// same as inventory.init.bind(inventory);
// motivation for using bind or proxy is that you want to just pass the function
// around without having to invoke it, until you need to
//
// $() => $(document).ready()
// the above executes the callback when document is ready
//
// $($.proxy(inventory.init, inventory));
//
// another implementation
// $(function() {
//   inventory.init();
// });

$(function () {
  $.proxy(inventory.init, inventory)();
  var count = 0;
  var $table_row;

  // add item
  $('#add_item').on('click', function() {
    count += 1;

    $('table#inventory').append(inventory.template);

    $table_row = $('table#inventory').children(':last-child');

    $table_row.find('input[type=hidden]').val(count);

    inventory.collection.push({
      id: count,
      name: '',
      stockNumber: '',
      quantity: 1,
    });

    // delete event handler defined within add item since there are items to
    // delete only once it is added.
    $table_row.find('.delete').on('click', function(e){
      e.preventDefault();

      // the callback is executed during the click event, not during binding
      // so can't really use closure to save global table row, or count values
      //
      // hence new query for table row instead, can't use value of global table row
      var $curr_table_row = $(this).parents('tr');
      var item_id = Number($curr_table_row.find('input[type=hidden]').val());

      // remove row from DOM
      $curr_table_row.remove();

      // remove item from collection
      for (var i = 0; i < inventory.collection.length; i += 1) {
        if (inventory.collection[i].id === item_id) {
          inventory.collection.splice(i, 1);
          break;
        }
      }

    }); // end of delete function

    // blur handler to update input values
    // blur is bound to unique table rows, table row generated from add item
    $table_row.on('blur', 'input', function() {
      var $parent = $(this).parents('tr');
      var item_id = Number($parent.find('input[type=hidden]').val());
      var label = $(this).siblings('label').text();
      var items = inventory.collection;
      // or
      // var attribute = $(this).attr('name');

      for (var i = 0; i < items.length; i += 1) {
        if (items[i].id === item_id) {
          switch (label) {
            case 'Name':
              items[i].name = $(this).val();
              break;
            case 'Stock Number':
              items[i].stockNumber = $(this).val();
              break;
            case 'Quantity':
              items[i].quantity = $(this).val();
              break;
          }
        }
      }

    }); // end of blur event handler

  }); //end of add item function



}); // end of document ready function
