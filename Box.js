class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.12,
          'isStatic':false    
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      
      World.add(world, this.body);
    }

    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }

    display(){
      if(this.body.speed<3){
          var pos =this.body.position;
          var angle =this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle); 
          rectMode(CENTER);
          fill("pink");
          rect(0, 0, this.width, this.height);
          pop();
      }
    
     else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        //tint(255,this.Visibility);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }

   //console.log(this.Visibility);
      

      /*if(this.body.speed>2){
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }*/

      
    }
  }
  