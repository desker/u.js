(function(){
  'use strict';

var
    VERSION = "@VERSION";
    U = function() {
      return new U.fn.init(arguments);
    };
  
    U.fn = U.prototype = {
      version: VERSION,
      constructor: U
      // Public API
    }



})();

// function U(param) {

//   var variable = {
//     version: U.version,
//     _value: param,
//     _type : String.toString(typeof(param)).toLowerCase(),
//     _typeExtend: null,
//     _options: {},

//     options: function(key, value) {
//       if (arguments.length<2)
//         return arguments.length===0 ? this._options : this._options[key];
//       else
//         return (this._options[key] = value);
//     },

//     /**
//      * Compare variable type with argument. When called without arguments,
//      * return lowercase typeof variable.
//      * @param  {String} compare typename for compare
//      * @return {Boolean|String} Compare result or variable typename
//      */
//     type: function(compare) {
//       if (arguments.length==0) return this._type;
//       return this._type===compare;
//     },
    
//     /**
//      * Compare variable extended types or return extend type when called
//      * without argguments.
//      * @param  {String}  compare extend type name for compare
//      * @return {Boolean|String} Compare result or variable extend typename
//      */
//     is: function(compare) {
//       console.log(this.version);
//       /*if (this._typeExtend===null) this._typeExtend = this._isExtendType();
//       if (arguments.length==0) return this._typeExtend;
//       return this._typeExtend===compare;*/
//     }
//   }

//   return variable;
// }

// U.version = '0.1.0';

// var testObject = {param1: "val", param2: "type"},
//     testArray = [1, "config", 4,6],
//     testString = "wetrwrewg3242#$Q$234223f234!@#$!@";

// var u = U;

// u(testObject).is("array");