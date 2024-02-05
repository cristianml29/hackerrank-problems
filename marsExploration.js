// problem 15

function marsExploration(s) {
    let letters = s.split("");
    let numberOfGropus =  letters.length / 3;
    let groups = [];
    let start = 0;
    let end = 3;
    let sum = 0;

    for (let i = 0; i < numberOfGropus; i++) {
        groups.push(s.slice(start,end));
        start+= 3;
        end+= 3;
    }

    groups.forEach((group) => {
        if (group[0] !== "S") {
            sum++;
        }
        if (group[1] !== "O") {
            sum++;
        }
        if (group[2] !== "S") {
            sum++;
        }
    })

    return sum;
}

console.log(marsExploration("SOSSOTOPQ"));

// yeah well you know... It's not the best solution but it's MY solution damn it!
// I'll look for better ones on youtube so I can keep learning.