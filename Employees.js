function solve(array){

    let person = {};

    for (let i = 0; i < array.length; i++) {
        let name = array[i];
       // let name = element[0];
        let presonalNumber = name.length;

        person.name = name;
        person.number = presonalNumber;
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
        
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );