function solve(input) {

    let names = input.shift();
    let patternNames = /[A-Za-z]/g;
    let patternDistane = /\d/g
    let string = input.shift();
    let racers = {};

    while (string !== 'end of race') {
        let name = string.match(patternNames).join('');
        let distance = claculateDistance(string.match(patternDistane));

        if (name && names.includes(name)) {
            if (!racers[name]) {
                racers[name] = 0;
            }
            racers[name] += distance;
        }
        string = input.shift();
    }

    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

    for (const iterator in sorted) {

        switch (iterator) {
            case '0':
                console.log(`1st place: ${sorted[iterator]}`);
                break;
            case '1':
                console.log(`2nd place: ${sorted[iterator]}`);
                break;
            case '2':
                console.log(`3rd place: ${sorted[iterator]}`);
                break;
        }

    }

    function claculateDistance(arr) {

        let distance = 0;
        for (const char of arr) {
            distance += Number(char);
        }
        return distance;
    }

}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]
);