// it walks to each node, then walks back towards body element. 
// counts the number of nodes on its way back, if count matches input generation, 
// style is updated, not the most efficient, nevertheless a solution. 

function colorGeneration(gen) {
  function walk(node) {
    walkBack(node);
    for (vari = 0; i < node.children.length; i += 1) {
      walk(node.children[i]);
    }

  }

  function walkBack(node) {
    if (node.tagName === 'BODY') {
      return;
    }

    var parent = node.parentElement;
    var depth = 1;
    while (parent.tagName !== 'BODY') {
      depth += 1;
      parent = parent.parentElement;
    }

    if (depth === gen) {
      node.classList.add('generation-color');
    }

  }

  walk(document.body);
}
