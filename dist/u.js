(function(rootObject){
  'use strict';

  var
    root = rootObject;

  function U(val) {
    if (!this) return new U(val);

    return this.init(val);  
  }

  U.prototype = {

    _version: '0.1.0',

    init: function(val) {
      this._param = val;
      return this;
    },

    type: function(comparator, cb) {
      if (!this._type) this._type = toLower(typeof(this._param));
      if (arguments.length===0) return this._type;
      
      return this;
    },

    is: function(comparator, cb) {
      
    }

  };

  var u = root.u = U;

  u(5).type(function(t) {console.log(t); });

})(window);

// var testObject = {param1: "val", param2: "type"},
//     testArray = [1, "config", 4,6],
//     testString = "wetrwrewg3242#$Q$234223f234!@#$!@";

// var u = U;

// u(testObject).is("array");