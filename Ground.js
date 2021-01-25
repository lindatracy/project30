class Ground{
    constructor(x,y){
        var options={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,200,10,options);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        push();
        var body=this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(body.x,body.y,200,10);
        pop();
    }
}