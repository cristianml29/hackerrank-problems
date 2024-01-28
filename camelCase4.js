function processData(input) {
    let words = input.split('\r\n');
    words.forEach( word => {
        let rule = word.slice(0,3);
        let splittedInput = word.split("");
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
    });
}

processData("S;C;OrangeHighlighter");

//alright I had to look up for the solution. Here it is:

// let words = input.split('\r\n')
//     for(let i = 0; i < words.length; i++){
//         let split = words[i].substring(0,1) === 'S';
//         let type = words[i].substring(2,3);
//         let word = words[i].substring(4, words[i].length);
//         if(split){
//             if(type === 'M'){
//                 word = word.substring(0,word.length-2) //remove ()
//             }
//             word = word.split(/(?=[A-Z])/).join(' ').toLowerCase();
//         }
//         else{
//             let arr = word.split(' ')
//             word = concat(arr, type)
//         }
//         console.log(word)
//     }
// }

// function concat(array, type){
    
//        array.forEach( (e, j) => {
//                 array[j] = e.substring(0,1).toUpperCase() + e.substring(1, e.length)
//                     if(j === 0 && type !== 'C'){
//                         array[j] = e.substring(0,1).toLowerCase() + e.substring(1, e.length)
//                     }
//                 } )
//         return array.join('').concat( type === 'M'? '()': '')

// so! after finding the solution, I've realized that what I was missing is that the input was coming in multiple lines.
// the problem didn't provide that explination for JavaScript but I still missed it.
// so the key here was to use words.split('\r\n'). That way I can work on each line with a forEach method and use MY solution
// which doesn't use regular expressions and it's of course slower but it's my solution.
// I will try to learn the solution that I have found tho. 