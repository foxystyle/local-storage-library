var $ls = {};

// gets value for a key
export function get(key) {
  return JSON.parse(localStorage.getItem(key));
};

// sets or updates a value for a key
export function set(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
};

// returns true if value is set, else false
export function isSet(key) {
  var val = $ls.get(key);
  return ( null === val || 'undefined' === typeof val) ? false : true;
};

// removes a set item
export function remove(key) {
  localStorage.removeItem(key)
};
