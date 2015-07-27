exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var current = start;

    var interval = function () {
      if (current <= end) {
        console.log(current);
        current++;
      } else {
        clearInterval(intervalId);
      }
    };

    interval();
    var intervalId = setInterval(interval, 100);
    return {
      cancel: function () { clearInterval(intervalId); }
    }
  }
};
