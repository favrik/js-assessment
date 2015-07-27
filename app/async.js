exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return {
      then: function (func) {
        func(value);
      }
    };
  },

  manipulateRemoteData : function(url) {
    

    return {
      then: function (func) {
        func(data);
      }
    };
  }
};
