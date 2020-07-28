function charactersInRange(charOne, charTwo) {

    let start = charOne.charCodeAt(0);
    let end = charTwo.charCodeAt(0);

    let min = Math.min(start, end);
    let max = Math.max(start, end);

    let result = '';

    for (let i = min + 1; i < max; i++) {
        let element = i;
        result += numberToChar(element) + ' ';

    }


    function numberToChar(a){

        let char = String.fromCharCode(a);
        return char;
    }

console.log(result);

}

charactersInRange('#',
':'

);