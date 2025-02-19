let input = "aaaaaaaaaaabbb"

function stringCompress(input){
    if (!input) return "";
  
    let output = "";
    let count = 1

    for(let i = 1; i < input.length; i++){
        if(input[i] === input[i-1]){
            count++;
        } else {
            output += input[i-1] + count;
            count = 1;
        }
    }
    
    output += input[input.length - 1] + count;
    return output;}

function stringDecompress(input) {
    if (!input) return "";
    
    let output = "";
    let i = 0;
    
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

