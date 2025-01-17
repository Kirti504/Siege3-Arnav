class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 1
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.sling = Constraint.create(options);
        strokeWeight(2);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;  
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
