// Managing Collections in JS

var inventory;

// We defined inventory as a global variable,
// and used an IIFE to assign it to an object that contains all the app logic.
//
// The advantage of exposing inventory to the global namespace is that
// we can inspect the inventory variable in the console to check its state,
// which we won't be able to do if we hide the inventory inside jQuery's
// document ready callback function
//
// The purpose of the IIFE, together with the global inventory is to
// say that inventory is the only variable that can be observed from
// the outside, and any other variables declared in this app should be private
// and not leaked to the global namespace.
//
(function() {
  // encapsulating app code into a single parent object
  inventory = {
    collection: [],
    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },
    cacheTemplate: function() {
      this.template = $('#inventory_item').remove().html();
    },
    findParent: function(target) {
      var $ele = $(target);
      return $ele.parents('tr');
    },
    addItems: function() {
      var id = this.id += 1;
      var item = this.createItem(id);
      this.collection.push(item);

      var row = inventory.template.replace(/ID/g, id);

      $('table#inventory').append(row);
    },
    updateItem: function(event) {
      var $parent = this.findParent(event.target);
      var id = this.getId($parent);
      var item = this.getItem(id);

      var $all_inputs = $parent.find('label').next();
      item.name = $all_inputs.eq(0).val() || '';
      item.stockNumber = $all_inputs.eq(1).val() || '';
      item.quantity = +$all_inputs.eq(2).val();
    },
    getItem: function(id) {
      return this.collection.find(function(item) {
        return item.id === id;
      });
    },
    getId: function($parent) {
      return +$parent.find('input[type=hidden]').val();
    },
    createItem: function(id) {
      return {
        id: id,
        name: '',
        stockNumber: '',
        quantity: 1,
      };
    },
    deleteItem: function(event) {
      event.preventDefault();

      var $parent = this.findParent(event.target);
      var id = this.getId($parent);

      this.collection = this.collection.filter(function(item) {
        return item.id !== id;
      });
      $parent.remove();
    },
    bindEvents: function() {
      $('#add_item').on('click', $.proxy(this.addItems, this));
      $('table#inventory').on('blur', 'input', $.proxy(this.updateItem, this));
      $('table#inventory').on('click', '.delete', $.proxy(this.deleteItem, this));
    },
    init: function() {
      this.id = 0;
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  }
})();

// Finally, instead of putting the initialization logic directly in jQuery's
// document ready callback function, we put the init method in the inventory
// object, to allow it to access other properties of the inventory object,
// if necessary. We bind the inventory.init() method with the inventory object
// itself to set the this value in the method.
//

$($.proxy(inventory.init, inventory));
