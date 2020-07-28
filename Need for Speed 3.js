function solve(input) {

    let maxFuel = 75;

    let numberOfCars = Number(input.shift());
    let cars = generateCars(numberOfCars);
    let commands = input.shift();

    while (commands !== 'Stop') {
        let [command, car, att2, att3] = commands.split(' : ');

        if (command === 'Drive') {
            let distance = Number(att2);
            let fuel = Number(att3);
            let current = [];
            Object.values(cars[car]).forEach(arr => {
                current.push(Number(arr));
            })
            let currentDistance = current[0];
            let currentFuel = current[1];
            if (currentFuel < fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                currentFuel -= fuel;
                currentDistance += distance;
                cars[car] = [currentDistance, currentFuel];
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (currentDistance >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }
        }else if(command === 'Refuel'){
            let current = [];
            let fuel = Number(att2);
            Object.values(cars[car]).forEach(el => {
                current.push(Number(el));
            });
            let currentDistance = current[0];
            let currentFuel = current[1];

            let diff = 75 - currentFuel;
            currentFuel += fuel;
            if(currentFuel > 75){
                currentFuel = 75;
                cars[car] = [currentDistance, currentFuel];
                console.log(`${car} refueled with ${diff} liters`);
            }else{
                cars[car] = [currentDistance, currentFuel];
                console.log(`${car} refueled with ${fuel} liters`);
            }
        }else if(command === 'Revert'){
            let current = [];
            let kilometers = Number(att2);
            Object.values(cars[car]).forEach(el => {
                current.push(Number(el));
            });
            let currentDistance = current[0];
            let currentFuel = current[1];

            currentDistance -= kilometers;
            if(currentDistance > 10000){
                cars[car] = [currentDistance, currentFuel];
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }else{
                currentDistance = 10000;
                cars[car] = [currentDistance, currentFuel];
            }
        }
        commands = input.shift();
    }


    let sortedByMilage = Object.entries(cars).sort((a,b) => {
        let milage1 = a[1][0];
        let milage2 = b[1][0];
        let name1 = a[0];
        let name2 = b[0];
        return milage2 - milage1 || name1.localeCompare(name2);
    })

    for (const iterator of sortedByMilage) {
        let car = iterator.shift();
        let arr = iterator.shift();
        console.log(`${car} -> Mileage: ${arr[0]} kms, Fuel in the tank: ${arr[1]} lt.`);
    }
    
    function generateCars(number) {
        let cars = {};
        for (let i = 0; i < number; i++) {
            let [mark, milage, fuel] = input.shift().split('|');
            milage = Number(milage);
            fuel = Number(fuel);
            if (!cars['mark']) {
                cars[mark] = [milage, fuel];
            }
        }
        return cars;
    }

}

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
);