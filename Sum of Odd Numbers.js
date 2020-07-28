function solve(number){

    let sum = 0;
    let counter = 0;
    for (let i = 0; i < 100; i++) {
            if(i % 2 !== 0){
                console.log(i);
                sum+= i;
                counter++;
            }
            if(counter == number){
                console.log(`Sum: ${sum}`);
                
                break;
            }
        
    }


}

solve(5);