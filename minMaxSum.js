function miniMaxSum(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let min = 0;
    let max = 0;
    for (let i = 1; i < arr.length; i++) {
        max+= sortedArr[i];
    }

    for (let j = 0; j < arr.length -1; j++) {
        min+= sortedArr[j];
    }

    return `${min} ${max}`
}

console.log(miniMaxSum([1,2,3,4,5]));