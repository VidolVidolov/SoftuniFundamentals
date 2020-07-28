function personInfo(firstName, lastName, age){

let person = {};

person.firstName = firstName;
person.lastName = lastName;
person.age = age;

for (const info in person) {
    console.log(`${info}: ${person[info]}`);
}

}

personInfo("Peter", 
"Pan",
"20"
);