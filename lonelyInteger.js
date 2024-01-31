function lonelyInteger(a) {
    let integer = 0;
    for (let i = 0; i < a.length; i++) { // [1,2,3,4,3,2,1]
        let sum = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[i] == a[j]) {
                sum++;
            }
        }
        if (sum <= 1) {
            integer = a[i];
        }
    }
    return integer;
}

console.log(lonelyInteger([1,2,3,4,3,2,1]));