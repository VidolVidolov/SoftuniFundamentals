function sovle(input){

    let treasureChest = input[0].split('|').filter(x => x.length !== 0);
    let actions = input.slice(1);

    for (let i = 0; i < actions.length; i  ++) {
        let element = actions[i].split(' ');
        let command = element[0];
        let atribute = element.slice(1);

        if(command === 'Yohoho!'){
            break;
        }

        if(command === 'Loot'){
            for (const iterator of atribute) {
                if(!treasureChest.includes(iterator)){
                    treasureChest.unshift(iterator);
                }
            }
        }else if(command === 'Drop'){
            atribute = Number(atribute);
            if(atribute >= treasureChest.length || atribute < 0){
                continue;
            }else{
                let item = treasureChest.splice(atribute,1);
                treasureChest.push(item[0]);
            }
        }else if(command === 'Steal'){
            let count = Number(atribute);
            if(count > treasureChest.length){
                count = treasureChest.length;
            }
            let stolen = treasureChest.splice((treasureChest.length - count),count);
            console.log(stolen.join(', '));
            
        }

        
    }

    let avarageGain = (treasureChest) =>{
        let gain = 0;
        for (const iterator of treasureChest) {
            gain += iterator.length;
        }
        gain = gain / treasureChest.length;
        console.log(`Average treasure gain: ${gain.toFixed(2)} pirate credits.`);
        
    }

    if(treasureChest.length === 0){
        console.log(`Failed treasure hunt.`);
        
    }else{
        avarageGain(treasureChest);
    }



}

sovle([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 8',
    'Steal 3',
    'Yohoho!'
  ]
  );