function getType(value) {
  return Object.prototype.toString.call(value);
}

function isEqualObject (value, other){
  if (value === other) return true

  switch (getType(value)) {
    case '[object Array]':
    case '[object Object]':
      return Object.keys(value).length === Object.keys(other).length
        ? Object.keys(value).every( key => isEqual(value[key], other[key]))
        : false
    default:
      return value.valueOf() === other.valueOf();
  }
}

function isObject(value) {
  return typeof value === 'object' && value !== null;
}

function isEqual(value, other){
  if (Object.is(value, other)) return true

  if (getType(value) !== getType(other)) return false

  return isObject(value) ? isEqualObject(value, other) : false
}


module.exports = {isEqual}
