function solve(string) {

    let pattern = /(?<day>[\d]{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>[\d]{4})/g;
    let validate = pattern.exec(string);
    while(validate  !== null){
        let day = validate.groups['day'];
        let month = validate.groups['month'];
        let year = validate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        validate = pattern.exec(string);
    }
}

solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");