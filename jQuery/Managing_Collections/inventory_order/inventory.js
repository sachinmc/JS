// Basics to Single Page Application, are, that changes are taking place within
// the page, without refreshing the page
//
// MVC Framework
// Model:
//  would the properties id, name, stock_number, quantity
// Collection:
//  would be the inventory collection
// View:
//  is the template that is rendered when we add a new item to the inventory

var inventory;

(function() {
  inventory = {
    collection: [],
    lastId: 0,
    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },
    cacheTemplate: function() {
      var $i_tmpl = $('#inventory_item').remove();
      this.template = $i_tmpl.html();
    },
    add: function() {
      this.lastId += 1;
      var item = {
        id: this.lastId,
        name: '',
        stock_number: '',
        quantity: 1,
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;
      // returning false in forEach callback tells it to stop running the each
      // loop because we found what we need, we don't need to process the rest of
      // the collection further. 
      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function($item) {
      var id = this.findID($item),
          item = this.get(id);

      item.name = $item.find('[name^=item_name]').val();
      item.stock_number = $item.find('[name^=item_stock_number]').val();
      item.quantity = $item.find('[name^=item_quantity]').val();
    },
    newItem: function(e) {
      e.preventDefault(); // the click is on a button, but just to be safe
      var item = this.add(),
          $item = $(this.template.replace(/ID/g, item.id));

      $('#inventory').append($item);
    },
    findParent: function(e) {
      return $(e.target).closest('tr');
    },
    findID: function($item) {
      return +$item.find('input[type=hidden]').val();
    },
    deleteItem: function(e) {
      e.preventDefault();
      var $item = this.findParent(e).remove();

      this.remove(this.findID($item));
    },
    updateItem: function(e) {
      var $item = this.findParent(e);

      this.update($item);
    },
    bindEvents: function() { // jQuery event binding
      $('#add_item').on('click', $.proxy(this.newItem, this));
      $('#inventory').on('click', 'a.delete', $.proxy(this.deleteItem, this));
      // jQuery specific selector :input, also includes select boxes,
      // textareas and button elements
      $('#inventory').on('blur', ':input', $.proxy(this.updateItem, this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  };
})();

$($.proxy(inventory.init, inventory));

// if you see duplication of code, create a new method.
// if in the future an update is required, it needs to happen only in one place.

// data processing really shouldn't exist within the DOM event callback
// hence the abstraction to add, remove and update methods.

// IRL situation:
// Submit the form using the Order Inventory button, take the collection
// object and pass that back to the server using jQuery AJAX method
// We can then put a notice (up on the page, saying that the order was processed.
// You will probably receive an order ID, displayed on the page, without
// reloading the page.
//
// Allows the user to make any changes to the existing form, if they see any
// mistakes.
//
// To go and view an existing order, we would receive the collection object
// from the server, and use this same application code to render out a template
// for each of these items.
