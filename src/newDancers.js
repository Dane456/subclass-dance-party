
var makeNewPulsyDancer = function(top, left, timeInterval) {
  return new PulsyDancer(top, left, timeInterval);
};

var makeFadeInDownDancer = function(top, left, timeInterval) {
  return new FadeInDownDancer(top, left, timeInterval);
};

var makeNewFlashyDancer = function(top, left, timeInterval) {
  return new FlashyDancer(top, left, timeInterval);
};

////////////gandalf
var PulsyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

};

PulsyDancer.prototype = Object.create(Dancer.prototype);
PulsyDancer.prototype.constructor = PulsyDancer;

PulsyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass('gandalf');
  this.$node.toggleClass('animated pulse');
};


////////////snape
var FadeInDownDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

};

FadeInDownDancer.prototype = Object.create(Dancer.prototype);
FadeInDownDancer.prototype.constructor = FadeInDownDancer;

FadeInDownDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass('animated fadeInDown snape');
};


/////////drake
var FlashyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

};

FlashyDancer.prototype = Object.create(Dancer.prototype);
FlashyDancer.prototype.constructor = FlashyDancer;

FlashyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass('animated flash drake');
};

