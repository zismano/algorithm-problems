// "north 2 east 3 south 2 west 3" -> 12
// n, e, e, e
// n, 0, 0, s
// x, w, w, s 

// "north 2 east 3 south 2 west 1" -> 0 (not closing a loop)
// n, e, e, e
// n, 0, 0, s
// X, 0, x, s 

// "north 2 east 3 south 2 west 1 north 2" -> 6
// n, e, x, e
// n, 0, n, s
// X, 0, w, s

// "north 3 west 1 north 1 east 2 south 2 east 5 south 4 east 2 north 2 west 2"
let scoreMovements = function(str) {
	let minRow = 0;
	let minCol = 0;
	let maxRow = 0;
	let maxCol = 0;
	let currRow = 0;
	let currCol = 0;
	const splittedStr = str.split(' ');
	// getting min and max rows and cols indexes
	for (let i = 0; i < splittedStr.length; i = i + 2) {
		if (splittedStr[i] === 'north') {
			currRow -= Number(splittedStr[i + 1]);
			if (currRow < minRow) {
				minRow = currRow;
			}
		} else if (splittedStr[i] === 'south') {
			currRow += Number(splittedStr[i + 1]);
			if (currRow > maxRow) {
				maxRow = currRow;
			}
		} else if (splittedStr[i] === 'west') {
			currCol -= Number(splittedStr[i + 1]);
			if (currCol < minCol) {
				minCol = currCol;
			}
		} else { 
			currCol += Number(splittedStr[i + 1]);
			if (currCol > maxCol) {
				maxCol = currCol;
			}
		}
	}
	// init matrix
	let moves = [];
	for (let i = minCol; i <= maxCol; i++) {
		moves[i] = [];
		for (let j = minRow; j <= maxRow; j++) {
			moves[i][j] = 0;
		}
	}
	// making steps
	currRow = currCol = 0;
	for (let i = 0; i < splittedStr.length; i = i + 2) {
		if (splittedStr[i] === 'north') {
			for (let j = 0; j < Number(splittedStr[i + 1]); j++) {
				moves[currCol][j * (-1) + currRow - 1] += 1;
			}
			currRow -= Number(splittedStr[i + 1]); 
		} else if (splittedStr[i] === 'south') {
			for (let j = 0; j < Number(splittedStr[i + 1]); j++) {
				moves[currCol][j + currRow + 1] += 1;
			}
			currRow += Number(splittedStr[i + 1]); 		
		} else if (splittedStr[i] === 'west') {
			for (let j = 0; j < Number(splittedStr[i + 1]); j++) {
				moves[j * (-1) + currCol - 1][currRow] += 1;
			} 
			currCol -= Number(splittedStr[i + 1]);
		}  else {
			for (let j = 0; j < Number(splittedStr[i + 1]); j++) {
				moves[j + currCol + 1][currRow] += 1;
			}
			currCol += Number(splittedStr[i + 1]);
		}
	}

	// get score
	if (startOfLoop.row === '') {	// no loop
		return 0;
	} else {
		findPathOfLoop(startOfLoop, moves) // TBD
	}
		
	console.log(moves);

	// console.log(`Min Row: ${minRow}`);
	// console.log(`Max Row: ${maxRow}`);
	// console.log(`Min Col: ${minCol}`);
	// console.log(`Max Col: ${maxCol}`);
}

let str = "north 3 west 1 north 1 east 2 south 2 east 5 south 4 east 2 north 2 west 2";
scoreMovements(str);