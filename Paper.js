class Paper {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(100, height - 20, 25, options);
        this.x = x;
        this.y = y;
        this.r = r;

        World.add(world, this.body);
    }

display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("cyan");
    ellipse(0, 0, this.r, this.r);
    pop();
}

};