class Shooter {
    constructor(x, y) {
      var options = {
        'restitution':0.4,
        'friction':0,
        'isStatic':false   
      }
      this.body = Bodies.rectangle(x, y,10, 10, options);
      this.height = 20;
      this.width = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rect(0, 0, this.height,this.width);
      pop();
    }
  };