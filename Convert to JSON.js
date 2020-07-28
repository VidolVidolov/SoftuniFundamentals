function convert(fname,lname, hair){

    let person = {};

    person.name = fname;
    person.lastName = lname;
    person.hairColor = hair;

    let converted = JSON.stringify(person);
    console.log(converted);
    
}



convert('George',
'Jones',
'Brown'
);