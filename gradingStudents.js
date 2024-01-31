function gradingStudents(grades) {
    let result = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            let num = grades[i];
            while (num % 5 != 0) {
                num++;
            }
            if (num - grades[i] < 3) {
                result.push(num);
            } else {
                result.push(grades[i]);
            }
        } else {
            result.push(grades[i]);
        }
    }
    return result;
}

let num = 57; // here I'm just testing something so I can I apply it to the problem
while (num % 5 != 0) {
    num++;
}
console.log(num); // this should give me 60 and it does :)


console.log(gradingStudents([84,29,57]));