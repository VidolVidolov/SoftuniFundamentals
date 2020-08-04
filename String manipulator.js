function solve(input) {

    let info = input.slice();
    let string = info.shift();
    let commands = info.shift();
    while (commands !== 'Done') {
        let [command, arg1, arg2] = commands.split(' ');

        if (command === 'Change') {
            let char = arg1;
            let replacement = arg2;
            while (string.includes(char)) {
                string = string.replace(char, replacement);
            }
            console.log(string);
        } else if (command === 'Includes') {
            let substr = arg1;
            if (string.includes(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'End') {
            let substr = arg1;
            let position = string.lastIndexOf(substr);
            if (position === string.length - substr.length) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Uppercase') {
            string = string.toUpperCase();
            console.log(string);
        } else if (command === 'FindIndex') {
            let char = arg1;
            let index = string.indexOf(char);
            console.log(index);
        } else if (command === 'Cut') {
            let startIndex = Number(arg1);
            let length = Number(arg2);
            let substr = string.substr(startIndex, length);
            string = substr;
            console.log(string);
        }
        commands = info.shift();
    }
}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]
);