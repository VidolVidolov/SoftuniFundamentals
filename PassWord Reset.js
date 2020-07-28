function solve(input) {

    let pass = input.shift();
    let command = input.shift();

    while (command !== 'Done') {

        if (command === 'TakeOdd') {
            let newString = '';
            for (let i = 1; i < pass.length; i += 2) {
                newString += pass[i];
            }
            console.log(newString);
            pass = newString;
        } else if (command.includes('Cut')) {
            let [command1, index, length] = command.split(' ');
            index = Number(index);
            length = Number(length);
            let removedStr = pass.substr(index, length);
            pass = pass.replace(removedStr, '');
            console.log(pass);
        } else if (command.includes('Substitute')) {
            let [command1,substring, substitute] = command.split(' ');
            if (pass.includes(substring)) {
                while (pass.includes(substring)) {
                    pass = pass.replace(substring, substitute);
                }
                console.log(pass);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
        command = input.shift();
    }

    console.log(`Your password is: ${pass}`);

}

solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]
);