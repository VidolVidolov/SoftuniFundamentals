function sovle(array){

    let parts = array[0].split('|');
    let commands = array.slice(1);

    for (let i = 0; i < commands.length; i++) {
        const element = commands[i].split(' ');
        let commandFistHalf = element[0];
        let commandSecondHalf = element[1];
        let index = Number(element[2]);
        if(commandFistHalf === 'Done'){
            break;
        }
        if(parts[index] === undefined && commandFistHalf !== 'Check'){
            continue;
        }

        if(commandSecondHalf === 'Right'){
            if(index + 1 < parts.length){
                let rightIndex = parts.splice(index + 1,1,parts[index]);
                parts.splice(index,1,rightIndex[0]);
            }else{
                continue;
            }
        }else if(commandSecondHalf === 'Left'){
            if(index - 1 >= 0){
                let leftIndex = parts.splice(index - 1,1,parts[index]);
                parts.splice(index,1,leftIndex[0]);
            }
        }else if(commandSecondHalf === 'Even'){
            let demo = parts.slice();
            let result = demo.filter((a,b) => b % 2 === 0);
            console.log(result.join(' '));
            
        }else if(commandSecondHalf === 'Odd'){
            let demo = parts.slice();
            let result = demo.filter((a,b) => b % 2 !== 0);
            console.log(result.join(' '));
            
        }
        
    }

console.log(`You crafted ${parts.join('')}!`);




}

sovle([
    'Ve|or|nd|st|ke|ri',
    'Check Even',
    'Move Right 5',
    'Move Left 2',
    'Move Left 0',
    'Move Right 4',
    'Done'
  ]
  
  
  );