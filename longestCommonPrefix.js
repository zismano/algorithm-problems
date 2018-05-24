/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length === 0) {
		return '';
	}
	if (strs.length === 1) {
		return strs[0];
	}
	const firstElem = strs[0];
	let longestPrefix = '';    
	for (let i = 0; i < firstElem.length; i++) {
		for (j = 1; j < strs.length; j++) {
			if (firstElem.indexOf(firstElem[i], i) !== strs[j].indexOf(firstElem[i], i)) {
				return longestPrefix;
			}
		}
		longestPrefix += firstElem[i];
	}
	return longestPrefix;
};