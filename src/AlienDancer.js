var AlienDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $("<div></div>");
};
AlienDancer.prototype = Object.create(Dancer.prototype);
AlienDancer.prototype.constructor = AlienDancer;

AlienDancer.prototype.step = function() {
    this.$node.attr('id', 'alien');
    this.$node.on('mouseover', function(e) {
      $(this).css({"background-image": "url('lib/images/ET.jpeg')", "height": "45", "width": "70"});
    })
    this.$node.on('mouseout', function(e) {
      $(this).css({"background-image": "url('lib/images/AlienJayPeeGee.jpg')", "height": "40", "width": "40" });
    });
    this.setPosition(this.top, ++this.left);
    Dancer.prototype.step.call(this, this.timeBetweenSteps);
};