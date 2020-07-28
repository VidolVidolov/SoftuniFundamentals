function solve(array) {

    let shops = array[0].split(' ');
    let numberOfCommands = Number(array[1]);
    let commands = array.slice(2);

    for (let i = 0; i < numberOfCommands; i++) {
        let element = commands[i].split(' ');
        let command = element[0];
        let attribute = element[1];
        let attribute2 = element[2];

        if (command === 'Include') {
            let shop = attribute;
            shops.push(shop);
        } else if (command === 'Visit') {
            if (attribute === 'first') {
                let numberOfShops = Number(attribute2);
                if (numberOfShops > shops.length) {
                    continue;
                } else {
                    shops.splice(0, numberOfShops);
                }
            } else {
                let numberOfShops = Number(attribute2);
                if (numberOfShops > shops.length) {
                    continue;
                } else {
                    shops.reverse();
                    shops.splice(0, numberOfShops);
                }
                shops.reverse();
            }
        } else if (command === 'Prefer') {
            let shop1 = Number(attribute);
            let shop2 = Number(attribute2);


            if ((shop1 < shops.length && shop1 >= 0) && (shop2 < shops.length && shop2 >= 0)) {
                let swap = shops.splice(shop1, 1, shops[shop2]);
                shops.splice(shop2, 1, swap[0]);
            }

        } else if (command === 'Place') {
            let shop = attribute;
            let index = Number(attribute2) + 1;
            if (index < shops.length && index >= 0) {
                shops.splice(index, 0, shop);
            }
        }

    }

    console.log(`Shops left:\n${shops.join(' ')}`);

}

solve([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store -1',
    'Place ShoeAquarium 2'
]

);