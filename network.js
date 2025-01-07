class Network{
    constructor(allNodes){
        this.allNodes = allNodes;
    }



    drawMap(){

        

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

        
    
        // This will just draw all the lines connecting all the nodes in the order that they are in
        // we will have an algorithem that iterates through and plots the lines somewhere else
    }
};