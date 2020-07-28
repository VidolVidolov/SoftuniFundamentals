function carWash(array) {

    let value = 0;
    let soap = x => x + 10;
    let vacuumCleaner = x => x * 1.25;
    let water = x => x * 1.2;
    let mud = x => x * 0.9;

    for (let i = 0; i < array.length; i++) {
        let action = array[i];

        if(action === 'soap'){
            value = soap(value);
        }else if(action === 'water'){
            value = water(value);
        }else if(action === 'vacuum cleaner'){
            value = vacuumCleaner(value);
        }else if (action === 'mud') {
            value = mud(value);
        }

    }

    
    return `The car is ${value.toFixed(2)}% clean.`;


}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));