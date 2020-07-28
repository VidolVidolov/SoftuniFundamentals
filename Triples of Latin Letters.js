function solve(number){

    number = Number(number);
    let wantedNumber = 97 + number;
    let firstLetter = "";
    let secondLetter = "";
    let thirdLetter = "";

    for (let i = 97; i < wantedNumber; i++) {
        for (let j = 97; j < wantedNumber; j++) {
            for (let z = 97; z < wantedNumber; z++) {
                firstLetter = String.fromCharCode(i);
                secondLetter = String.fromCharCode(j);
                thirdLetter = String.fromCharCode(z);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
                
                
            }
            
        }
        
        
    }

}

solve(4);