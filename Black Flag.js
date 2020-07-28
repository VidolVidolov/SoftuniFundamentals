function solve(input) {

    let days = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());
    let reseter = dailyPlunder;
    let result = 0;
    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0) {
            dailyPlunder *= 1.5;
        }
        result += dailyPlunder;
        if (i % 5 === 0) {
            result *= 0.7;
        }
        dailyPlunder = reseter;
    }

    if (result >= expectedPlunder) {
        console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`);
    } else {
        let percentage = result / expectedPlunder *100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
        
    }





}

solve([ '10', '20', '380' ]

);