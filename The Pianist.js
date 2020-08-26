function solve(input) {

    let numberOfPieces = Number(input.shift());
    let pieces = generatePieces(numberOfPieces);

    let commands = input.shift();

    while (commands !== 'Stop') {
        let [command, piece, arg1, arg2] = commands.split('|');

        if (command === 'Add') {
            let composer = arg1;
            let key = arg2;
            if (!pieces[piece] || pieces[piece].removed === true) {
                pieces[piece] = {
                    composer: composer,
                    key: key,
                    removed: false,
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if(command === 'Remove'){
            if(pieces[piece] && !pieces[piece].removed){
                pieces[piece].removed = true;
                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if(command === 'ChangeKey'){
            let newKey = arg1;

            if(pieces[piece]){
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`); 
            }
        }
        commands = input.shift();
    }

    let validPices = Object.keys(pieces).filter(x => pieces[x].removed !== true);
    let sorted = validPices.sort((a,b) => a.localeCompare(b) || pieces[a].composer.localeCompare(pieces[b].composer));
    for (const iterator of sorted) {
        console.log(`${iterator} -> Composer: ${pieces[iterator].composer}, Key: ${pieces[iterator].key}`);
    }

    function generatePieces(number) {
        let obj = {};

        for (let i = 0; i < number; i++) {
            let p = input.shift();
            let [name, composer, key] = p.split('|');
            if (!obj[name]) {
                obj[name] = {
                    composer: composer,
                    key: key,
                    removed: false,
                }
            }
        }
        return obj;
    }

}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Add|Clair de Lune|Debussy|C# Minor',
    'Stop'
]);