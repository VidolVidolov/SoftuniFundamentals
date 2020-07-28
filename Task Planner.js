function sovle(array){

    let listOfTasks = array[0].split(' ').map(Number);
    let actions = array.slice(1);

    for (let i = 0; i < actions.length; i++) {
        let element = actions[i].split(' ');
        let command = element[0];
        let attribute = element[1];
        let attribute2 = element[2];

        if(command === 'End'){
            break;
        }

        if(command === 'Complete'){
            let index = Number(attribute);
            if(index >= listOfTasks.length || index < 0){
                continue;
            }else{
                listOfTasks.splice(index,1,0);
            }
        }else if(command === 'Change'){
            let index = Number(attribute);
            let time = Number(attribute2);
            if(index >= listOfTasks.length || index < 0){
                continue;
            }else{
                if(time > 5){
                    time = 5;
                }
                listOfTasks.splice(index,1,time);
            }
        }else if(command === 'Drop'){
            let index = Number(attribute);
            if(index >= listOfTasks.length || index < 0){
                continue;
            }else {
                listOfTasks.splice(index,1,-1);
            }
        }else if(command === 'Count' && attribute === 'Completed'){
            let completed = 0;
            for (const iterator of listOfTasks) {
                if(iterator === 0){
                    completed++;
                }
            }
            console.log(completed);
            
        }else if(command === 'Count' && attribute === 'Incomplete'){
            let counter = 0;
            for (const iterator of listOfTasks) {
                if(iterator !== 0 && iterator > 0){
                    counter++;
                }
            }
            console.log(counter);
            
        }else if(command === 'Count' && attribute === 'Dropped'){
            let counter = 0;
            for (const iterator of listOfTasks) {
                if(iterator < 0){
                    counter++;
                }
            }
            console.log(counter);
            
        }
    }
    let list = listOfTasks.filter(x => x !== 0 && x > 0);
    console.log(list.join(' '));
    

}
sovle([
    '1 2 3 4 5 4 0 3 2 1',
    'Complete 85',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 10',
    'Count Completed',
    
  ]
  
  );