import "./style.css";
//import headerModule from "./header.js";

// const log = txt => console.log(txt);


// Creating two-dimensional array
class Grid {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    createGrid(){
        const newArray = [];
        for(let i = 0; i < this.height; i += 1){
            newArray.push([]);
            for(let j = 0; j < this.width; j += 1){
                newArray[i].push(new Spot(j, i))
            }
        }
       return newArray;
}
}


//saving spot properties
class Spot{
    constructor(j, i){
        this.x = j;
        this.y = i;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.isWall = false;
    }
}

//Finding all neighbors and returning resulting array
class FindingPath extends  Grid{
    constructor(startX, startY, endX, endY, grid){

        //not dynamic dimensions value ( to fix ) !!!
        super(5, 3);
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.grid = grid;
        this.openSet = [];
        for(let i = 0; i < grid.length; i += 1){
            for(let j = 0; j < grid[i].length; j += 1){
                if((grid[i][j].x === this.startX) && (grid[i][j].y === this.startY)){
                    this.openSet.push(grid[i][j])
                }
            }
        }
        this.closedSet = [];
    }
    findNeighbors(){
        console.log(this.grid);
        while(this.openSet.length){
            let neighbors = [];
            this.openSet.forEach(spot => {
                if(spot.x === this.endX && spot.y === this.endY){
                    console.log("YOU WIN!");
                    return
                }
                if(spot && !this.closedSet.includes(spot)){
                    if(spot && spot.y > 0){
                        this.grid[spot.x][spot.y - 1].g = this.grid[spot.x][spot.y].g + 1;
                        neighbors.push(this.grid[spot.x][spot.y - 1]);
                    }

                    if(spot && spot.y < (this.height - 1)){
                        this.grid[spot.x][spot.y + 1].g = this.grid[spot.x][spot.y].g + 1;
                        neighbors.push(this.grid[spot.x][spot.y + 1]);
                    }

                    if(spot && spot.x > 0){
                        this.grid[spot.x - 1][spot.y].g = this.grid[spot.x][spot.y].g + 1;
                        neighbors.push(this.grid[spot.x - 1][spot.y]);
                    }

                    if(spot && spot.x < (this.width - 1)) {
                        this.grid[spot.x + 1][spot.y].g = this.grid[spot.x][spot.y].g + 1;
                        neighbors.push(this.grid[spot.x + 1][spot.y]);
                    }
                }
            });
            this.openSet.forEach(el => this.closedSet.push(el));
            this.openSet = [];
            neighbors.forEach(el => this.openSet.push(el))
            // console.log(this.closedSet)
        }


        console.log(this.grid);
        // log(this.openSet);


    }

    removeFromArray(arr, elem) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == elem) {
                arr.splice(i, 1);
            }
        }
    }


}

const FP = new Grid(5, 3);
const arr = FP.createGrid();
const result = new FindingPath(1, 0, 4, 2, arr).findNeighbors();

// for(let i = 0; i < arr.length; i += 1){
//     for(let j = 0; j < arr[i].length; j += 1){
//         arr[i][j]
//     }
// }