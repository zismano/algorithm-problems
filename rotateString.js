/* 
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false
Note:

A and B will have length at most 100.
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A === B) {
    return true;  
  }
  let shiftPos = B.indexOf(A[0]);
  while (shiftPos !== -1) {
    if (B.substring(shiftPos) === A.substring(0, B.length - shiftPos) && 
        B.substring(0, shiftPos) === A.substring(B.length - shiftPos)) {
        return true;
    } else {
        shiftPos = B.indexOf(A[0], shiftPos + 1);
    }  
  }
  return false;
};