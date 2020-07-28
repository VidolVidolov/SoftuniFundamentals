function solve(input){

    let result = '';
    let currentWord = '';
    for (const char of input) {
        
        if(currentWord !== char){
            result+= char;
            currentWord= char;
        }
    }

    console.log(result);
}

solve('aaaaabbbbbcdddeeeedssaa');