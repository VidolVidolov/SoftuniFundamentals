function solve(input) {

    let pattern = /((U\$)(?<username>[A-Z][a-z]{2,})\2)((P\@\$)(?<password>[A-Za-z]{5,}.*[\d]))\5/;
    let count = Number(input.shift());
    let counter = 0;

    for (let i = 0; i < count; i++) {
        let line = input[i];
        let validate = pattern.exec(line);
        if (validate) {
            let name = validate.groups.username;
            let password = validate.groups.password;
            console.log(`Registration was successful`);
            console.log(`Username: ${name}, Password: ${password}`);
            counter++;
        } else {
            console.log('Invalid username or password');
        }
    }

    console.log(`Successful registrations: ${counter}`);

}

solve([ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ]

);