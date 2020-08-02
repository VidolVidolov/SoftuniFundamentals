function solve(input) {

    let email = input.shift();

    let commands = input.shift();

    while (commands !== 'Complete') {
        let [command, command2, arg] = commands.split(' ');

        if (command === 'Make') {
            if (command2 === 'Upper') {
                email = email.toUpperCase();
            } else {
                email = email.toLowerCase();
            }
            console.log(email);
        } else if (command === 'GetDomain') {
            let count = Number(command2);
            let all = email.length;
            let lastChars = email.substr(all - count);
            console.log(lastChars);
        } else if (command === 'GetUsername') {
            let symbol = email.indexOf('@');
            if (symbol > 0) {
                let substring = email.substring(0, symbol);
                console.log(substring);
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }
        }else if(command === 'Replace'){
            let char = command2;
            while(email.includes(char)){
                email = email.replace(char,'-');
            }
            console.log(email);
        } else if(command === 'Encrypt'){
            let result = [];
            let mail = email.split('');
            mail.forEach(element => {
                result.push(element.charCodeAt());
            });
            console.log(result.join(' '));
        }
        commands = input.shift();
    }
}

solve([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
    ''
  ]
  
);