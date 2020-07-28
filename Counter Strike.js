function cs(array){

    let energy = Number(array[0]);
    let movements = array.slice(1)
    let count = 0;
    let flag = true;

    for (let i = 0; i < movements.length; i++) {
        let move = movements[i];
        if(move === 'End of battle'){
            break;
        }
        move = Number(move);
        
        
        if((energy - move) < 0){
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            flag = false;
            break;
        }else{
            energy-= move;
            count++;
        }
        if(count % 3 === 0 && count !== 0){
            energy += count;
        }
        
         
    }

    if(flag){
        console.log(`Won battles: ${count}. Energy left: ${energy}`);
    }

}

cs([ '100', 'End of battle']
);