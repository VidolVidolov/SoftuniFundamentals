function solve(array){

    let pirateShip = array[0].split('>').map(Number);
    let warship = array[1].split('>').map(Number);
    let maxHp = Number(array[2]);
    let battle = array.slice(3);
    let isDed = false;
    let pirateDown = false;
    let warshipDown = false;

    for (let i = 0; i < battle.length; i++) {
        let element = battle[i].split(' ');
        let command = element[0];
        let atribute = element[1];
        let atribute2 = element[2];
        let atribute3 = element[3];
        
        if(command === 'Retire'){
            break;
        }

        if(command === 'Fire'){
            let index = Number(atribute);
            let damage = Number(atribute2);
            if(index >= warship.length || index < 0){
                continue;
            }else{
                warship.splice(index,1,warship[index] - damage);
                if(warship[index] <= 0){
                    console.log(`You won! The enemy ship has sunken.`);
                    warshipDown = true;
                    break;
                }
            }
        }else if(command === 'Defend'){
            let startIndex = Number(atribute);
            let endIndex = Number(atribute2);
            startIndex = Math.min(startIndex, endIndex);
            endIndex = Math.max(startIndex,endIndex);
            let damage = Number(atribute3);

            if(!(startIndex >= pirateShip.length || startIndex < 0 ) && !(endIndex >= pirateShip.length || endIndex < 0)){
                for (let j = startIndex; j <= endIndex; j++) {
                        pirateShip.splice(j,1,pirateShip[j] - damage);
                        if(pirateShip[j] <= 0){
                            console.log(`You lost! The pirate ship has sunken.`);
                            pirateDown = true;
                            isDed = true;
                            break;
                        }
                    
                }
            }
            // if(isDed){
            //     break;
            // }
        }else if(command === 'Repair'){
            let index = Number(atribute);
            let health = Number(atribute2);
            if(index >= pirateShip.length || index < 0){
                continue;
            }else{
                if(pirateShip[index] + health > maxHp){
                    pirateShip[index] = maxHp;
                }else{
                    pirateShip.splice(index,1,pirateShip[index] + health);
                }
            }
        }else if(command === 'Status'){
            let count = 0;
            for (const iterator of pirateShip) {
                if(iterator/maxHp *100 < 20){
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
            
        }
        if(isDed){
            break;
        }
    }

    if(!pirateDown && !warshipDown){
        let pirates = 0;
        let warships = 0;
        for (const iterator of pirateShip) {
            pirates += iterator;
        }
        for (const iterator of warship) {
            warships += iterator;
        }
        console.log(`Pirate ship status: ${pirates}`);
        console.log(`Warship status: ${warships}`);
        
    }



}

solve([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 4 330',
    'Defend 4 3 11',
    'Repair 3 18',
    'Retire'
  ]
  
  );