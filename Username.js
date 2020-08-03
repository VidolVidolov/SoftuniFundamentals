function solve(input) {

    let username = input.slice(0, 1)[0];
    let commands = input.slice(1);
    let line = commands.shift();

    while (line !== 'Sign up') {
        let [command, arg1, arg2] = line.split(' ');

        if (command === 'Case') {
            if (arg1 === 'lower') {
                username = username.toLowerCase();
            } else {
                username = username.toUpperCase();
            }
            console.log(username);
        } else if (command === 'Reverse') {
            let startIndex = Number(arg1);
            let endIndex = Number(arg2);
            if (startIndex < username.length && startIndex >= 0 && endIndex < username.length && endIndex >= 0) {
                let substring = username.substring(startIndex, endIndex + 1);
                substring = substring.split('').reverse().join('');
                console.log(substring);
            }
        } else if (command === 'Cut') {
            let substring = arg1;
            if (username.includes(substring)) {
                username = username.replace(substring, '');
                console.log(username);
            } else {
                console.log(`The word ${username} doesn't contain ${substring}.`);
            }
        } else if (command === 'Replace'){
            let char = arg1;
            while(username.includes(char)){
                username = username.replace(char, '*');
            }
            console.log(username);
        } else if(command === 'Check'){
            let char = arg1;
            if(username.includes(char)){
                console.log(`Valid`);
            }else {
                console.log(`Your username must contain ${char}.`);
            }
        }
        line = commands.shift();
    }

}

solve(['Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up']
);