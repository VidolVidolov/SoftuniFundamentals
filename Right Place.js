function solve(firstString, secondString, thirdString) {

    let newString = '';

    for (let i = 0; i < firstString.length; i++) {

        if (firstString[i] === '_') {
            newString += secondString;
        } else {
            newString += firstString[i];
        }

    }

    if (newString === thirdString) {
        console.log("Matched");

    } else {
        console.log("Not Matched");

    }


}

solve('Str_ng', 'i', 'String');