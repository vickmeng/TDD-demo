function isEqual(value ,other) {
  if (value === other) return true


  if (Object.prototype.toString.call(value) !== Object.prototype.toString.call(other) ) return false;

  return false
}

module.exports = {isEqual}
