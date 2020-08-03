function solve(input) {

    let pattern = /^(.+)>(?<numbers>\d{3})\|(?<lowerCase>[a-z]{3})\|(?<upperCase>[A-Z]{3})\|(?<evereything>[^<>]{3})<\1$/;

    let count = Number(input.slice(0, 1)[0]);
    let passwords = input.slice(1);

    for (let i = 0; i < count; i++) {
        let line = passwords[i];
        let result = pattern.exec(line);
        if (result) {
            let numbers = result.groups.numbers;
            let lowerCase = result.groups.lowerCase;
            let upperCase = result.groups.upperCase;
            let evereything = result.groups.evereything;
            let pass = numbers + lowerCase + upperCase + evereything;
            console.log(`Password: ${pass}`);
        }else {
            console.log(`Try another password!`);
        }

    }
}

solve([
    '5',
    'aa>b11|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>o88|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ]
  
);