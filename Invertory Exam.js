function solve(array){

    let invertory = array[0].split(', ');
    let newArray = array.slice(1);

    for (let i = 0; i < newArray.length; i++) {
        let element = newArray[i].split(' - ');
        let action = element[0];
        let item = element[1];

        if(element[0] === 'Craft!'){
            console.log(invertory.join(', '));
        }
        if(action === 'Collect'){
            if(invertory.includes(item)){
                continue;
            }else{
                invertory.push(item);
            }
        }else if(action === 'Drop'){
            if(invertory.includes(item)){
                let index = invertory.indexOf(item);
                invertory.splice(index,1);
            }
        }else if(action === 'Combine Items'){
            let items = item.split(':');
            let newItem = items[1];
            if(invertory.includes(items[0])){
                let index = invertory.indexOf(items[0]);
                invertory.splice(index+1,0, newItem);
            }
        }else if(action === 'Renew'){
            let index = invertory.indexOf(item);
            let renew = invertory.splice(index,1);
            invertory.push(renew[0]);
        }
        
    }

}


solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  
);