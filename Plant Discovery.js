function solve(input) {

    let number = Number(input.shift());
    let plants = generatePlants(number);

    let line = input.shift();
    while (line !== 'Exhibition') {
        let [command, arg] = line.split(': ');

        if (command === 'Rate') {
            let [plant, rating] = arg.split(' - ');
            if (plants[plant]) {
                plants[plant].rating.push(Number(rating));
            } else {
                console.log('error');
            }
        } else if (command === 'Update') {
            let [plant, newRar] = arg.split(' - ');
            if (plants[plant]) {
                plants[plant].rarity = Number(newRar);
            } else {
                console.log('error');
            }
        } else if (command === 'Reset') {
            let plant = arg;
            if (plants[plant]) {
                plants[plant].rating = [];
            } else {
                console.log('error');
            }
        } else {
            console.log('error');
        }
        line = input.shift()
    }

    let arr = Object.keys(plants);
    if (arr.length > 0) {
        for (let el of arr) {
            let rating = 0;
            let counter = 0;
            if (plants[el].rating.length === 0) {
                plants[el].rating = 0;
            } else {
                for (const rate of plants[el].rating) {
                    rating += rate;
                    counter++;
                }
                rating = rating / counter;
                plants[el].rating = rating;
            }

        }
    }
    if (arr.length > 0) {
        let sorted = arr.sort((a, b) => {
            return plants[b].rarity - plants[a].rarity || plants[b].rating - plants[a].rating;
        })
        console.log('Plants for the exhibition:');
        if (sorted.length > 0) {
            for (const plant of sorted) {
                console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${plants[plant].rating.toFixed(2)}`);
            }
        }
    }


    function generatePlants(number) {

        let obj = {};
        for (let i = 0; i < number; i++) {
            let line = input.shift();
            let [name, rarity] = line.split('<->');
            rarity = Number(rarity);
            if (!obj[name]) {
                obj[name] = {
                    rarity: rarity,
                    rating: [],
                }
            } else {
                obj[name].rarity = rarity;
            }
        }
        return obj;
    }

}

solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]
);