function solve(input) {

    let string = input.shift();

    let commands = input.shift();

    while (commands !== 'Finish') {
        let [command, arg1, arg2] = commands.split(' ');

        if (command === 'Replace') {
            let currChar = arg1;
            let newChar = arg2;
            while (string.includes(currChar)) {
                string = string.replace(currChar, newChar);
            }
            console.log(string);
        } else if (command === 'Cut') {
            let stratIndex = Number(arg1);
            let endIndex = Number(arg2);
            if (stratIndex < string.length && stratIndex >= 0 && endIndex < string.length && endIndex >= 0) {
                let subtring = string.substring(stratIndex, endIndex + 1);
                string = string.replace(subtring, '');
                console.log(string);
            } else {
                console.log(`Invalid indexes!`);
            }
        } else if (command === 'Make') {
            switch (arg1) {
                case 'Upper':
                    string = string.toUpperCase();
                    break;
                case 'Lower':
                    string = string.toLowerCase();
                    break;
            }
            console.log(string);
        } else if (command === 'Check') {
            let str = arg1;
            if (string.includes(str)) {
                console.log(`Message contains ${str}`);
            } else {
                console.log(`Message doesn't contain ${str}`);
            }
        } else if (command === 'Sum') {
            let stratIndex = Number(arg1);
            let endIndex = Number(arg2);
            if (stratIndex < string.length && stratIndex >= 0 && endIndex < string.length && endIndex >= 0) {
                let substring = string.substring(stratIndex, endIndex + 1);
                let sum = 0;
                substring.split('').forEach(element => {
                    sum += element.charCodeAt(0);
                });
                console.log(sum);
            }else {
                console.log(`Invalid indexes!`);
            }
        }
        commands = input.shift();
    }

}

solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
]
);