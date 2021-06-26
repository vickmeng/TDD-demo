function getType(value) {
  return Object.prototype.toString.call(value);
}

function isEqualObject(value ,other) {
  // 略加考虑，保留这两行重复代码不进行抽象，提高阅读流畅性
  if (value === other) return true

  if (getType(value) !== getType(other)) return false;

  switch (getType(value)) {
    case '[object Array]':
    case '[object Object]':
      if (Object.keys(value).length !== Object.keys(other).length) return false
      return Object.keys(value).every( key => isEqual(value[key], other[key]))
    case '[object Date]':
      return value.getTime() === other.getTime()
    default:
      return false
  }
}

function isEqual(value ,other) {
  if (Object.is(value ,other)) return true

  if (getType(value) !== getType(other)) return false;

  if (typeof value === 'object') return isEqualObject(value ,other);

  return false
}

module.exports = {isEqual}
