function solve(array){

    let steps = Number(array[0]);
    let oneStep = Number(array[1]);
    let distance = Number(array[2]);
    let buffuer = oneStep;
    let result = 0;

    for (let i = 1; i <= steps; i++) {
        
        if(i % 5 === 0){
            oneStep *= 0.7;
        }
        result += oneStep;
        oneStep = buffuer;
        
    }

    let percentage = (result / 100) / distance * 100;
    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);
    



}

solve([ '100', '2', '1' ]
);