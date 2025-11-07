const nums = [12, 45, 76, 34, 54, 78]
for (let i = 0; i < nums.length; i++) {
    const count = nums[i];

    if (nums[i] > 45) {
        break;
    }
    console.log(count)
}