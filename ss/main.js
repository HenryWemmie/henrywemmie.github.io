window.onload = function() {
  var numAnim = new countUp.CountUp('target', 2000);
  if (!numAnim.error) {
    numAnim.start();
  } else {
    console.error(numAnim.error);
  }
}
