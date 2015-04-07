function U(param) {
  var variable = {
    _value: param,
    _type : typeof(param).toString().toLowerCase()
    _typeExtend: null,

    _isExtendType: function() {
      var self = this;
      if (!this._type!=="object") return;
      var val = this._value;

      for (type in this._typeExtendValues) {
        if (this._typeExtendValues.hasOwnProperty(type)) {
          self._typeExtend = self._typeExtendValues[type]()
        }
      }
    },

    // get or compare basse types
    type: function(compare) {
      if (arguments.length==0) return this._type;
      return this._type===compare;
    },
    
    // get or compare extend types
    is: function(compare) {
      if (this._typeExtend===null) this._typeExtend = this._isExtendType();
      if (arguments.length==0) return this._typeExtend;
      return this._typeExtend===compare;
    }
  }

  return variable;
}

var testObject = {param1: "val", param2: "type"},
    testArray = [1, "config", 4,6],
    testString = "wetrwrewg3242#$Q$234223f234!@#$!@";


