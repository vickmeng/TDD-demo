function getType(value) {
  return Object.prototype.toString.call(value);
}

/**
 * 继续重构
 * 用switch 处理单输入 多case的情况
 */
function isEqual(value ,other) {
  if (value === other) return true

  if (getType(value) !== getType(other)) return false;

  if (typeof value === 'object') {
    switch (getType(value)) {
      case '[object Array]':
      case '[object Object]':
        if (Object.keys(value).length !== Object.keys(other).length) return false
        return Object.keys(value).every( key => isEqual(value[key], other[key]))
      default:
        return false
    }
  }

  return false
}

module.exports = {isEqual}
