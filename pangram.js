// problem 14

function pangrams(s) {
    let toLowerCase = s.toLowerCase().replace(/[^a-z]/g, '');
    let uniqueLetters = new Set(toLowerCase);
    if (uniqueLetters.size == 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}

console.log(pangrams("We promptly judged antique ivory buckles for the prize")); // this is not pangram because it lacks 'x'