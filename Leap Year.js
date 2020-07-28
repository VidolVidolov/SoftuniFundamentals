function solve(year) {

    let firstCheck = (year % 4 === 0) && (year % 100 !== 0);
    let secondCheck = year % 400 === 0;
    if (firstCheck || secondCheck) {
        console.log('yes');

    } else {
        console.log('no');

    }


}

solve(2003);