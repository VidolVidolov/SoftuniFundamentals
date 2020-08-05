function solve(input) {

    let string = input.slice(0, 1)[0];
    let lines = input.slice(1);

    let commands = lines.shift();
    while (commands !== 'End') {
        let [command, arg1, arg2] = commands.split(' ');

        if (command === 'Translate') {
            let char = arg1;
            let replacement = arg2;
            while (string.includes(char)) {
                string = string.replace(char, replacement);
            }
            console.log(string);
        } else if (command === 'Includes') {
            let str = arg1;
            if (string.includes(str)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        } else if (command === 'Start') {
            let str = arg1;
            if (string.startsWith(str)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        } else if(command === 'Lowercase'){
            string = string.toLowerCase();
            console.log(string);
        } else if(command === 'FindIndex'){
            let char = arg1;
            let result = string.lastIndexOf(char);
            console.log(result);           
        } else if(command === 'Remove'){
            let startIndex = Number(arg1);
            let count = Number(arg2);
            let substr = string.substr(startIndex, count);
            string = string.replace(substr,'');
            console.log(string);
        }
        commands = lines.shift();
    }

}


solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]
);