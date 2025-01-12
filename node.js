class Node{

    constructor(coordinates){
        this.coordinates = coordinates;

    }

    drawNode(){
        ctx.beginPath();
        ctx.arc(this.coordinates[0], this.coordinates[1], 10, 0, 2 * Math.PI);
        ctx.stroke()
    }
}

