function solve(names){

    let pattern = /\b[A-Z][a-z]+ \b[A-Z][a-z]+\b/g;
    let result = [];
    let validName = pattern.exec(names)
    while(validName !== null){
        result.push(validName[0]);
        validName = pattern.exec(names);
    }
    console.log(result.join(' '));
    
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");