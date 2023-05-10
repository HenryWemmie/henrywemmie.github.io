window.onload = function() {
  var numAnim = new countUp.CountUp('target', 0.73, { decimalPlaces: 5, duration: 36000 });
  if (!numAnim.error) {
    numAnim.start();
  } else {
    console.error(numAnim.error);
  }
}
