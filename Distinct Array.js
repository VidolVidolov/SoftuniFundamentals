function distinctArray(array){

    let newArr = [];

    for (const element of array) {
        if(!newArr.includes(element)){
            newArr.push(element);
        }
    }

    console.log(newArr.join(' '));
    
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);