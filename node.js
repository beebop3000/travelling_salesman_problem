class Node{

    constructor(dimensions){
        this.dimensions = dimensions;
        this.coordinates;
        // We might have a feature here because I sill eventually want to control the ecxact coordinadets 
    }

    getNodeCoordinates(){
        console.log(this.dimensions);
        this.coordinates = [Math.floor(Math.random() * this.dimensions[0]* 0.9), Math.floor(Math.random() * this.dimensions[1] * 0.9 )]; // times 0.9 so just in slightly from the edge
    }


    drawNode(){
        ctx.beginPath();
        ctx.arc(this.coordinates[0], this.coordinates[1], 10, 0, 2 * Math.PI);
        ctx.stroke()
    }





}

