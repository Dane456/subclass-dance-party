
var makeNewShakyDancer = function(top, left, timeInterval) {
  return new ShakyDancer(top, left, timeInterval);
};

var makeFadeInDownDancer = function(top, left, timeInterval) {
  return new FadeInDownDancer(top, left, timeInterval);
};

var makeNewFlashyDancer = function(top, left, timeInterval) {
  return new FlashyDancer(top, left, timeInterval);
};

////////////
var ShakyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

};

ShakyDancer.prototype = Object.create(Dancer.prototype);
ShakyDancer.prototype.constructor = ShakyDancer;

ShakyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('animated pulse gandalf');
};


////////////
var FadeInDownDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

};

FadeInDownDancer.prototype = Object.create(Dancer.prototype);
FadeInDownDancer.prototype.constructor = FadeInDownDancer;

FadeInDownDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass('animated fadeInDown snape');
};


/////////
var FlashyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

};

FlashyDancer.prototype = Object.create(Dancer.prototype);
FlashyDancer.prototype.constructor = FlashyDancer;

FlashyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass('animated flash drake');
};

