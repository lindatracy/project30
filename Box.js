class box{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.8
        }
        this.body=Bodies.rectangle(x,y,30,40,options);
        this.x=x;
        this.y=y;
        this.color="yellow";
        this.visibility=255;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<3){
        rectMode(CENTER);
        fill(this.color);
        var body=this.body.position;
        rect(body.x,body.y,30,40);
    }
    else{
        World.remove(world,this.body);
       this.visibility=this.visibility-1;
       tint(255,this.visibility);
        
    }
}
}