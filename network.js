class Network{
    constructor(allNodes){
        this.allNodes = allNodes;
    }



    drawMap(){

        for(let i = 0; i < this.allNodes.length; i++){
            console.log('XXX');
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
};