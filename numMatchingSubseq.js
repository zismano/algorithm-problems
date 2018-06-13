/* Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

Example :
Input: 
S = "abcde"
words = ["a", "bb", "acd", "ace"]
Output: 3
Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
Note:

All words in words and S will only consists of lowercase letters.
The length of S will be in the range of [1, 50000].
The length of words will be in the range of [1, 5000].
The length of words[i] will be in the range of [1, 50]. */

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */

// subsequence - order matters
var numMatchingSubseq = function(S, words) {
    let counter = 0;
    words.forEach(word => {
        let index = S.indexOf(word[0]);
        if (index !== -1) {
            let isSubsequence = true;
            for (let i = 1; i < word.length; i++) {
                if (S.indexOf(word[i], index + 1) <= index) {
                    isSubsequence = !isSubsequence;
                    break;
                } else {
                    index = S.indexOf(word[i], index + 1);
                }
            }
            if (isSubsequence) {
                counter++;
            }
        }
    })
    return counter;
};