function solve(input) {

    let string = input.shift();
    let command = input.shift();
    let charsToSumUpper = '';
    let charsToSumLower = '';

    for (const char of string) {
        let check = isUpper(char);
        if (check) {
            charsToSumUpper += char;
        } else {
            let lower = isLower(char);
            if(lower){
                charsToSumLower += char;
            }
        }
    }
    let result = 0;
    if(command === 'UPPERCASE'){
        for (const char of charsToSumUpper) {
            let sumator = char.charCodeAt(0);
                result += sumator;
        }
    }else if(command === 'LOWERCASE'){
        for (const char of charsToSumLower) {
            let sumator = char.charCodeAt(0);
            result += sumator;
        }
    }
    console.log(`The total sum is: ${result}`);
    
    function isUpper(char) {
        let result = char.charCodeAt(0);
        return result >= 65 && result <= 90 ? true : false;
    }
    function isLower(char){
        let result = char.charCodeAt(0);
        return result >= 97 && result <= 122? true : false;
    }

}

solve([ 'HelloFromMyAwes45212omePROGRAM', 'LOWERCASE', '' ]
);