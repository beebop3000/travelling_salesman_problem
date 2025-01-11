class Line{
    constructor(ponts){
        this.points = ponts;
        this.#lineDist();
    }

    lineDraw(){
        ctx.beginPath();
        ctx.moveTo(this.points[0][0], this.points[0][1]);
        ctx.lineTo(this.points[1][0], this.points[1][1]);
        ctx.stroke();



    }

    #lineDist(){
        this.dist = Math.sqrt(  Math.pow(this.points[0][0] - this.points[1][0],2) + Math.pow(this.points[0][0] - this.points[1][0],2) );
    }


}