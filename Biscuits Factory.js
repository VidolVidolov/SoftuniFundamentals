function solve(array){

    let bisecuitsPerWorker = Number(array[0]);
    let workersCount = Number(array[1]);
    let competingFatory = Number(array[2]);

    let biscuitsPerDay = bisecuitsPerWorker * workersCount;
    let production = 0;
    for (let i = 1; i <= 30; i++) {
        
        if(i % 3 ===0 && i !== 0){
            biscuitsPerDay *= 0.75;
            biscuitsPerDay = Math.floor(biscuitsPerDay);
        }
        production += biscuitsPerDay;
        biscuitsPerDay = bisecuitsPerWorker * workersCount
    }
    console.log(`You have produced ${production} biscuits for the past month.`);
    let diff = Math.abs(production - competingFatory);
    let percentage = Math.abs(diff / competingFatory * 100);
    if(production > competingFatory){
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    }else{
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);

    }

    





}

solve([ '65', '12', '26000' ]
);