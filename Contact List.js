function solve(array){

    let startingList = array[0].split(' ');
    let actions = array.slice(1);

    for (let i = 0; i < actions.length; i++) {
        let element = actions[i].split(' ');
        let command = element[0];
        let attribute = element[1];
        let attribute2 = element[2];

        if(command === 'Add'){
            let contact = attribute;
            let index = Number(attribute2);

            if(startingList.includes(contact)){
                if(index < startingList.length && index >= 0){
                    startingList.splice(index,0,contact);
                }
            }else{
                startingList.push(contact);
            }
        }else if(command === 'Remove'){
            let index = Number(attribute);
            if(index < startingList.length && index >= 0){
                startingList.splice(index,1);
            }
        }else if(command === 'Export'){
            let startIndex = Number(attribute);
            let count = Number(attribute2);

            if(count > startingList.length){
                count = startingList.length;
            }
            if(count < 0){
                continue;
            }
            if(startIndex < startingList.length && startIndex >= 0){
                let print = startingList.slice(startIndex,startIndex + count);
                console.log(print.join(' '));
            }

            
            
        }else if(command === 'Print'){
            if(attribute === 'Normal'){
                console.log(`Contacts: ${startingList.join(' ')}`);
                break;
            }else if(attribute === 'Reversed'){
                startingList.reverse();
                console.log(`Contacts: ${startingList.join(' ')}`);
                break;
            }
        }
        
    }
}

solve([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Katy 8',
    'Export 0 3',
    'Export 1 -8',
    'Print Reversed'
  ]
  
  
  );