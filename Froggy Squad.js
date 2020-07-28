function solve(array){

    let forgsGroup = array[0].split(' ');
    let actions = array.slice(1);

    for (let i = 0; i < actions.length; i++) {
        let element = actions[i].split(' ');
        let command = element[0];
        let attribute = element[1];
        let attribute2 = element[2];


        if(command === 'Join'){
            let name = attribute;
            forgsGroup.push(name);
        }else if(command === 'Jump'){
            let name = attribute;
            let index = Number(attribute2);
            if(!(index < 0) && !(index >= forgsGroup.length)){
                forgsGroup.splice(index,0,name);
            }
        }else if(command === 'Dive'){
            let index = Number(attribute);
            if(!(index < 0) && !(index >= forgsGroup.length)){
                forgsGroup.splice(index,1);
            }
        }else if(command === 'First'){
            let count = Number(attribute);
            let print = forgsGroup.slice(0,count);
            console.log(print.join(' '));
            
        }else if(command === 'Last'){
            let count = Number(attribute);
            forgsGroup.reverse();
            let print = forgsGroup.slice(0,count);
            console.log(print.reverse().join(' '));
            forgsGroup.reverse();
        }else if(command === 'Print'){
            if(attribute === 'Normal'){
                console.log(`Frogs: ${forgsGroup.join(' ')}`);
                
            }else {
                forgsGroup.reverse();
                console.log(`Frogs: ${forgsGroup.join(' ')}`);
                
            }
            break;
        }
        
    }



}

solve([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
  ]
  
  
  );