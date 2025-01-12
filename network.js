class Network{
    constructor(allNodes){
        this.allNodes = allNodes;
        this.routeLength;
        this.#findRouteLength();
    }



    drawMap(){

        for(let i = 0; i < this.allNodes.length; i++){
            this.allNodes[i].drawNode();
        }

        

        for(let i = 1; i <= (this.allNodes.length); i++){
            
            let a = i-1;
            let b = i;

            if(b == this.allNodes.length){
                b = 0;
            }
            
            console.log(this.allNodes[a].coordinates);
            console.log(this.allNodes[b].coordinates);
            
            ctx.beginPath();
            ctx.moveTo(this.allNodes[a].coordinates[0], this.allNodes[a].coordinates[1]);
            ctx.lineTo(this.allNodes[b].coordinates[0], this.allNodes[b].coordinates[1]);
            ctx.stroke();
        }
        
    }


    #findRouteLength(){

        var totalLength = 0;

        for(let i = 1; i <= (this.allNodes.length); i++){
            
            let a = i-1;
            let b = i;

            if(b == this.allNodes.length){
                b = 0;
            }
            
            totalLength += Math.sqrt(  Math.pow(this.allNodes[a].coordinates[0] - this.allNodes[b].coordinates[0],2) + Math.pow(this.allNodes[a].coordinates[1] - this.allNodes[a].coordinates[1],2) );
        }

        this.routeLength = totalLength;

        console.log("The total network length:  ", this.routeLength);


    }       




};