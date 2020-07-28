function cataloge(array) {

    let object = {};
    let catalog = [];

    array.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(' : ');
        object.name = element[0];
        object.price = element[1];
        catalog.push(object);
        object = {};
    }
    let flag = false;
    let currentStart = '';
    for (const iterator of catalog) {
        let newStart = '';

        if (currentStart !== iterator.name[0]) {
            flag = false;
        }
        currentStart = iterator.name[0];

        if (newStart !== currentStart) {
            if (!flag) {
                console.log(`${currentStart}`);
                flag = true;
            }
            console.log(`  ${iterator.name}: ${iterator.price}`);
        }
    }





}

cataloge([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);