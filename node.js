class Node{

    constructor(coordinates,dimensions){
        this.dimensions = dimensions;
        this.coordinates = coordinates;
        // Pre-selected coordinates
    }


    drawNode(){
        ctx.beginPath();
        ctx.arc(this.coordinates[0], this.coordinates[1], 10, 0, 2 * Math.PI);
        ctx.stroke()
    }


}

