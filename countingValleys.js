// problem 13

function countingValleys(steps, path) {
    let count = 0;
    let pathSplitted = path.split("");
    let valleys = 0;

    for (let i = 0; i < steps; i++) {
        if (pathSplitted[i] === "U") {
            count++;
        } 
        if (pathSplitted[i] === "D") {
            count--;
            if (count == -1) {
                valleys++;
            }
        }
    }
    return valleys;
}

console.log(countingValleys(8,"UDDDUDUU"));