function arrayToNodes(nodes, parent = document.body) {
  var newParents = [];
  var children = nodes[1];
  var childNode;

  if (children.length !== 0) {
    for (var i = 0; i < children.length; i++) {
      childNode = document.createElement(children[i][0]);
      newParents.push(parent.appendChild(childNode));
    }
  }

  for (var i = 0; i < children.length; i++) {
    arrayToNodes(children[i], newParents[i]);
  }

}

