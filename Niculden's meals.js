function solve(input) {

    let guests = {};
    let countUnliked = 0;
    let commands = input.shift();

    while (commands !== 'Stop') {
        let [command, name, meal] = commands.split('-');

        if (command === 'Like') {
            if (!guests[name]) {
                guests[name] = [];
            }
            if (!guests[name].includes(meal)) {
                guests[name].push(meal);
            }

        } else if (command === 'Unlike') {

            if (!guests[name]) {
                console.log(`${name} is not at the party.`);
            } else {
                if (!guests[name].includes(meal)) {
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                } else {
                    let index = guests[name].indexOf(meal);
                    guests[name].splice(index,1);
                    countUnliked++;
                    console.log(`${name} doesn't like the ${meal}.`);
                }
            }
        }
        commands = input.shift();
    }

    let sorted = Object.keys(guests).sort((a, b) => guests[b].length - guests[a].length || a.localeCompare(b));

    for (const person of sorted) {
        console.log(`${person}: ${guests[person].join(', ')} `);
    }
    console.log(`Unliked meals: ${countUnliked}`);

}

solve([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]

);