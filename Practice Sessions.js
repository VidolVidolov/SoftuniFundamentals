function solve(input) {

    let roads = {};

    let line = input.shift();
    while (line !== 'END') {
        let [command, arg1, arg2, arg3] = line.split('->');

        if (command === 'Add') {
            let road = arg1;
            let racer = arg2;

            if (!roads[road] || roads[road].isClosed) {
                roads[road] = {
                    racer: [racer],
                    isClosed: false,
                }
            }else {
                roads[road].racer.push(racer);
            }
        } else if (command === 'Move') {
            let currentRoad = arg1;
            let racer = arg2;
            let nextRoad = arg3;
            let index = roads[currentRoad].racer.indexOf(racer);
            if (index > -1) {
                roads[currentRoad].racer.splice(index, 1);
                roads[nextRoad].racer.push(racer);
            }
        } else if(command === 'Close'){
            let road = arg1;
            if(roads[road]){
                roads[road].isClosed = true;
            }
        }
        line = input.shift();
    }

    let validTracks = Object.keys(roads).filter(el => roads[el].isClosed === false);
    let sorted = validTracks.sort((a,b) => roads[b].racer.length - roads[a].racer.length || a.localeCompare(b));
    console.log(`Practice sessions:`);
    
    for (const road of sorted) {
        console.log(road);
        roads[road].racer.forEach(element => { 
            console.log(`++${element}`);
        });
    }
}

solve([
    'Add->Glencrutchery Road->Giacomo Agostini',
    'Add->Braddan->Geoff Duke',
    'Add->Peel road->Mike Hailwood',
    'Add->Glencrutchery Road->Guy Martin',
    'Move->Glencrutchery Road->Giacomo ->Peel road',
    'Close->Braddan',
    'END'
]
);