function solve(input) {

    let array = input.split(' ');
    let listOfLegend = generateList();
    let shadowFlag = false;
    let valanyrFlag = false;
    let dragonFlag = false;
    let fragmentsLeft = 0;
    for (let i = 0; i < array.length; i += 2) {
        let quantity = Number(array[i]);
        let material = (array[i + 1]).toLowerCase();
        
        if(quantity <= 0){
            continue;
        }
        if (material === 'shards') {
            listOfLegend['Shadowmourne']['shards'] += quantity;
        } else if (material === 'fragments') {
            listOfLegend['Valanyr']['fragments'] += quantity;
        } else if (material === 'motes') {
            listOfLegend['Dragonwrath']['motes'] += quantity;
        } else {
            let junky = [];
            if (listOfLegend['junk'][material]) {
                listOfLegend['junk'][material] += quantity;
            } else {
                listOfLegend['junk'][material] = quantity;
            }

        }
        if (listOfLegend['Shadowmourne']['shards'] >= 250) {
            shadowFlag = true;
            console.log('Shadowmourne obtained!');
            break;
        }
        if (listOfLegend['Valanyr']['fragments'] >= 250) {
            valanyrFlag = true;
            console.log('Valanyr obtained!');
            break;
        }
        if (listOfLegend['Dragonwrath']['motes'] >= 250) {
            dragonFlag = true;
            console.log('Dragonwrath obtained!');
            break;
        }
    }
    if (shadowFlag) {
        fragmentsLeft = listOfLegend['Shadowmourne']['shards'] - 250;
        listOfLegend['Shadowmourne']['shards'] -= 250;

    } else if (valanyrFlag) {
        fragmentsLeft = listOfLegend['Valanyr']['fragments'] - 250;
        listOfLegend['Valanyr']['fragments'] -= 250;

    } else if (dragonFlag) {
        fragmentsLeft = listOfLegend['Dragonwrath']['motes'] - 250;
        listOfLegend['Dragonwrath']['motes'] -= 250;
    }

    let inexJunk = Object.keys(listOfLegend);
    let index = inexJunk.indexOf('junk');
    let junk = inexJunk.splice(index, 1);
    let junkObj = {};
    Object.assign(junkObj,listOfLegend['junk']);
    delete listOfLegend['junk'];
    let sortedItems = Object.keys(listOfLegend).sort((a, b) => {
        let item1 = Object.values(listOfLegend[a])[0];
        let item2 = Object.values(listOfLegend[b])[0];

        let name1 = Object.keys(listOfLegend[a])[0];
        let name2 = Object.keys(listOfLegend[b])[0];
        return item2 - item1 || name1.localeCompare(name2);
    });

    if (shadowFlag) {
        listOfLegend['Shadowmourne']['shards'] += 250;
    } else if (valanyrFlag) {
        listOfLegend['Valanyr']['fragments'] += 250;
    } else if (dragonFlag) {
        listOfLegend['Dragonwrath']['motes'] += 250;
    }

    for (const iterator of sortedItems) {
        Object.keys(listOfLegend[iterator]).forEach(element => {
            let fragmentsLeft = listOfLegend[iterator][element] - 250;
            if (fragmentsLeft < 0) {
                console.log(`${element}: ${listOfLegend[iterator][element]}`);
            } else {
                console.log(`${element}: ${fragmentsLeft}`);
            }
        });
    }

    let sortedJunk = Object.keys(junkObj).sort((a, b) => a.localeCompare(b));
    for (const iterator of sortedJunk) {
        console.log(`${iterator}: ${junkObj[iterator]}`);
    }

    function generateList() {

        let object = {};
        object['Shadowmourne'] = { shards: 0 };
        object['Valanyr'] = { fragments: 0 };
        object['Dragonwrath'] = { motes: 0 };
        object['junk'] = {};
        return object;
    }

}

solve('250 Motes');