function divisibleSumPairs(n, k, ar) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (i < j && (ar[i] + ar[j]) % k == 0) {
                sum++;
            }
        }
    }
    return sum;
}


console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]));

// here I took my time to read the task over and over again to fully understand it.
// Once I understood what I had to do, writing the code for it was very simple.