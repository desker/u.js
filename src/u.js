/**
  * API:
  *   var val, anyVal;
  *   ...
  *   var variable = u(...);
  * 
  *   variable.is() - true when val == [null || undefined || 0 || "" || {} || [] || NaN]
  *   variable.is(['object','string','number','boolean','NaN','array','date'])
  *   ??? variable.is(anyVal) - true if link at one object (??) OR compare types of variables
  *   ↑ OR ↓
  *   variable.type() - return typeof val
  *   variable.type(anyType) - return typeof(val)===anyType (lowercase before compare)
  *
  *   variable.keys() - if val is object - array of options
  *   variable.keys(number) - equal variable.keys()[number];
  *   ??? variable.keys(<string || array>) - return original object with only options from arguments
  * 
  *   variable.each(callback) - are you serios? you need docs fro understand this? :)
  *   variable.length() - (??length - object||function) return array.length or number of keys in object
  *   variable.equals(anyVal) - return JSON.stringify(val)===JSON.stringify(anyVal);
  *   variable.like(anyVal) - compare object structure (only keys, not vlaues)
  *   
  *   variable.and(anyVal, {overwrite: true}) - объединение объектов
  *   variable.or(anyVal) - пересечение объектов
  *   variable.not(anyVal) - исключение пересечений объекта
  *
  */
 
var U = function(baseValue) {
  if (!this) return;
  this.init(baseValue);
};

U.prototype = {
  init: function(value) {
    this.param = {
      value: value,
      type: typeof(value)
    }
    console.log(this);
  },

  type: function(compare) {
    return arguments.length===0 ? this.param.type
        : this.param.type===compare.toLowerCase(); 
  }
}

var u = window.u = function(value) {
  return (new U(value));
};

var sample = {
  param1: 'value1',
  param2: 'value2'
}

var ex = u(sample);
console.log(ex.type('array'));