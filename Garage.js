function solve(input) {

    let garages = {};
    let garagesFix = new Set();

    input.forEach(element => {
        let line = element.split(' - ');
        let numberGarage = line.shift();
        line = line[0].split(', ');
        let car = {};
        line.forEach(element => {
            let [key, value] = element.split(': ');
            
            car[key] = value;
        })
        if (garages[numberGarage]) {
            garages[numberGarage].push(car)
        } else {
            garages[numberGarage] = [car];
            garagesFix.add(numberGarage);
        }
    });
    
    garagesFix.forEach(number => {
        console.log(`Garage № ${number}`);
        let output = '';
        garages[number].forEach( car => {
            Object.keys(car).forEach(element => {
                output += `, ${element} - ${car[element]}`;
            })
            console.log(`---${output.substr(1)}`);
            output = '';
        })
        
    })

}


solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);