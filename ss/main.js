const options = {
  decimalPlaces: 5,
  duration: 3600,
};
let demo = new CountUp('myTargetElement', 50, options);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}
