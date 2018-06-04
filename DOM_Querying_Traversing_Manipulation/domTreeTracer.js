function domTreeTracer(id) {
  var node = document.getElementById(String(id));
  var output = [];

  function findChildren(node) {
    var children = node.children;

    if (children !== null) {
      children = Array.prototype.slice.call(children).map(function(node) {
        return node.nodeName;
      });
      output.push(children);
    }
  }

  function traceTree(node) {
    findChildren(node);
    if (node !== null && node.id !== '') {
      traceTree(node.parentElement);
    }
  }

  traceTree(node.parentElement);

  return output;
}
