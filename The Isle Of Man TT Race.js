function solve(input) {

    let pattern = /([#$%*&])(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<encrypted>.+)$/;

    for (let line of input) {
        let result = pattern.exec(line);
        if (result) {
            let name = result.groups.name;
            let length = Number(result.groups.length);
            let encrypted = result.groups.encrypted;
            if (length === encrypted.length) {

                let codeToPrint = '';
                for (const char of encrypted) {
                    let concator = char.charCodeAt(0);
                    concator += length;
                    let concatenator = String.fromCharCode(concator);
                    codeToPrint += concatenator;
                }
                console.log(`Coordinates found! ${name} -> ${codeToPrint}`);
                break;
            } else {
                console.log(`Nothing found!`);
            }
        } else {
            console.log(`Nothing found!`);
        }
    }
}

solve([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
]
);