window.onload = function() {
  var numAnim = new countUp.CountUp('target',useEasing: false ,2000);
  if (!numAnim.error) {
    numAnim.start();
  } else {
    console.error(numAnim.error);
  }
}
