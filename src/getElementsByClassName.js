// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  var arr = [];

  function getClasses(node) {
    for (var i = 0; i < node.length; i++) {
      if (node[i].classList === undefined) continue;

      if (node[i].classList.contains(className)) {
        arr.push(node[i]);
      }

      if (node[i].childNodes) {
        getClasses(node[i].childNodes);
      } 
    }
    
    return arr;
  }

  return getClasses(document.childNodes);
};
