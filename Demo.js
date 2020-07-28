function solve(input) {

    let numberOfMessages = Number(input.shift());
    let patternCript = /[star]/gi;
    let attacked = [];
    let destroyed = [];
    let countA = 0;
    let countD = 0;
    let pattern;
    for (let i = 0; i < numberOfMessages; i++) {
        let line = input.shift();
        let sumOfDecrypt = line.match(patternCript);
        if (sumOfDecrypt) {
            let newCode = generateNewCode(sumOfDecrypt.length, line);
            line = newCode;
        }
        pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>[\d]+)[^@\-!:>]*!(?<type>[A|D])![^@\-!:>]*->(?<soldierCount>[\d]+)/.exec(line);
        if (pattern) {
            let name = pattern.groups.name;
            let type = pattern.groups.type;
            if (type === 'A') {
                attacked.push(name);
            } else {
                destroyed.push(name);
            }
        }


    }

    let sort = attacked.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attacked.length}`);
    for (const iterator of sort) {
        console.log(`-> ${iterator}`);
    }

    sort = destroyed.sort((a, b) => a.localeCompare(b));
    console.log(`Destroyed planets: ${destroyed.length}`);
    for (const iterator of sort) {
        console.log(`-> ${iterator}`);
    }


    function generateNewCode(number, word) {
        let newWord = '';
        for (const char of word) {
            let code = char.charCodeAt(0);
            let newCode = code - number;
            let newChar = String.fromCharCode(newCode);
            newWord += newChar;
        }
        return newWord;
    }

}
solve(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']



);