exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(fn, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function (str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    var closures = [];
    var makeFn = function (val) {
      return function () { return fn(val); };
    };


    for (var i = 0, len = arr.length; i < len; i++) {
      closures.push(makeFn(arr[i]));
    }

    return closures;
  },

  partial : function(fn, str1, str2) {
    return function (value) {
      return fn.call(null, str1, str2, value);
    };
  },

  useArguments : function() {
    arguments
  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
