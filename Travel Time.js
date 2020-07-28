function solve(array) {

    let list = fillingList(array);

    let sorted = Object.keys(list).sort((a, b) =>  a.localeCompare(b) || a.price - b.price );
    
    sorted.forEach(element => {
        let printer = list[element].keys();
        let print = '';
        for (const key of printer) {
            print+=`${key} -> ${list[element].get(key)} `;
        }
        console.log(`${element} -> ${print}`);
    })


    function fillingList(arr) {
        let object = {};
        arr.forEach(line => {
            let [country, town, price] = line.split(' > ');

            if (!object[country]) {
                object[country] = new Map();
                object[country].set(town, Number(price));
            } else {
                let currentPrice = object[country].get(town);
                if (currentPrice === undefined) {
                    object[country].set(town, Number(price));
                } else {
                    if (currentPrice > Number(price)) {
                        object[country].set(town, Number(price));
                    }
                }

            }

        });

        return object;

    }




}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
);