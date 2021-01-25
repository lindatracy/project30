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
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill(this.color);
        var body=this.body.position;
        rect(body.x,body.y,30,40);
    }
}