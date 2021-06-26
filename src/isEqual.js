function getType(value) {
  return Object.prototype.toString.call(value);
}

/**
 * 重构
 * 用switch 处理单输入 多case的情况
 */
function isEqual(value ,other) {
  if (value === other) return true

  if (getType(value) !== getType(other)) return false;

  if (typeof value === 'object') {
    switch (getType(value)) {
      case '[object Array]':
        if (value.length !== other.length) return false
        return value.every((v,i)=> isEqual(v, other[i]) )
      case '[object Object]':
        if (Object.keys(value).length !== Object.keys(other).length) return false
        return Object.keys(value).every( key => isEqual(value[key], other[key]))
    }
  }

  return false
}

module.exports = {isEqual}
