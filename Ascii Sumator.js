function solve(input) {

    let firstSymbol = input.shift();
    firstSymbol = firstSymbol.charCodeAt(0);
    let secondSymbol = input.shift();
    secondSymbol = secondSymbol.charCodeAt(0);

    let bigger = Math.max(firstSymbol,secondSymbol);
    let lower = Math.min(firstSymbol,secondSymbol);
    let string = input.shift();
    let sum = 0;
    for (const char of string) {
        let isCode = isBetween(char);
        let sumator = char.charCodeAt(0);
        if(isCode){
            sum+= sumator;
        }
    }
    console.log(sum);
    

    function isBetween(char) {
        let result = char.charCodeAt(0);
        return result > lower && result < bigger ? true : false;
    }

}

solve([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]


);