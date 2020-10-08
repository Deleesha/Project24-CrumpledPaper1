class Ball {

    constructor(x,y){

        var ball_options = {

            isStactic : true,
            restitution : 0.3 ,
            density : 1.2,
            friction : 0.5
             
        }

        
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,50, 50 , ball_options);
        World.add(myworld,this.body);

        //console.log(this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(position.x,position.y);
        rotate(angle);
        strokeWeight(4);
        stroke("blue");
        fill("blue"); 
        rect(0, 0,this.width,this.height);
        pop();
    }



}


