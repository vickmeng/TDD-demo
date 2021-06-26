function getType(value) {
  /**
   * 这方法也是被测绘覆盖过的
   */
  return Object.prototype.toString.call(value);
}

function isEqual(value ,other) {
  if (value === other) return true


  if (getType(value) !== getType(other)) return false;

  return false
}

module.exports = {isEqual}
