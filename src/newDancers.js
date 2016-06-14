var makeNewBlinkyDancer = function(top, left, timeInterval) {
  return new BlinkyDancer(top, left, timeInterval);
};

var makeNewShakyDancer = function(top, left, timeInterval, slideDist) {
  return new ShakyDancer(top, left, timeInterval, slideDist);
};

var ShakyDancer = function(top, left, timeBetweenSteps, slideDist) {
  Dancer.apply(this, arguments);
  this.slideDist = slideDist;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  //return blinkyDancer;
};

ShakyDancer.prototype = Object.create(Dancer.prototype);
ShakyDancer.prototype.constructor = ShakyDancer;

ShakyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('shake animated infinite');
};


