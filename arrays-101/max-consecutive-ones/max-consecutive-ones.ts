// Given a binary array nums, return the maximum number of consecutive 1's in the array.

function findMaxConsecutiveOnes(nums: number[]): number {
  let consecutiveOne: number = 0;
  let maximumOne: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      consecutiveOne++;
    } else {
      consecutiveOne = 0;
    }

    if (consecutiveOne > maximumOne) {
      maximumOne = consecutiveOne;
    }
  }

  return maximumOne;
}
