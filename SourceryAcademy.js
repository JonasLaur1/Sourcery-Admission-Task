let input = "aabbb"

function stringCompress(input){
    if (!input) return "";
  
    let output = "";
    let count = 1
    //I loop through the whole string and check if the current character is the same as previous one
    //If it is, I increment the count, if not, I add the previous character and its count to the output string
    //Then I reset the count to 1 and move to the next character
    //At the end I add the last character and its count to the output string, since the loop won't reach else statement.
    for(let i = 1; i < input.length; i++){
        if(input[i] === input[i-1]){
            count++;
        } else {
            output += input[i-1] + count;
            count = 1;
        }
    }
    
    output += input[input.length - 1] + count;
    return output;
  }

function stringDecompress(input) {
    //Check if the input is empty, if it is return an empty string
    if (!input) return "";
    
    let output = "";
    let i = 0;
    //First loop iterates through the whole string, first thing I do is save the current character
    //Then I create an empty string so I could save the count of the current character
    //I picked an empty string because the count can be more than one digit, so I first add it to string and then convert it to number
    //The secon loop is used to iterate through characters until current character is not a number anymore, that means that the characters which is saved in char count is done
    //Then I convert the count to a number and repeat the current character that many times
    while (i < input.length) {
      const char = input[i++];
      let countStr = "";
      
      while (i < input.length && input[i] >= '0' && input[i] <= '9') {
        countStr += input[i++];
      }
      
      const count = parseInt(countStr, 10);
      output += char.repeat(count);
    }
    
    return output;
  }
  

compressOutput = stringCompress(input);
decompressOutput = stringDecompress(compressOutput);
console.log(compressOutput);
console.log(decompressOutput)

