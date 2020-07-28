function houseParty(array) {

    let listOfGuests = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i].split(' ');
        let name = element[0];
        if (!element.includes(`not`)) {
            if (listOfGuests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                listOfGuests.push(name);
            }
        } else {
            if (listOfGuests.includes(name)) {
               // let index = listOfGuests.indexOf(name);
               for (const index in listOfGuests) {
                   let element = listOfGuests[index];
                   if(element === name){
                    listOfGuests.splice(index, 1);
                    break;
                   }
               }
                //listOfGuests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }

    }

    console.log(listOfGuests.join('\n'));
    
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']


);