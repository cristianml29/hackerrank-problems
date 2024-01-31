function findMedian(arr) {
    arr.sort((a,b) => a-b);
    let median = Math.floor(arr.length / 2);
    return Math.floor(arr[median]);
}

console.log(findMedian([5,3,1,2,4]));