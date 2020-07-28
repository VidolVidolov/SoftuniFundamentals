function condensing(nums) {

    let condensed = [];
    let moving = 0;
    if (nums.length == 1) {
        console.log(nums[0]);

    } else {
        while (nums.length > 1) {

            condensed = [nums.length - 1];

            for (let i = 0; i < nums.length - 1; i++) {

                moving = nums[i] + nums[i + 1];
                condensed[i] = moving;

            }
            nums = condensed;
        }

        console.log(condensed[0]);
    }


}

condensing([2,10,3]);