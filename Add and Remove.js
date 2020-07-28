function solve(array) {

    let newArr = [];
    let innerCounter= 1;
    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if(command === 'add'){
            newArr.push(innerCounter);
            innerCounter++;
        } else if(command === 'remove'){
            newArr.pop(innerCounter);
            innerCounter++;
        }
        
    }
    if(newArr.length === 0){
        console.log('Empty');
        
    }else{
        console.log(newArr.join(' '));
    }
    
}

solve(['remove', 'remove', 'remove']);