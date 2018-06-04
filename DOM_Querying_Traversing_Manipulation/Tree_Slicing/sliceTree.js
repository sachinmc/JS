
function sliceTree(startId, endId) {
  var endElement = document.getElementById(String(endId));
  var startElement = document.getElementById(String(startId));
  var tagNames = [];
  var parent;

  if (!(startElement && endElement)) {
    return undefined;
  }

  do {
    tagNames.push(endElement.tagName);
    parent = endElement.parentElement;
    if (parent.id === String(startId)) {
      tagNames.push(parent.tagName);
      break;
    }

    endElement = parent;
  } while (parent.tagName !== 'BODY');

  if (parent.tagName === 'BODY') {
    return undefined;
  } else {
    return tagNames.reverse();
  }

}

