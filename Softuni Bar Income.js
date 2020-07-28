function solve(input) {

    let pattern = new RegExp(/%(?<name>[A-z][a-z]+)%([^\|\$%.]*)<(?<product>\w+)>([^\|\$%.]*)\|(?<count>\d+)\|([^\|\$%.\d]*)(?<price>[\d]+\.?\d*)\$/);
    let sum = 0;
    let string = input.shift();
    let object = {};

    while (string !== 'end of shift') {

        let extract = pattern.exec(string);
        if (extract) {
            let name = extract.groups.name;
            let product = extract.groups.product;
            let totalPrice = Number(extract.groups.count) * Number(extract.groups.price);
            sum += totalPrice;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        string = input.shift();
    }
    console.log(`Total income: ${sum.toFixed(2)}`);
}

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]

);