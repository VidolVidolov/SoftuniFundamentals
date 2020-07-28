function solve(input) {

    let key = input.shift().split(' ').map(Number);
    let sequence = input.shift();
    while (sequence !== 'find') {
        let result = '';
        let counter = 0;

        for (let char of sequence) {
            let character = char.charCodeAt(0);
            character -= key[counter];
            if (counter === key.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
            char = String.fromCharCode(character);
            result += char;
        }
        let firstIndex = result.indexOf('&');
        let lastIndex = result.lastIndexOf('&');
        let type = result.substring(firstIndex + 1, lastIndex);
        firstIndex = result.indexOf('<');
        lastIndex = result.indexOf('>');
        let coordinates = result.substring(firstIndex + 1, lastIndex);
        console.log(`Found ${type} at ${coordinates}`);
        sequence = input.shift();
    }
}

solve([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
]
);