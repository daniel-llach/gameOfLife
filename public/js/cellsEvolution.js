function liveNeighbors(neighbors){
  let count = 0;
  for(let i=0;i<neighbors.length;i++){
    (neighbors[i] === 1) ? count++ : null;
  }
  return count;
}

export function evolveCells(cells) {
  let rowLimit = cells.length;
  let newCells = [];
  for (let i=0;i<rowLimit;i++){
    let colLimit = cells[i].length;
    let newCol = []
    for(let x=0;x<colLimit;x++){
      // current cell
      let current = cells[i][x]
      // Define current neighbors
      let neighbors = [];
      // up
      (cells[i-1] === undefined) ? null : (cells[i-1][x] === undefined) ? null : neighbors.push(cells[i-1][x]);
      // up right
      (cells[i-1] === undefined) ? null : (cells[i-1][x+1] === undefined) ? null : neighbors.push(cells[i-1][x+1]);
      // right
      (cells[i] === undefined) ? null : (cells[i][x+1] === undefined) ? null : neighbors.push(cells[i][x+1]);
      // down right
      (cells[i+1] === undefined) ? null : (cells[i+1][x+1] === undefined) ? null : neighbors.push(cells[i+1][x+1]);
      // down
      (cells[i+1] === undefined) ? null : (cells[i+1][x] === undefined) ? null : neighbors.push(cells[i+1][x]);
      // down left
      (cells[i+1] === undefined) ? null : (cells[i+1][x-1] === undefined) ? null : neighbors.push(cells[i+1][x-1]);
      //  left
      (cells[i] === undefined) ? null : (cells[i][x-1] === undefined) ? null : neighbors.push(cells[i][x-1]);
      //  up left
      (cells[i-1] === undefined) ? null : (cells[i-1][x-1] === undefined) ? null : neighbors.push(cells[i-1][x-1]);
      // rules
      let lives = liveNeighbors(neighbors);
      if(current == 1){
        switch(true){
          case (lives < 2):
            newCol.push(0)
            break;
          case (lives > 1 && lives < 4):
            newCol.push(1)
            break;
          case (lives > 3):
            newCol.push(0)
            break;
        }
        // life
      }else{
        // dead
        if(lives == 3){
          newCol.push(1)
        }else{
          newCol.push(current)
        }
      }
    }
    newCells.push(newCol);
  }
  return newCells
}
