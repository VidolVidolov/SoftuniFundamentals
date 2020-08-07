function solve(input) {

    let pattern = /^(?<name>[A-Za-z\d\!\@\#\$\?]+)=(?<length>\d+)<<(?<code>.+)$/;
    let line = input.shift();

    while (line !== 'Last note') {

        let result = pattern.exec(line);
        if (result) {
            let name = result.groups.name;
            let length = Number(result.groups.length);
            let code = result.groups.code;
            let patternForName = /[\dA-Za-z]/g;
            let nameEncrypted = name.match(patternForName);
            if (nameEncrypted) {
                name = nameEncrypted.join('');
                if (length === code.length) {
                    console.log(`Coordinates found! ${name} -> ${code}`);
                }else {
                    console.log('Nothing found!'); 
                }
            }else {
                console.log('Nothing found!'); 
            }
        }else {
            console.log('Nothing found!'); 
        }
        line = input.shift();
    }
}

solve([
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note'
]
);