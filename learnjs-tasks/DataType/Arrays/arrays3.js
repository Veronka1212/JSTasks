function getMaxSubSum(arr) {
    let max = 0;
    let current = 0;

    for (let item of arr) {
        current += item;
        max = Math.max(max, current);
        if (current < 0) current = 0;
    }

    return max;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );