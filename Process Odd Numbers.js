function oddNumbers(array){

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let  element = array[i];

        if(i % 2 !== 0){
            newArray.push(element*2);
        }
        
    }

    let reversed = newArray.reverse();
    console.log(reversed.join(' '));

}

oddNumbers([10, 15, 20, 25])