// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

var numIslands = function (grid) {
  //declare a variable for the number of islands
  let islands = 0;

  //loop through every tile in the grid
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === "1") {
        checkAdjacent(row, column);
        islands++;
      }
    }
  }
  //find a way to search through all of the land connecting to the first piece of island found.
  function checkAdjacent(row, column) {
    if (grid?.[row]?.[column] === "1") {
      //set the tile to an arbitrary value that isn't "1" or undefined
      grid[row][column] = "2";

      //check each nieghboring location in order and send it back through this same function
      checkAdjacent(row + 1, column);
      checkAdjacent(row - 1, column);
      checkAdjacent(row, column + 1);
      checkAdjacent(row, column - 1);
    }
  }
  return islands;
};

//takes a piece of land and determines if the neighbors are also land or not
let checkAdjacent = (grid, row, column) => {};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));
