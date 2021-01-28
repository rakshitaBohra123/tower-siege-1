class Ground  {
    constructor(x,y,width,height){
    var options ={
      //restitution:0.04,
      friction:0.0,
      isStatic:true
    } 
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width
    this.height=height;
    World.add(world,this.body);
  }
  display(){
fill("brown")
rectMode(CENTER);
rect(0,0,this.width,this.height);
  }
  };
  