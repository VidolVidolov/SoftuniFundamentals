function solve(numberOfGroup, type, day) {

    let sum = 0;

    if (type === 'Students') {
        if (day === 'Friday') {
            sum = 8.45 * numberOfGroup;
        } else if (day === "Saturday") {
            sum = 9.8 * numberOfGroup;
        } else if (day = 'Sunday') {
            sum = 10.46 * numberOfGroup;
        }
        if(numberOfGroup >= 30){
            sum = sum * 0.85;
        }
    } else if (type === "Business") {
        if (day === 'Friday') {
            sum = 10.90 * numberOfGroup;
            if(numberOfGroup >= 100){
                sum = sum - (10 * 10.90 )
            }
        } else if (day === "Saturday") {
            sum = 15.60 * numberOfGroup;
            if(numberOfGroup >= 100){
                sum = sum - (10 * 15.60 )
            }
        } else if (day = 'Sunday') {
            sum = 16 * numberOfGroup;
             if(numberOfGroup >= 100){
                sum = sum - (10 * 16 )
            }
        }
        
    } else if (type === "Regular") {
        if (day === 'Friday') {
            sum = 15 * numberOfGroup;
        } else if (day === "Saturday") {
            sum = 20 * numberOfGroup;
        } else if (day = 'Sunday') {
            sum = 22.50 * numberOfGroup;
        }
        if(numberOfGroup >= 10 && numberOfGroup <= 20){
            sum = sum *0.95;
        }
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
    
    

}

solve(40,
    "Regular",
    "Saturday"
    
    );