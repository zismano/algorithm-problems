/* 
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
	if (s.length === 1) {
		return s;
	}
	let longest = '';
	for (let i = 0; i < s.length; i++) {
	  let indexBefore = i;
	  let indexAfter = i + 1;
	  while (indexAfter < s.length && indexBefore >= 0 && s[indexBefore] === s[indexAfter]) {
	  	indexBefore--;
	  	indexAfter++;
	  }
	  let currPalindrome = s.substring(indexBefore + 1, indexAfter);
	  if (currPalindrome.length > longest.length) {
	  	longest = currPalindrome;
	  }
	  indexBefore = i;
	  indexAfter = i + 2;
	  while (indexAfter < s.length && indexBefore >= 0 && s[indexBefore] === s[indexAfter]) {
	  	indexBefore--;
	  	indexAfter++;
	  }
	  currPalindrome = s.substring(indexBefore + 1, indexAfter);
	  if (currPalindrome.length > longest.length) {
	  	longest = currPalindrome;
	  }	  
	}
	return longest;   
};

