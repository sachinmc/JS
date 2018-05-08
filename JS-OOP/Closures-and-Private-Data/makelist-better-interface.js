// providing a better interface by returning an object, we can then create an API
// that is easy to understand and use. (API are the object properties, which are
// functions / interface).
//
// use of closures (is the function makeList()) to make data private.
// items array is not accessible from outside the function.

function makeList() {
  var items = []; // prevents outside access to items the object stores internally

  return {
    add: function(item) {
      var index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + ' added!');
      }
    },

    remove: function(item) {
      var index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item + ' removed!');
      }
    },

    list: function() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    },

    clear: function () {
      items = [];
      console.log('all items deleted!');
    },
  };

}

var list = makeList();
list.add('peas');
// = peas added!
list.list();
// = peas
list.add('corn');
// = corn added!
list.list();
// = peas
// = corn
list.remove('peas');
// = peas removed!
list.list();
// = corn
list.clear();
// all items deleted!
list.list();
// The list is empty.
