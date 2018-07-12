/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < s.length && j >= 0) {
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
        if (isCharacterAtIndex(s[i]) && isCharacterAtIndex(s[j])) {
            return false;
        } else {
            if (!isCharacterAtIndex(s[i])) {
                i++;
            }
            if (!isCharacterAtIndex(s[j])) {
                j--;
            }
        } 
    } else {
      i++;
      j--;
    }
  }
  return true;
};

const isCharacterAtIndex = ch => 
    (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) || 
    (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) || 
    (ch.charCodeAt() >= 48 && ch.charCodeAt() <= 57);