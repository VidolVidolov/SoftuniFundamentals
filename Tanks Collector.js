function solve(array){

    let collection = array[0].split(', ');
    let numberOfCommands = Number(array[1]);
    let commands = array.slice(2);
    for (let i = 0; i < numberOfCommands; i++) {
        let element = commands[i].split(', ');
        let action = element[0];
        let tank = element[1];
        let tankName = element[2];
        if(action === 'Add'){
            if(collection.includes(tank)){
                console.log(`Tank is already bought`);  
            }else{
                console.log(`Tank successfully bought`);
                collection.push(tank);
            }
        }else if(action === 'Remove'){
            if(collection.includes(tank)){
                let index = collection.indexOf(tank);
                console.log(`Tank successfully sold`);
                collection.splice(index,1);
            }else{
                console.log(`Tank not found`);
            }
        }else if(action === 'Remove At'){
            if(tank < collection.length && tank >= 0){
                tank = Number(tank);
                collection.splice(tank,1);
                console.log(`Tank successfully sold`);
            }else{
                console.log(`Index out of range`);
            }
        }else if(action === 'Insert'){
            tank = Number(tank);
            if(tank < collection.length && tank >=0){
                if(!collection.includes(tankName)){
                    console.log(`Tank successfully bought`);
                    collection.splice(tank,0,tankName);
                }else{
                    console.log(`Tank is already bought`);
                }
            }else{
                console.log(`Index out of range`);
                continue;
            }
        }
    }
    console.log(collection.join(', '));
    


}

solve([
    'T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1'
  ]
  
  );