function solve(input) {

    let stops = input.shift();
    let line = input.shift();

    while (line !== 'Travel') {
        let [commad, arg1, arg2] = line.split(':');

        if (commad === 'Add Stop') {
            let index = Number(arg1);
            let str = arg2;
            if (index < stops.length && index >= 0) {
                let first = stops.slice(0, index);
                let second = stops.slice(index);
                stops = first + str + second;
            }
            console.log(stops);
        } else if (commad === 'Remove Stop') {
            let startIndex = Number(arg1);
            let endIndex = Number(arg2);
            if ((startIndex < stops.length && startIndex >= 0) && (endIndex < stops.length && endIndex >= 0)) {
                let substr = stops.substring(startIndex, endIndex + 1);
                stops = stops.replace(substr, '');
            }
            console.log(stops);
        } else if (commad === 'Switch') {
            let old = arg1;
            let newOne = arg2;

            stops = stops.replace(old, newOne);

            console.log(stops);
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:19:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]

);