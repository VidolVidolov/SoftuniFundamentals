function solve(input) {

    let info = input.slice();
    let commands = info.shift();
    let counter = 0;
    let inforamtion = {};

    while (commands !== 'Statistics') {
        let [command, arg1, arg2] = commands.split('->');

        if (command === 'Add') {
            let username = arg1;
            if (!inforamtion[username] || !inforamtion[username].isValid) {
                inforamtion[username] = {
                    email: [],
                    isValid: true,
                };
            } else {
                console.log(`${username} is already registered`);
            }
        } else if (command === 'Send') {
            let username = arg1;
            let email = arg2;
            if (inforamtion[username]) {
                inforamtion[username].email.push(email);
            }
        } else if (command === 'Delete') {
            let username = arg1;
            if (inforamtion[username] && inforamtion[username].isValid) {
                inforamtion[username].isValid = false;
                // delete inforamtion[username];
            } else {
                console.log(`${username} not found!`);
            }
        }
        commands = info.shift();
    }

    let validUsers = Object.keys(inforamtion).filter(person => inforamtion[person].isValid === true);
    let sorted = validUsers.sort((a, b) => inforamtion[b].email.length - inforamtion[a].email.length || a.localeCompare(b));
    console.log(`Users count: ${validUsers.length}`);
    if (validUsers.length > 0) {
        for (const person of sorted) {
            console.log(`${person}`);
            Object.values(inforamtion[person].email).forEach(em => { console.log(` - ${em}`); })
        }
    }

}

solve([
    'Add->Mike',
    'Add->George',
    'Add->Rami',
    'Add->Stamat',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    'Delete->Rami',
    'Add->Rami',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
]

);