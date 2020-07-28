function solve(array){

    let person = {};

    for (const iterator of array) {
            let [name, number] = iterator.split(' ');
            person[name] = number;
    }
    
    Object.keys(person).forEach( name => {
        console.log(`${name} -> ${person[name]}`);
    });
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);