function matchingStrings(strings, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let sum = 0;
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                sum++;
            }
        }
        result.push(sum);
    }
    return result;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));

// first time I've ever felt like a pro doing this haha but I'm still on my baby steps