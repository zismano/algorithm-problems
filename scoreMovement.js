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
	let moves = [];
	let minRow = 0;
	let minCol = 0;
	let maxRow = 0;
	let maxCol = 0;
	let currRow = 0;
	let currCol = 0;
	const splittedStr = str.split(' ');
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
	console.log(`Min Row: ${minRow}`);
	console.log(`Max Row: ${maxRow}`);
	console.log(`Min Col: ${minCol}`);
	console.log(`Max Col: ${maxCol}`);
}

let str = "north 3 west 1 north 1 east 2 south 2 east 5 south 4 east 2 north 2 west 2";
scoreMovements(str);