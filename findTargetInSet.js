/*
Given a set of strings, {"one", "cat", "two", "four"} and a target string, return true if the target string is composed of elements from the set.

"twoone", {"one", "cat", "two", "four"}  -> True
"twone", {"one", "cat", "two", "four"}  -> False
"twotwo", {"one", "cat", "two", "four"}  -> True
"twotwotwotwotwotwotwotwoonefourfourcatcat", {"one", "cat", "two", "four"} -> True

t, w
tw
two, o
  p
twoo
{ one, cat, two, twoo, ne, four}
*/
// length of target is m
const findTargetInSet = function(target, set) { // O(2^m)
  let currWord = '';
  const rec = function(currWord, currIndex) {
    if (currIndex === target.length) {
      return (set.has(currWord)); // O(m)
    }
    if (set.has(currWord)) { // O(m)
      return rec(currWord, currIndex + 1) || rec('', currIndex + 1); // O(2^m)
    }
    return rec(currWord + target[currIndex], currIndex + 1); 
  }
  return rec(currWord, 0);  
}

// currWord = target.substring(start, end)

const set = new Set(["two", "twone"]);
console.log(
  findTargetInSet("twone", set)
);