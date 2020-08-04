function solve(input) {
4
    let pattern = /([*@])(?<tag>[A-Z][a-z]{2,})\1:\s\[(?<first>[A-Za-z])\]\|\[(?<second>[A-Za-z])\]\|\[(?<third>[A-Za-z])\]\|$/;

    let count = Number(input.shift());
    for (let i = 0; i < count; i++) {
        let line = input[i];
        let validate = pattern.exec(line);
        if (validate) {

            let tag = validate.groups.tag;
            let first = validate.groups.first.charCodeAt(0);
            let second = validate.groups.second.charCodeAt(0);
            let third = validate.groups.third.charCodeAt(0);
            if (line.endsWith(`[${validate.groups.third}]|`)) {
                console.log(`${tag}: ${first} ${second} ${third}`);
            } else {
                console.log(`Valid message not found!`);
            }

        } else {
            console.log(`Valid message not found!`);
        }
    }

}

solve([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
  ]
);

// solve([
//     '3',
//     '*Request*: [I]|[s]|[i]|',
//     '*Taggy@: [73]|[73]|[73]|',
//     'Should be valid @Taggy@: [v]|[a]|[l]|'
//   ]
//   )