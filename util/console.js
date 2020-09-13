// change the color of the console output
module.exports = function(color, text) {
  switch(color) {
    case('green'):
      console.log('\x1B[32m%s\x1B[0m', text);
      break;
    case('red'):
      console.log('\x1B[31m%s\x1B[0m', text);
      break;
    default:
      console.log(text);
  }
}
