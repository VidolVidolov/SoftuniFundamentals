function solve(input) {

    let string = input.shift();
    let pattern = input.shift();

    while (pattern.length > 0 && string.length > 0) {
        let first = string.indexOf(pattern);
        let second = string.lastIndexOf(pattern);
        if (first > -1 && second > -1 && first !== second) {
            string = string.split('');
            string.splice(first, pattern.length);
            string = string.join('');
            second = string.lastIndexOf(pattern);
            string = string.split('');
            string.splice(second, pattern.length);
            string = string.join('');
            console.log(`Shaked it.`);
            pattern = pattern.split('')
            pattern.splice(Math.floor(pattern.length / 2), 1);
            pattern = pattern.join('');
        } else {
            break;
        }
    }
    console.log(`No shake.`);
    console.log(string);
}

solve(['karkadakarkadakarkada', 'karkada', '']

);