// brutal force
function maxArray(a, k) {
    let max = 0;

    for (let i = 0; i < a.length; i++) {
        let count = 0;
        let remain = k - a[i];
        if (remain > 0) {
            count++;
            let j = i + 1;
            while (j < a.length && remain > 0) {
                remain = remain - a[j];
                count++;
                j++;
            }
        }
        max = Math.max(count, max);
    }
    return max;

}

//better solution
function maxSubString(a, k) {
    let sum = 0;
    let cnt = 0;
    let maxCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (sum - a[i] <= k) {
            sum += a[i]
            cnt++;
        }
        else {
            //remove the first element, the add the ith element and recount the sum
            sum = sum - a[i - cnt] + a[i];
        }
    }
    maxCount = Math.max(cnt, maxCount);
    return maxCount;
}


console.log(maxArray([1, 2, 3], 3));

console.log(maxArray([3, 1, 2, 1], 4));

console.log(maxArray([3, 1, 2, 1, 1], 5));

console.log(maxArray([3, 1, 2, 1, 1, 1], 6));

console.log(maxSubString([3, 1, 2, 1, 1, 1], 6));
