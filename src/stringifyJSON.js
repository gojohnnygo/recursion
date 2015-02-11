// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
 
  var toString = Object.prototype.toString;

  switch (toString.call(obj)) {
    case "[object Undefined]":
    case "[object Function]":
    case "[object Symbol]":
      return undefined;
      break;
    case "[object Number]":
    case "[object Boolean]":
    case "[object Null]":
      return "" + obj;
      break;
    case "[object String]":
      return '"' + obj + '"';
      break;
    case "[object Array]":
      var str = "[";
      
      obj.forEach(function(element, index, array) {
        str += stringifyJSON(element);

        if (index < array.length - 1) {
          str += ",";
        }
      });

      str += "]";
      return str;
      break;
    case "[object Object]":
      var str = "{";

      for (var prop in obj) {
        if (stringifyJSON(obj[prop])) {
          str += stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]) + ","
        }
      }

      if (str.slice(-1) === ",") {
        str = str.substring(0, str.length - 1);
      }

      str += "}";
      
      return str;
      break;
    default:
      console.log("Opps, you a dumb dumb stupid head.");
  }
};
