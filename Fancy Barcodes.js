function solve(input) {

    let numberOfBarcodes = Number(input.shift());
    let pattern = /(@#+)[A-Z][A-Za-z0-9]{4,}[A-Z](@#+)/g;

    for (let i = 0; i < numberOfBarcodes; i++) {
        let barcode = input.shift();
        let result = barcode.match(pattern);
        if (result !== null) {
            let numbers = /[\d]/g;
            let nums = result[0].match(numbers);
            if (nums === null) {
                console.log(`Product group: 00`);
            } else {
                let print = nums.join('');
                console.log(`Product group: ${print}`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }

}

solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ]
  
);