function solve(input) {

    let object = new Map();

    for (const line of input) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);
        if (object.has(item)) {
            let value = object.get(item) + quantity;
            object.set(item, value);
        } else {
            object.set(item, quantity);
        }

    }

    for (const iterator of object.keys()) {
         console.log(`${iterator} -> ${object.get(iterator)}`);
        
    }


}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);