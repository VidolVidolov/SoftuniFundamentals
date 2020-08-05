function solve(input) {

    let maxCapacity = Number(input.shift());
    let users = {};

    let line = input.shift();
    while (line !== 'Statistics') {
        let [command, arg1, arg2, arg3] = line.split('=');

        if (command === 'Add') {
            let username = arg1;
            let sent = Number(arg2);
            let recieved = Number(arg3);

            if (!users[username] || users[username].isRemoved) {
                users[username] = {
                    send: sent,
                    recieved: recieved,
                    isRemoved: false,
                }
            }
        } else if (command === 'Message') {
            let sender = arg1;
            let reciever = arg2;
            if (users[sender] && users[reciever]) {
                users[sender].send += 1;
                users[reciever].recieved += 1;
                if (users[sender].send + users[sender].recieved === maxCapacity) {
                    users[sender].isRemoved = true;
                    console.log(`${sender} reached the capacity!`);
                }
                if (users[reciever].recieved + users[reciever].send === maxCapacity) {
                    users[reciever].isRemoved = true;
                    console.log(`${reciever} reached the capacity!`);
                }
            }
        } else if (command === 'Empty') {
            let username = arg1;
            if (users[username]) {
                users[username].isRemoved = true;
            } else if (username === 'All') {
                Object.keys(users).forEach(el => users[el].isRemoved = true);
            }
        }
        line = input.shift();
    }

    let validUsers = Object.keys(users).filter(el => users[el].isRemoved === false);
    let sorted = validUsers.sort((a, b) => {
        let A = users[b].recieved;
        let B = users[a].recieved;
        return A - B || a.localeCompare(b);
    })
    console.log(`Users count: ${sorted.length}`);
    if (sorted.length > 0) {
        for (const person of sorted) {
            console.log(`${person} - ${users[person].send + users[person].recieved}`);
        }
    }
}

solve([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
  ]
  
  
);