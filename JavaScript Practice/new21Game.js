/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
    if (k === 0 || n >= k + maxPts) {
        return 1.0;
    }

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1.0;

    let windowSum = 1.0;
    let totalProbability = 0.0;

    for (let i = 1; i <= n; i++) {
        dp[i] = windowSum / maxPts;

        if (i < k) {
            windowSum += dp[i];
        }

        if (i >= maxPts) {
            windowSum -= dp[i - maxPts];
        }
    }

    for (let i = k; i <= n; i++) {
        totalProbability += dp[i];
    }

    return totalProbability;
};

const n = 10, k = 1, maxPts = 10;
console.log(new21Game(n, k, maxPts));
