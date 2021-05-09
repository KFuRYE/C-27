class Ball {
  constructor(x, y, r) {
    var options = { 
      density:0.8, 
      restitution: 1.0,
      friction: 1.0};
    this.x= x;
    this.y= y;
    this.r = r;

    this.body = Bodies.circle(this.x, this.y, this.r/2, options);
    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("pink");
    ellipseMode(CENTER);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
