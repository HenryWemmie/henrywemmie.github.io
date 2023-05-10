const options = {useEasing: false,   decimalPlaces: 5,   duration: 3600, };

window.onload = function() {
  var numAnim = new countUp.CountUp('target', 0.73, options);
  if (!numAnim.error) {
    numAnim.start();
  } else {
    console.error(numAnim.error);
  }
