let input = "aaabbb"

function stringCompress(input){
    let output = "";
    if(input.length == 0){
        return output;
    }
    else{
        let count = 1;
        for(let i = 0; i < input.length; i++){
            if(i == input.length -1){
                return output += input[i] + count;
            }
            else if(input[i] == input[i+1]){
                count++;
            }
            else{
                output += input[i] + count;
                count = 1;
            }
        }
    }
    return output;
}

function stringDecompress(input){
    let output = "";
    if(input.length == 0){
        return output;
    }
    for(let i = 0; i < input.length; i++){
        if(input[i] >= '0' && input[i] <= '9'){
            let letter = input[i-1];
            let count = parseInt(input[i]);
            for(j = 0; j < count; j++){
                output += letter;
            }
        }
    }
    return output;
}

compressOutput = stringCompress(input);
decompressOutput = stringDecompress(compressOutput);
console.log(compressOutput);
console.log(decompressOutput)

