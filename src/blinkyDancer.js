var BlinkyDancer = function(top, left, timeBetweenSteps){
  // arguments = { 0: top, 1: left, 2: timeBetweenStep };
  Dancer.call(this, top, left, timeBetweenSteps);
  //Dancer.apply(this, [top, left, timeBetweenSteps]);
  //Dancer.apply(this, arguments);
  // this.step(timeBetweenSteps); - being called through Dancer.call() line 19
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function(timeBetweenSteps){
    // call the old version of step at the beginning of any call to this new version of step
    //Dancer.prototype.step(timeBetweenSteps, this.step);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
    this.setPosition(this.top, --this.left);
    Dancer.prototype.step.call(this, this.timeBetweenSteps);
};


