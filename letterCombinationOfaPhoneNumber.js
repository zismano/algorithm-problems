/*Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want. */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  conversion = {
  	2: ['a', 'b', 'c'],
  	3: ['d', 'e', 'f'],
  	4: ['g', 'h', 'i'],
  	5: ['j', 'k', 'l'],
  	6: ['m', 'n', 'o'],
  	7: ['p', 'q', 'r', 's'],
  	8: ['t', 'u', 'v'],
  	9: ['w', 'x', 'y', 'z']
  } 
  let result = []; 
  const getCombination = function(combination, indexDigit) {
  	if (combination.length === digits.length) {
  		if (digits[0] === digits[1] || result.indexOf(combination.split('').sort().join('')) === -1) {
	  		result.push(combination);  			
  		}
  		return;
  	}
  	for (let i = 0; i < digits.length; i++) {
  		if (indexDigit.indexOf(i) === -1) {
	  		for (let j = 0; j < conversion[digits[i]].length; j++) {
	  			getCombination(combination + conversion[digits[i]][j], indexDigit + i);
	  		}
	  	}
  	}
  }
  if (digits.length) {
	  getCombination('', ''); 	
  }
  return result;
};