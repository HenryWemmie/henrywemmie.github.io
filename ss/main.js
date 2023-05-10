window.onload = function() {
  var numAnim = new countUp.CountUp('target', 73, {useEasing: false, decimalPlaces: 4, duration: 3900 });
  if (!numAnim.error) {
    numAnim.start();
  } else {
    console.error(numAnim.error);
  }
}
