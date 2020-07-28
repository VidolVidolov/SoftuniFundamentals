function search(array1, array2) {

    let elementsToTake = array2[0];
    let elementsToDelete = array2[1];
    let numberToSearch = array2[2];
    let newArr = [];
    newArr = array1.slice(0, elementsToTake);
    newArr.splice(0, elementsToDelete);
    let counter = 0;

    for (const iterator of newArr) {
        
        if(iterator === numberToSearch){
            counter++;
        }
    }

    console.log(`Number ${numberToSearch} occurs ${counter} times.`);
    
}

search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);