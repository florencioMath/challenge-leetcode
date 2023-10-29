// Given an array nums of integers, return how many of them contain an even number of digits.
function findNumbers(nums) {
    var totalOfEven = 0;
    for (var i = 0; nums.length > i; i++) {
        if (nums[i].toString().length % 2 == 0) {
            totalOfEven++;
        }
    }
    return totalOfEven;
}
