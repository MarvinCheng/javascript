/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划：状态转移方程为 fn = math.max(f(0),f(1),f(2)....f(n-1));
 * dp[i]表示从第i个开始偷时能拿到的最大金额
 * 举个例子：
 * [4 5 6 1 3 9 15 2]数组
 * [0 1 2 3 4 5 6 7]对应坐标
 * dp[n-1] = 2
 * dp[n-2] = 15
 * dp[n-3] = 9+dp[n-1]
 * dp[n-4] = 3+max(dp[n-2] ,dp[n-1])
 * dp[n-5] = 1+max(dp[n-3] ,dp[n-2])
 * dp[n-6] = 6+max(dp[n-4] ,dp[n-3])
 * 所有返回：Math.max(dp[0], dp[1])即可。
 */
var rob = function (nums) {
    if (!nums.length) return 0;
    let n = nums.length;
    let dp = new Array(n).fill(0);
    dp[n - 1] = nums[n - 1];
    dp[n - 2] = nums[n - 2];
    dp[n - 3] = nums[n - 3] + dp[n - 1];

    for (let i = n - 4; i >= 0; i--) {
        dp[i] = nums[i] + Math.max(dp[i + 2], dp[i + 3]);
    }
    if (nums.length <= 3) return Math.max(...dp);
    return Math.max(dp[0], dp[1]);
};


var rob2 = function (nums) {
    if (nums.length === 0) return 0;
    let n = nums.length,
        //Math.max(nums[0],nums[1])是为了只有2个号码的时候可以return最大
        result = [nums[0], Math.max(nums[0],nums[1])];
    for (let i = 2; i < n; i++) {
        result.push(Math.max(result[i - 2] + nums[i], result[i - 1]))
    }
    return result[n - 1];
};

console.log(rob([4, 5, 6, 1, 3, 9, 15, 2]));
console.log(rob2([4, 4, 6, 1, 3, 9, 15, 2]));




var reverseString = function(s) {
    for(let i=0,j=s.length-1;i<j;i++){
        let temp = s[j];
        s[j] = s[i];
        s[i] = temp;
        j--;
    }
    console.log(s);
};

reverseString(["h","e","l","l","o"]);