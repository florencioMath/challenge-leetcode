// Challenge - 0001. Two Sum
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//   for (let i = 0; nums.length > i; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//           if(nums[i] + nums[j] === target) return [i,j];
//       }
//   }
//   return [];
//
//   // const map = {};
//   // for (let i = 0; i < nums.length; i++) {
//   //     const complement = target - nums[i];
//   //     if (map[complement] !== undefined) {
//   //         return [map[complement], i];
//   //     }
//   //     map[nums[i]] = i;
//   // }
//   // return [];
// };

// *****************************************************************************//

// Challenge - 0009. Palindrome Number
// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//   return x === Number(x.toString().split('').reverse().join(''));
//
//   if(x < 0) return false;
//
//   // let reversed = 0;
//   // let copy = x;
//
//   // while(x > 0) {
//   //     reversed = (reversed * 10) + (x % 10);
//   //     x = Math.floor(x / 10);
//   // }
//   // return reversed === copy;
// };

// *****************************************************************************//
