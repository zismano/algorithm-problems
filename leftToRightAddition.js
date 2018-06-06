/* 
Submit a working solution and we'll reach out to setup an interview. Correctness matters more than speed. We don't care how long you take.

Write a function to add digits left to right AND carry the right digit rather than carrying the left digit.

For example:

1 + 10 = 20 // Add digits left to right
51 + 51 = 12 // 5 + 5 = 10, so carry the right digit, 0, to get 0 + 1 + 1 = 2
99 + 99 = 126 // 9 + 9 = 18, carrying the 8, we get 8 + 9 + 9 = 26 for the rightmost digits
*/

/**
 * @param {int} x
 * @param {int} y
 * @return {int}
 */
// Fill in the code below
function leftToRightAddition(x, y) {
	if (x < 10 && y < 10) {
		return x + y;
	}
	let splittedX = splitDigits(x);
	let splittedY = splitDigits(y);
	let minDigits = findMinimumDigits(splittedX, splittedY);
	let multiplier = 1;
	let sum = 0, remainder = 0;
	for (let i = 0; i < minDigits; i++) {
		let digitsSum = Number(splittedX[i]) + Number(splittedY[i]) + remainder;
		if (digitsSum < 10) {
			sum += multiplier * digitsSum;
			remainder = 0;
		} else {
			sum += multiplier * (Math.floor(digitsSum / 10));
			remainder = digitsSum % 10;			
		}
		multiplier *= 10;			
	}
	if (minDigits < splittedX.length) {
		return addSumToRemainedDigits(splittedX, minDigits, sum, remainder);

	}
	if (minDigits < splittedY.length) {
		return addSumToRemainedDigits(splittedY, minDigits, sum, remainder);
	}
	if (remainder) {
		sum += multiplier * remainder;
	}	
	return reverseNum(sum);
}

const splitDigits = function(num) {
	let NumAsString = num + '';
	return NumAsString.split('');
}

const findMinimumDigits = function(arr1, arr2) {
	let minDigits = arr1.length > arr2.length ? arr2.length : arr1.length;
	return minDigits;
}

const addSumToRemainedDigits = function(array, minDigits, sum, remainder) {
	let remainedDigits = array.slice(minDigits).reverse().join('');
	const remainedDigitsAndRemainder = Number(remainedDigits) + remainder;
	const remainedDigitsAndRemainderStr = remainedDigitsAndRemainder + ''
	let result = (remainedDigitsAndRemainderStr + sum).split('').reverse().join('');
	return Number(result);
}

const reverseNum = function(num) {
	let strNum = num + '';
	return Number(strNum.split('').reverse().join(''));
}