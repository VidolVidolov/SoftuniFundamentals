function oreder(order, quantity){

    let result = 0;
    let coffee = 1.50;
    let water = 1;
    let coke = 1.40;
    let snacks = 2;

    switch (order) {
        case 'coffee':
            result = coffee * quantity
            return result.toFixed(2);
            break;
        case 'water':
            result = water * quantity
            return result.toFixed(2);
            break;
        case 'coke':
            result = coke * quantity
            return result.toFixed(2);
            break;
        case 'snacks':
            result = snacks * quantity
            return result.toFixed(2);
            break;
        default:
            break;
    }


}

console.log(oreder('water', 5));