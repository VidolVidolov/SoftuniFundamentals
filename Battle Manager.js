function solve(input) {

    let people = {};

    let commands = input.shift();

    while (commands !== 'Results') {
        let [command, arg1, arg2, arg3] = commands.split(':');
        if (command === 'Add') {
            let name = arg1;
            let health = Number(arg2);
            let energy = Number(arg3);
            if (!people[name] || people[name].disqualified) {
                people[name] = {
                    health: health,
                    energy: energy,
                    disqualified: false,
                }
            } else {
                people[name].health += health;
            }
        } else if (command === 'Attack') {
            let attackerName = arg1;
            let defenderName = arg2;
            let damage = Number(arg3);
            if (people[attackerName] && people[defenderName]) {
                people[defenderName].health -= damage;
                people[attackerName].energy -= 1;
                if (people[defenderName].health <= 0) {
                    people[defenderName].disqualified = true;
                    console.log(`${defenderName} was disqualified!`);
                }
                if (people[attackerName].energy === 0) {
                    people[attackerName].disqualified = true;
                    console.log(`${attackerName} was disqualified!`);
                }
            }

        } else if (command === 'Delete') {
            let username = arg1;
            if (people[username] && people[username].disqualified == false) {
                people[username].health = 0;
                people[username].energy = 0;
                people[username].disqualified = true;
            } else if (username === 'All') {
                let all = Array.from(Object.keys(people));
                for (const person of all) {
                    people[person].health = 0;
                    people[person].energy = 0;
                    people[person].disqualified = true;
                }
            }
        }
        commands = input.shift();
    }

    let vlaidUsers = Object.keys(people).filter(el => people[el].disqualified === false);
    console.log(`People count: ${vlaidUsers.length}`);
    if (vlaidUsers.length > 0) {
        let sorted = vlaidUsers.sort((a, b) => people[b].health - people[a].health || a.localeCompare(b));
        for (const person of sorted) {
            console.log(`${person} - ${people[person].health} - ${people[person].energy}`);
        }
    }

}


solve([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Attack:Johny:Bonnie:400',
    'Add:Chicken:1000:1',
    'Add:Rabbit:3000:5',
    'Add:Buggy:1259:10',
    'Attack:Chicken:Rabbit:10000',
    'Add:Chicken:1000:1',
    'Results'
]


);