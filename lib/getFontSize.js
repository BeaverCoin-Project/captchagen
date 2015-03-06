module.exports = function(height, width, font) {
  var max = height * 0.60; // max is 60% of height
  var min = height * 0.50; // min is 50% of height
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
