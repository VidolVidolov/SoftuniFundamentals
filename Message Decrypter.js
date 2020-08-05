function solve(input) {

    let pattern = /^([$%])(?<tag>[A-Z][a-z]{3,})\1: \[(?<first>\d+)\]\|\[(?<second>\d+)\]\|\[(?<third>\d+)\]\|$/;
    let information = input.slice();
    let count = Number(information.shift());

    for (let i = 0; i < count; i++) {
        let line = information[i];
        let result = pattern.exec(line);
        if (result) {
            let tag = result.groups.tag;
            let first = String.fromCharCode(result.groups.first);
            let second = String.fromCharCode(result.groups.second)
            let third = String.fromCharCode(result.groups.third);
            console.log(`${tag}: ${first}${second}${third}`);
        } else {
            console.log('Valid message not found!');
        }

    }

}
solve([
    '3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true'
  ]
  
);
