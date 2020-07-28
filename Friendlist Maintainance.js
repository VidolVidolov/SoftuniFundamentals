function solve(array){

    let friendList = array[0].split(', ');
    let commands = array.slice(1);
    let blacklised = 0;
    let lost = 0;
    for (let i = 0; i < commands. length; i++) {
        let element = commands[i].split(' ');
        let command = element[0];
        let person = element[1];
        let newName = element[2];
        if(command === 'Report'){
            break;
        }

        if(command === 'Blacklist'){
            if(friendList.includes(person)){
                let index = friendList.indexOf(person);
                let name = friendList.splice(index, 1, `Blacklisted`);
                console.log(`${name[0]} was blacklisted.`);
                blacklised++;
            }else{
                console.log(`${person} was not found.`);
            }
        }else if(command === 'Error'){
            if(friendList[Number(person)] === 'Blacklisted' || friendList[Number(person)] === 'Lost' ){
                continue;
            }else{
                person = Number(person);
                if(person < friendList.length){
                    let name = friendList.splice(person,1,'Lost');
                    console.log(`${name[0]} was lost due to an error.`);
                    lost++;
                }else{
                    continue;
                }
                
            }
        }else if(command === 'Change'){
            person = Number(person);
            if(person < friendList.length && person >= 0){
                let oldName = friendList.splice(person,1, newName);
                console.log(`${oldName} changed his username to ${newName}.`);
                
            }
        }
        
    }

    console.log(`Blacklisted names: ${blacklised}`);
    console.log(`Lost names: ${lost}`);
    console.log(friendList.join(' '));
    
    
}

solve([
    'Mike, John',
    'Error 3',
    'Error 3',
    'Change 4 Mike123',
    'Blacklist Eddie',
    'Blacklist Eddie',
    'Report'
  ]
  
  );