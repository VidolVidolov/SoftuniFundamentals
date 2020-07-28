function solve(input) {

    let cities = generateCities(input);
    let events = input.shift();

    while (events !== 'End') {
        let [command, att1, att2, att3] = events.split('=>');

        if (command === 'Plunder') {
            let town = att1;
            let people = Number(att2);
            let goldPlundered = Number(att3);

            let currentStats = Object.values(cities[town]);
            let currentPeople = currentStats[0] - people;
            let currentGold = currentStats[1] - goldPlundered;

            cities[town] = [currentPeople, currentGold];
            console.log(`${town} plundered! ${goldPlundered} gold stolen, ${people} citizens killed.`);
            if (currentPeople <= 0 || currentGold <= 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (command === 'Prosper') {
            let town = att1;
            let gold = Number(att2);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
                events = input.shift();
                continue;
            } else {
                let current = Object.values(cities[town]);
                let newGold = current[1] + gold;
                cities[town] = [current[0], newGold];
                console.log(`${gold} gold added to the city treasury. ${town} now has ${newGold} gold.`);
            }

        }
        events = input.shift();
    }

    let sorted = Object.keys(cities).sort((a, b) => {
        let A = cities[a][1];
        let B = cities[b][1];
        return B - A || a.localeCompare(b);
    });

    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        for (const town of sorted) {
            console.log(`${town} -> Population: ${cities[town][0]} citizens, Gold: ${cities[town][1]} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);

    }



    function generateCities(string) {
        let object = {};
        let line = string.shift();

        while (line !== 'Sail') {
            let [town, population, gold] = line.split('||');
            population = Number(population);
            gold = Number(gold);
            if (!object[town]) {
                object[town] = [population, gold];
            } else {
                let current = Object.values(object[town]).map(Number);
                let newPopulation = population + current[0];
                let newGold = gold + current[1];
                object[town] = [newPopulation, newGold];

            }
            line = string.shift();
        }
        return object;
    }

}

solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
]

);