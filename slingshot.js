class Slingshot{
constructor(bodyA,pointB){
var options = {
bodyA:bodyA,
pointB:pointB,
length:10,
stiffness:0.04,

}

this.pointB=pointB
    this.sling= constraint.create(options)
    World.add(world,this.sling)
}

fly(){
this.sling.bodyA=null

}



display(){
    if(this.sling.bodyA){
        var z=this.sling.bodyA.position
        var pointB=this.pointB
        strokeWeight(6)
        line(z.x,z.y,pointB.x,pointB.y)

    }



}
}