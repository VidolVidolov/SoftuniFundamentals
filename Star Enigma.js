function solve(input) {

    let numberOfMessages = Number(input.shift());
    let patternCript = /[star]/gi;
    let attacked = [];
    let destroyed = [];
    let patt = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>[\d]+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldierCount>[\d]+)/;
    for (let i = 0; i < numberOfMessages; i++) {
        let line = input.shift();
        let sumOfDecrypt = line.match(patternCript);

        if (sumOfDecrypt) {
            let newWord = '';
            for (const char of line) {
                let code = char.charCodeAt(0);
                let newCode = code - sumOfDecrypt.length;
                let newChar = String.fromCharCode(newCode);
                newWord += newChar;
            }
            line = newWord;
        }
            let pattern = patt.exec(line);
            if (pattern) {
                let name = pattern.groups.name;
                let type = pattern.groups.type;
                if (type === 'A') {
                    attacked.push(name);
                } else if (type === 'D') {
                    destroyed.push(name);
                }
            }
        

    }

    console.log(`Attacked planets: ${attacked.length}`);
    let sort = attacked.sort((a, b) => a.localeCompare(b)).forEach(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    sort = destroyed.sort((a, b) => a.localeCompare(b)).forEach(x => console.log(`-> ${x}`));

}

solve([ '2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR' ]



);