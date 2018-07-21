var inventory;

(function() {
  inventory = {
    collection: [],
    lastId: 0, // this.collection.length ?
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



$(function () {
  // initialize inventory object
  $.proxy(inventory.init, inventory)();

  $('#add_item').on('click', function() {
    inventory.lastId += 1;
    var updated_template = inventory.template.replace(/ID/g, inventory.lastId);

    $('#inventory').append(updated_template);

    inventory.collection.push({
      id: inventory.lastId,
      name: '',
      stockNumber: '',
      quantity: 1,
    });
  });

  // event delegation for blur and delete events
  // before even the rows are created
  $('table#inventory').on('blur', 'input', function () {
    var content = $(this).val();
    var item_id = Number($(this).parents('tr').find('input[type=hidden]').val());
    var label = $(this).siblings('label').text();

    var match_item = inventory.collection.filter(function(item) {
      return item.id === item_id;
    })[0];

    if (label === 'Name') { match_item.name = content; }
    if (label === 'Stock Number') { match_item.stockNumber = content; }
    if (label === 'Quantity') { match_item.quantity = content; }

  });

  $('table#inventory').on('click', 'a.delete', function(e) {
    e.preventDefault();
    
    var item_id = Number($(this).parents('tr').find('input[type=hidden]').val());

    inventory.collection = inventory.collection.filter(function(item) {
      return item_id !== item.id;
    });

    $(this).parents('tr').remove();
  });

});
