// problem 1

function plusMinus(arr) {
    let positive = [];
    let negative = [];
    let zero = [];

    arr.forEach(number => {
        if (number > 0) {
            positive.push(number);
        } else if (number < 0) {
            negative.push(number);
        } else {
            zero.push(number);
        }
    });

    console.log((positive.length / arr.length).toFixed(6));
    console.log((negative.length / arr.length).toFixed(6));
    console.log((zero.length / arr.length).toFixed(6));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));