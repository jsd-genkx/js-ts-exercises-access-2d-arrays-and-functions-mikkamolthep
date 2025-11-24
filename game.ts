const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0; 
moves.push(board[row][col]); // A // r0 c0 [0][0] 

// Move Right to B
col++;
moves.push(board[row][col]); // B // r0 c1 [0][1]

// Move Right to C
col++
moves.push(board[row][col]) // C // r0 c2 [0][2]

// Move Down to F
row++
moves.push(board[row][col]) // F // r1 c2 [1][2]

// Move left to E
col--
moves.push(board[row][col]) // E // r1 c1 [1][1]

// Move left to D
col--
moves.push(board[row][col]) // D // r1 c0 [1][0]

// Move left to G
row++
moves.push(board[row][col]) // G // r2 c0 [2][0]

// Move left to H
col++
moves.push(board[row][col]) // H // r2 c1 [2][1]

// Move left to I
col++
moves.push(board[row][col]) // I // r2 c2 [2][2]

console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E

console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4
