describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      //debugger;
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(3);
    });
  });
});


describe('PulsyDancer', function() {

  var pulsyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pulsyDancer = new PulsyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pulsyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node pulse', function() {
    sinon.spy(pulsyDancer.$node, 'toggleClass');
    pulsyDancer.step();
    expect(pulsyDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pulsyDancer, 'step');
      expect(pulsyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pulsyDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(pulsyDancer.step.callCount).to.be.equal(3);
    });
  });
});



describe('FadeInDancer', function() {

  var fadeInDownDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadeInDownDancer = new FadeInDownDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fadeInDownDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade in', function() {
    sinon.spy(fadeInDownDancer.$node, 'addClass');
    fadeInDownDancer.step();
    expect(fadeInDownDancer.$node.addClass.called).to.be.true; //?
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fadeInDownDancer, 'step');
      expect(fadeInDownDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fadeInDownDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(fadeInDownDancer.step.callCount).to.be.equal(3);
    });
  });
});



describe('FlashyDancer', function() {

  var flashyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flashyDancer = new FlashyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(flashyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade in', function() {
    sinon.spy(flashyDancer.$node, 'addClass');
    flashyDancer.step();
    expect(flashyDancer.$node.addClass.called).to.be.true; //?
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(flashyDancer, 'step');
      expect(flashyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(flashyDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(flashyDancer.step.callCount).to.be.equal(3);
    });
  });
});


