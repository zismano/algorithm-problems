/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

S will be a string with length at most 12.
S will consist only of letters or digits.
*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let results = [];
  const findOption = function(str, i) {
    if (str.length === S.length) {
        results.push(str);
        return;
    }
    if (S[i].charCodeAt(0) >= 65 && S[i].charCodeAt(0) <= 122) {
        findOption(str + S[i].toUpperCase(), i + 1);
        findOption(str + S[i].toLowerCase(), i + 1);
    } else {
        findOption(str + S[i], i + 1);
    }
  }
  findOption('', 0);
    return results;
};
