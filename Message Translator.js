function solve(input) {

    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{7,})\]/g;

    let number = Number(input.shift());
    for (let i = 0; i < number; i++) {
        let line = input.shift();
        let result = [];
        let resultFromLine = pattern.exec(line);
        if (resultFromLine) {
            let command = resultFromLine.groups.command;
            let message = resultFromLine.groups.message;
            for (const char of message) {
                result.push(char.charCodeAt(0));
            }
            console.log(`${command}: ${result.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }

}

solve(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']
);