
var childNodes = (function() {
  var totalChildren;

  function countChildren(node) {
      if (node.childNodes.length > 0) {
          totalChildren += node.childNodes.length;
      }

      for (var i = 0; i < node.childNodes.length; i += 1) {
          countChildren(node.childNodes[i]);
      }
  }

  return function(id) {
    totalChildren = 0;
    var node = document.getElementById(String(id));
    countChildren(node);
    var directChildren = node.childNodes.length;
    return [directChildren, totalChildren - directChildren];
  };
})();
