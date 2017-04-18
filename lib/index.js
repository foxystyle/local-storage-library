var $ls = {};

// gets value for a key
$ls.get = function(key) {
    return JSON.parse(localStorage.getItem(key));
};

// sets or updates a value for a key
$ls.set = function(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
};

// returns true if value is set, else false
$ls.isSet = function(key) {
    var val = $ls.get(key);
    return ( null === val || 'undefined' === typeof val) ? false : true;
};

// removes a set item
$ls.remove = function(key) {
    localStorage.removeItem(key)
};

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = $ls;
  }
  exports.$ls = $ls;
}
