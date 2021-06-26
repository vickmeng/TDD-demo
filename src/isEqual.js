function getType(value) {
  return Object.prototype.toString.call(value);
}

/**
 * 大胆扩展，不用怕把老的代码改坏掉
 */
function isEqual(value ,other) {
  if (value === other) return true

  if (getType(value) !== getType(other)) return false;

  if (typeof value === 'object') {
    if (getType(value) === '[object Array]') {
      if (value.length !== other.length) return false

      return value.every((v,i)=> isEqual(v, other[i]) )

    } else if (getType(value) === '[object Object]') {
      if (Object.keys(value).length !== Object.keys(other).length) return false

      return Object.keys(value).every( key => isEqual(value[key], other[key]))
    }
  }



  return false
}

module.exports = {isEqual}
