function solve(input) {

    let string = input.shift();
    let bucket = [];
    let totalPrice = 0;
    
    while (string !== 'Purchase') {
        let line = />>(?<name>[\w]+)<<(?<price>\d+(\.?\d+)*)!(?<quantity>\d+)/g.exec(string);
        if(line){
            let item = line.groups.name;
            let price = Number(line.groups.price);
            let quantity = Number(line.groups.quantity);
    
            totalPrice += price * quantity;
            bucket.push(item);
        }
        string = input.shift();
    }

    console.log(`Bought furniture:`);
    if(totalPrice > 0){
        console.log(bucket.join('\n'));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve(['>>Sofa<<312.233', '>>TV<<3005', '>Invalid<<!5', 'Purchase']
);