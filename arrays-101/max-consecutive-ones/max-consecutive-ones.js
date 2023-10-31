function findMaxConsecutiveOnes(nums) {
    var consecutiveOne = 0;
    var maximumOne = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            consecutiveOne++;
        }
        else {
            consecutiveOne = 0;
        }
        if (consecutiveOne > maximumOne) {
            maximumOne = consecutiveOne;
        }
    }
    return maximumOne;
}
