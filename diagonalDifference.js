// problem 11

function diagonalDifference(arr) {
    let leftToRightSum = 0;
    let rightToLeftSum = 0;
    let counter = arr.length - 1; // this would be 2. I can use this to get the value I need for the rightToLeftSum.
    
    for (let i = 0; i < arr.length; i++) {
        leftToRightSum += arr[i][i];
        rightToLeftSum += arr[i][counter];
        counter--; // on each loop this will be 2,1,0
    }

    return Math.abs(leftToRightSum - rightToLeftSum);
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]));

// I believe I can fly...