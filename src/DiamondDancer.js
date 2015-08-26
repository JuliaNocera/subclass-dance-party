var DiamondDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.toggle =  false;
};

DiamondDancer.prototype = Object.create(Dancer.prototype);
DiamondDancer.prototype.constructor = DiamondDancer;

DiamondDancer.prototype.step = function(timeBetweenSteps){
    // call the old version of step at the beginning of any call to this new version of step
    //Dancer.prototype.step(timeBetweenSteps, this.step);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.attr('id', 'diamond');
    this.$node.on('mouseover', function(e) {
      $(this).css({"background": "radial-gradient( #fff, #000, #fff, #000)" });
    })
    this.$node.on('mouseout', function(e) {
      $(this).css({"background": "radial-gradient( #FC16DD, #16D6FC, #AE12F1, #16D6FC)" });
    });
    this.setPosition(this.top, ++this.left);
    Dancer.prototype.step.call(this, this.timeBetweenSteps);
};