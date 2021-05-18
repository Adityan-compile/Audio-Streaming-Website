exports.getTime = () => {
  var hour = new Date().getHours();
  if (hour < 12) {
    this.time = 'Morning';
  } else if (hour < 18) {
    this.time = 'Afternoon';
  } else {
    this.time = 'Evening';
  }
};
