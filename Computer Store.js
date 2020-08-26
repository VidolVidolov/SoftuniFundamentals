function solve(input) {

    let money = 0;
    let withoutTax = 0;
    let tax = 0;
    let command = input.shift();

    while (command !== 'special') {
        if (command === 'regular') {
            break;
        }
        let price = Number(command);
        if (price > 0) {
            withoutTax += price;
            tax += price * 0.2;
            price = price + (price * 0.2);
            money += price;
        } else {
            console.log(`Invalid price!`);
        }
        command = input.shift();
    }

    if (command === 'special') {
        money = money * 0.9;
    }
    if (money === 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${withoutTax.toFixed(2)}$\nTaxes: ${tax.toFixed(2)}$\n-----------\nTotal price: ${money.toFixed(2)}$\n
        `);
    }
}

solve([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]

);