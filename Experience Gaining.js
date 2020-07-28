function solve(array){


    let neededExp = array[0];
    let battles = array[1];
    let commands = array.slice(2);
    let points = 0;
    let flag = false;
    let battleCount = 0;
    for (let i = 1; i <= battles; i++) {
        let step = Number(commands.shift());
        if(i % 3 === 0 && i !== 0){
            step *= 1.15;
        }
        if(i % 5 === 0 && i !== 0){
            step *= 0.9;
        }
        battleCount++;
        points += step;
        if(points >= neededExp){
            flag = true;
            break;
        }
        
    }

    if(flag){
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    }else{
        console.log(`Player was not able to collect the needed experience, ${(neededExp - points).toFixed(2)} more needed.`);
        
    }


}


solve([
    '500', '5',
    '50',  '100',
    '200', '100',
    '30'
  ]
  );