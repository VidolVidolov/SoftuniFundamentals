function solve(input) {

    let invertory = {};

    let line = input.shift();
    while (line !== 'END') {
        let [command, store, items] = line.split('->');

        if (command === 'Add') {
            if (!invertory[store] || invertory[store].isRemoved) {
                invertory[store] = {
                    items: [],
                    isRemoved: false,
                }
            }
            items = items.split(',');
            for (const item of items) {
                invertory[store].items.push(item);
            }
        } else if (command === 'Remove') {
            if (invertory[store]) {
                invertory[store].isRemoved = true;
            }
        }
        line = input.shift();
    }

    let isValid = Object.keys(invertory).filter(el => invertory[el].isRemoved === false);
    let sorted = isValid.sort((a,b) => invertory[b].items.length - invertory[a].items.length || b.localeCompare(a));
    console.log(`Stores list:`);
    for (const store of sorted) {
        console.log(store);
        invertory[store].items.forEach(element => {
            console.log(`<<${element}>>`);
        });
        
    }
}
solve([
    'Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'
]
);