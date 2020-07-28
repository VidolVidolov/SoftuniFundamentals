function dictionary(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        element = JSON.parse(element);
        obj = Object.assign(obj,element);
    }
    let sortedKeys = Object.keys(obj);
    sortedKeys.sort((a,b) => a.localeCompare(b));
   for (const element of sortedKeys) {
       let def = obj[element];
       console.log(`Term: ${element} => Definition: ${def}`);
       
   }


}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Coffee":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Boiler":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);