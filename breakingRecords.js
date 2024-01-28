function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minRecord = 0;
    let maxRecord = 0; 
    let result = [];
    scores.forEach(score => {
        if (score > max) {
         maxRecord++;
         max = score;
        } else if (score < min) {
         minRecord++;
         min = score;
        } 
    });
    result.push(maxRecord);
    result.push(minRecord);
    return result;
 }
 
 console.log(breakingRecords([12,24,10,24]));