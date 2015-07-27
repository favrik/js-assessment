exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
  },

  remove : function(arr, item) {
    var position = arr.indexOf(item);

    while (position !== -1) {
      arr.splice(position, 1);
      position = arr.indexOf(item);
    }

    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    return this.remove(arr, item);
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates : function(arr) {
    var dupes = {};
    for (var i = 0, len = arr.length; i < len; i++) {
      if (dupes.hasOwnProperty(arr[i])) {
        dupes[arr[i]].count += 1;
      } else {
        dupes[arr[i]] = { count: 1, original: arr[i] };
      }
    }

    var return_duplicates = [];
    for (var num in dupes) {
      if (dupes[num].count > 1) {
        return_duplicates.push(dupes[num].original);
      }
    }

    return return_duplicates;
  },

  square : function(arr) {
    return arr.map(function (value) { return value * value; });
  },

  findAllOccurrences : function(arr, target) {
    var positions = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        positions.push(i);
      }
    }

    return positions;
  }
};
