module.exports = function reverse (n) {
  let numStr = n.toString();
  let reversed = '';
  for (let i = numStr.length - 1; i >= 0; i--) {
    reversed += numStr[i];
  }
  return parseInt(reversed);
}