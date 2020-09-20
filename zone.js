class Ra {
  constructor(x, y, w, h) {
    var rect_options = {
      isStatic: true,
      'restitution': 0.8,
      'friction': 0.3,
      'density': 1.0
    }

    this.body = Bodies.rectangle(x, y, w, h, rect_options);
    this.width = w;
    this.height = h;

    World.add(world, this.body);
  }

  display() {
    rectMode(CENTER);
    fill("red");
    var pos = this.body.position;
    rect(pos.x, pos.y, this.width, this.height);
  }
}