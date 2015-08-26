var PictureDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $("<div></div>");
  this.nebula = false;
};

PictureDancer.prototype = Object.create(Dancer.prototype);
PictureDancer.prototype.constructor = PictureDancer;
PictureDancer.prototype.step = function() {
  this.$node.attr('id', 'moon');

    if(this.nebula){
      this.$node.removeAttr('id');
      this.$node.attr('id', 'nebula');
      return;
    }

    this.setPosition(++this.top, this.left);
    // this.$node.toggle();

    Dancer.prototype.step.call(this, this.timeBetweenSteps);
    for(var i = 0; i < window.dancers.length; i++){
        //console.log(window.dancers[i].constructor);
      if(window.dancers[i].constructor===PictureDancer) {
          continue;
      }

      if(Math.abs(window.dancers[i].left - this.left) < 35){
        if(Math.abs(window.dancers[i].top - this.top) < 35){
          this.nebula = true;
          this.$node.removeAttr('id');
          this.$node.attr('id', 'nebula');
        }
      }
      if(this.nebula){
        this.setPosition(this.top, this.left);
      }

    }

}

