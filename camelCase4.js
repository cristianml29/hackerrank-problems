function processData(input) {
   let splittedInput = input.split("");
   let result = [];
   let finalResult = "";
   if (splittedInput[0] === "S" && splittedInput[2] === "M") {
    for (let i = 4; i < splittedInput.length; i++) {
       if (splittedInput[i] === splittedInput[i].toUpperCase()) {
            result.push(" ");
            result.push(splittedInput[i].toLowerCase());
       } else {
            result.push(splittedInput[i]);
       } 
    }
    
   }
   finalResult = result.join("");
   return finalResult.slice(-4); 
}

console.log(processData("S;M;plasticCup()"));