function solve(array){

    let rotations = array.pop();
    let quickRotations = Number(rotations) % array.length;

    for (let index = 0; index < Number(quickRotations); index++) {
        let currElement = array.pop();
        array.unshift(currElement);
        
    }
    
    console.log(array.join(' '));
    


}


solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);