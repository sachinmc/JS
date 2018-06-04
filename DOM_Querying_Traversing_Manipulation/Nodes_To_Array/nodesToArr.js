// mental model:
// [node.tagName, node.children] - this is the pattern
// keep generating this pattern for the every node.children 
// until no children left i.e. []

function nodesToArr(node = document.body) {
  var children;

  if (node instanceof Array && node.length === 0) {
    return [];
  } else if (node instanceof Array) {
    var result = [];
    for (var i = 0; i < node.length; i += 1) {
      children = Array.prototype.slice.call(node[i].children);
      result.push([node[i].tagName, nodesToArr(children)]);
    }
    return result;
  } 

  children = Array.prototype.slice.call(node.children);
  return [node.tagName, nodesToArr(children)];
}

nodesToArr();

