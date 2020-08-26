function solve(input) {

    let message = input.shift();

    let commands = input.shift();

    while (commands !== 'Decode') {
        let [command, arg1, arg2] = commands.split('|');

        if (command === 'Move') {
            let numberOfLetters = Number(arg1);
            let str = message.substring(0, numberOfLetters);
            message = message.replace(str,'');
            message = message.concat(str);
        } else if (command === 'Insert') {
            let index = Number(arg1);
            let value = arg2;
            message = message.split('');
            message.splice(index,0,value);
            message = message.join('');
        } else if (command === 'ChangeAll') {
            let substring = arg1;
            let replacement = arg2;
            while(message.includes(substring)){
                message = message.replace(substring, replacement);
            }
        }
        commands = input.shift();
    }

console.log(`The decrypted message is: ${message}`);

}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);