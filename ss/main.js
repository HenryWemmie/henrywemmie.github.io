const options = {
  decimalPlaces: 5,
  duration: 3600,
};
let demo = new CountUp('myTargetElement', 0.73, options);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}
