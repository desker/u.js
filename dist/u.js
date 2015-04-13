(function(root){
  'use strict';
  

  var U = function(options) {
      return new U.fn.init(options);
    };
  
  U.fn = U.prototype = {
    version: "0.1.0"
  , constructor: U

  , init: function(options) {
      if (!this) return;

      U._nativeType = options.nativeTypes;
      U._customType = options.customTypes;
      

      this.type = function(compare) {
        
      };
      console.log(U);
      console.log(this);
    }
    
  };

  var u = root.u = U({
    nativeTypes: ['string', 'boolean', 'number', 'function', 'object'],
    customTypes: {
      "array": Array.isArray,
      "date" : function() { return (arguments[0] instanceof Date); }
    }
  });

})(window);

// var testObject = {param1: "val", param2: "type"},
//     testArray = [1, "config", 4,6],
//     testString = "wetrwrewg3242#$Q$234223f234!@#$!@";

// var u = U;

// u(testObject).is("array");