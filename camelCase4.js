function processData(input) {
    let rule = input.slice(0,3);
    let splittedInput = input.split("");
    let result = [];
    let finalResult = "";

    if (rule === "S;M") {
        for (let i = 4; i < splittedInput.length; i++) {
            if (splittedInput[i] === splittedInput[i].toUpperCase()) {
                result.push(" ");
                result.push(splittedInput[i].toLowerCase());
            } else {
                result.push(splittedInput[i]);
            }
        }
        finalResult = result.join("");
        console.log(finalResult.slice(0, -4));
    } else if (rule === "C;V") {
        for (let i = 4; i < splittedInput.length; i++) {
            if (splittedInput[i-1] === " ") {
                result.push(splittedInput[i].toUpperCase());
            } else {
                result.push(splittedInput[i]);
            }
        }
        finalResult = result.join("");
        console.log(finalResult.replaceAll(" ", ""));
    } else if (rule === "C;C") {
        result.push(splittedInput[4].toUpperCase());
        for (let i = 5; i < splittedInput.length; i++) {
            if (splittedInput[i-1] === " ") {
                result.push(splittedInput[i].toUpperCase());
            } else {
                result.push(splittedInput[i]);
            } 
        }
        finalResult = result.join("");
        console.log(finalResult.replace(" ", ""));
    } else if (rule === "S;C") {
        result.push(splittedInput[4].toLowerCase());
        for (let i = 5; i < splittedInput.length; i++) {
            if (splittedInput[i] === splittedInput[i].toUpperCase()) {
                result.push(" ");
                result.push(splittedInput[i].toLowerCase());
            } else {
                result.push(splittedInput[i]);
            }
        }
        finalResult = result.join("");
        console.log(finalResult);
    } else if (rule === "C;M") {
        for (let i = 4; i < splittedInput.length; i++) {
            if (splittedInput[i-1] === " ") {
                result.push(splittedInput[i].toUpperCase());
            } else {
                result.push(splittedInput[i]);
            }
        }
        finalResult = result.join("");
        console.log(finalResult.replaceAll(" ", "") + "()");
    } else if (rule === "S;V") {
        result.push(splittedInput[4].toLowerCase());
        for (let i = 5; i < splittedInput.length; i++) {
           if (splittedInput[i] === splittedInput[i].toUpperCase()) {
                result.push(" ");
                result.push(splittedInput[i].toLowerCase());
           } else {
            result.push(splittedInput[i]);
           }
        }
        finalResult = result.join("");
        console.log(finalResult);
    }
    return;
}

processData("S;C;OrangeHighlighter");

