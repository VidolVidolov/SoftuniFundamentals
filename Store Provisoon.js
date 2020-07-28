function solve(stock, ordered) {

let store = {};
let newStock = stock.slice();
let storeArr = [];
    for (let i = 0; i < newStock.length; i+=2) {
        const element = newStock[i];
        const quantity = Number(newStock[i+1]);
        store[element] = quantity;
    }

    for (let i = 0; i < ordered.length; i+=2) {
        const element2 = ordered[i];
        const quantity2 = Number(ordered[i+1]);
        if(store[element2] === undefined){
            store[element2] = quantity2;
        }else{
            store[element2] += quantity2;
        }
       
        
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
        
    }
    
    
}







solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);