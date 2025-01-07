const canvas=document.getElementById("myCanvas");

canvas.width = 800;
canvas.height = 400;

const ctx = canvas.getContext("2d");

const allNodes = [];

const totalNumberNodes = 8;

for(let i = 0; i <= totalNumberNodes; i++){
    allNodes.push( new Node([canvas.width, canvas.height]));
}

for(let i = 0; i < allNodes.length; i++){
    allNodes[i].getNodeCoordinates();
    allNodes[i].drawNode();
}

const network = new Network(allNodes);

network.drawMap();






// I want to have a node class
// This will create a point
// Draw said point to the canvas



/* I also want to have a network class
  1) takes an array of nodes and conects them
  2) this also adds their total distance
  3) I'll add some algorithms later 
*/