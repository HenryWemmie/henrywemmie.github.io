window.onload = function() {
  var numAnim = new countUp.CountUp('target', 2000, { decimalPlaces: 5, duration: 3600 });
  if (!numAnim.error) {
    numAnim.start();
  } else {
    console.error(numAnim.error);
  }
}
