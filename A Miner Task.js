function solve(input) {

    let resources = collectResources(input);

    
    for (const key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }




    function collectResources(array) {

        let obj = {};

        for (let i = 0; i < array.length; i += 2) {
            let material = array[i];
            let quantity = Number(array[i + 1]);

            if (!obj[material]) {
                obj[material] = quantity;
            } else {
                let added = obj[material] + quantity;
                obj[material] = added;
            }

        }
        return obj;
    }

}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
    );