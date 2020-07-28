function commonElements(arrayOne, arrayTwo) {

    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
                if(arrayOne[i] === arrayTwo[j]){
                    console.log(arrayOne[i]);
                }
            
        }
        
    }


}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);