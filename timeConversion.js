function timeConversion(s) {
    let arr = s.split("");
    let hours = arr[0] + arr[1];
    let minutes = arr[3] + arr[4];
    let seconds = arr[6] + arr[7];
    
    if (hours === "12" && arr[8] === "A") { // here I have to transform '12' to '00' because it is the morning ("A")
        return `00:${minutes}:${seconds}`;
    } else if (hours !== "12" && arr[8] === "P") { // here I must add 12 to 'hours'
        hours = Number(hours) + 12; 
        return `${hours}:${minutes}:${seconds}`;        
    } else { // in any other case I must leave it as it is...
        return `${hours}:${minutes}:${seconds}`;
    }
}

console.log(timeConversion("11:40:03PM"));
