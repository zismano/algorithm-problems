/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let charactersHash = {};
  for (let i = 0; i < s.length; i++) {
    charactersHash[s[i]] = charactersHash[s[i]] ? ++charactersHash[s[i]] : 1;
  }
  let len = 0;
  let foundOddCountInHash = 0;  // boolean
  for (let key in charactersHash) {
    if (!(charactersHash[key] % 2)) {
      len += charactersHash[key];
    } else {
      len += charactersHash[key] - 1;
      foundOddCountInHash = 1;
    }
  }
  return len + foundOddCountInHash;
};