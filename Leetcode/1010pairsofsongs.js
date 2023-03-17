// 1010. Pairs of Songs With Total Durations Divisible by 60
// Medium
// 3.8K
// 147
// Companies
// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60

//this does work, however it is incredibly slow.
var numPairsDivisibleBy60 = function (time) {
  //create a number to itterate each time that a proper solution is found
  let songs = 0;
  //create a loop to go through the songs starting from the first and ending on the second to the last
  for (let i = 0; i < time.length - 1; i++) {
    //create a nested loop going through the rest  of the songs starting from the i+1 song and going to the last one
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        songs++;
      }
    }
  }
  return songs;
};


//asking chatGPT to teach me about hashmaps:
//sent it the prompt and said come up with an answer
function numPairsDivisibleBy60(time) {
    
    let counts = {};//creating an empty hash map called counts
    let result = 0;//creating the result number to return at the end of the code
    for (let t of time) {//looping through all of the values in the time array
      let remainder = t % 60;//determines the remainder that the t number would need to satisfy the condition of %60==0
      let target = (60 - remainder) % 60;//determines remainder of the other song that would be needed to make %60==0
      if (target in counts) {//if the target is already in the counts hashmap
        result += counts[target];// then add the number of counts to the result. Will catch multiple solutions and increment counts each time
      }
        counts[remainder] = (counts[remainder] || 0) + 1;//adds 1 to the count of the individual remainder. if the remainder does not exist it sets it at 0 and then adds 1 to it
    }
    return result;//return the final answer to the function
}
  
function numPairsDivisibleBy60(time: number[]): number {
    const remainders: number[] = new Array(60).fill(0);
    let count: number = 0;

    for (const t of time) {
        const remainder: number = t % 60;
        const complement: number = (60 - remainder) % 60;
        count += remainders[complement];
        remainders[remainder]++;
    }

    return count;
}