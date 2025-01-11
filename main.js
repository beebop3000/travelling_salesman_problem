const canvas=document.getElementById("myCanvas");

canvas.width = 800;
canvas.height = 400;

const ctx = canvas.getContext("2d");

const points = [[100,90],
                [750,45],
                [330,180],
                [410,360],
                [60,12],
                [55,350],
                [380,140],
                [420,320],
                [710,380],
                [710,380],
                [600,200]
              ]

const allNodes = []

// for(let i = 0; i < points.length; i++){
//   allNodes.push( new Node(points[i],[canvas.width, canvas.height]));
// }

// const network = new Network(allNodes);

// network.drawMap();


line = new Line([[1,2],[3,4]]);

console.log(line.dist);





// I want to have a node class
// This will create a point
// Draw said point to the canvas



/* I also want to have a network class
  1) takes an array of nodes and conects them
  2) this also adds their total distance
  3) I'll add some algorithms later 
*/