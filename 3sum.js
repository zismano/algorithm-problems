/* Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let set = new Set();
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
        return result;
    }
    for (let j = i + 1; j < nums.length - 1; j++) {
        if (nums[i] + nums[j] >= 0 && nums[j + 1]) {
            break;
        }
        for (let k = j + 1; k < nums.length; k++) {
            if (nums[i] + nums[j] + nums[k] === 0 && !set.has(`${nums[i]},${nums[j]},${nums[k]}`)) {
                set.add(`${nums[i]},${nums[j]},${nums[k]}`);
                result.push([nums[i], nums[j], nums[k]]);
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                break;
            }
        }
    }
  }
  return result;
};