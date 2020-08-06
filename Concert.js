function solve(input) {

    let bands = {};
    line = input.shift();

    while (line !== 'start of concert') {
        let [command, arg1, arg2] = line.split('; ');

        if (command === 'Add') {
            let bandName = arg1;
            arg2 = arg2.split(', ');
            if (!bands[bandName]) {
                bands[bandName] = {
                    members: arg2,
                    time: 0,
                };
            } else {
                for (const person of arg2) {
                    if(!bands[bandName].members.includes(person)){
                        bands[bandName].members.push(person);
                    }
                }
            }
        } else if (command === 'Play') {
            let bandName = arg1;
            let time = Number(arg2);
            if(!bands[bandName]){
                bands[bandName] = {
                    members: [],
                    time: 0,
                }
            }
            bands[bandName].time += time;
        }
        line = input.shift();
    }
    let bandToPrint = input.shift();

    let sorted = Object.keys(bands).sort((a,b) => bands[b].time - bands[a].time || a.localeCompare(b));
    let totalTime  = 0;
    Object.keys(bands).forEach(el => totalTime += bands[el].time);
    console.log(`Total time: ${totalTime}`);
    for (const band of sorted) {
        console.log(`${band} -> ${bands[band].time}`);
    }
    console.log(`${bandToPrint}`);
    Object.values(bands[bandToPrint].members).forEach(x => console.log(`=> ${x}`)
    );
}

solve([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
]
);