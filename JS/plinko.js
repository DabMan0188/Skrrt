class Plinko 
{
    constructor(x, y, r)
    {
        var option = {
            isStatic: false
        }
        this.r = r
        
        this.bodies = Bodies.circle(x, y, r, option);
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white")
        ellipseMode(RADIUS);
        ellpise(0, 0, this.r, this.r);
        pop();
    }
};