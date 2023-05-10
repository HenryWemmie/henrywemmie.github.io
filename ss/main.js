window.onload = function() {
  var numAnim = new countUp.CountUp('target', 0.73, {useEasing: false, decimalPlaces: 5, duration: 3600 });
  if (!numAnim.error) {
    numAnim.start();
  } else {
    console.error(numAnim.error);
  }
}
