// problem 12

function countingSort(arr) {
    let result = new Array(100).fill(0); // I've used a while loop before I had to look for a better way to do this.
    // this is much better. With the 'new Array(100)' I'm creating an array with 100 empty items
    // and then with the .fill(0) method I'm filling that array with zeros. 
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == arr[j]) { // here I'm checking how many times i(0) appears in the array that I passed to my test console log. That would be 0. Then I continue checking until the index 99.
                result[i]++;
            }
        }
    }
    return result;
}

console.log(countingSort([63,25,73,1,98,73,56,84,86,57,16,83,8,25,81,56,9,53,98,67,99,12,83,89,80,91,39,86,76,85,74,39,25,90,59,10,94,32,44,3,89,30,27,79,46,96,27,32,18,21,92,69,81,40,40,34,68,78,24,87,42,69,23,41,78,22,6,90,99,89,50,30,20,1,43,3,70,95,33,46,44,9,69,48,33,60,65,16,82,67,61,32,21,79,75,75,13,87,70,33]));

/*
Alright, so basically, this problem was asking me to count
how many times the index number (that would be the 'i' in a for loop and not arr[i])
of an array filled with zeros from 0 to 100 (0,1,2,3... 99)
appeared in the given array with integers (for example [1,1,3,2,1]).
So here, the index number 0 appears 0 times in the give array ^
the index number 1 appears 3 times as you can see...
the index number 2 appears 1 time
and the index number 3 appears 1 time
So the final result is: [0,3,1,1]
*/