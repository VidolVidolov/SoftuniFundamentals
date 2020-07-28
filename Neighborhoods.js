function solve(neighborhoods){

    let neighborhood = {};
    let splited = neighborhoods.shift().split(', ');
    for (const iterator of splited) {
        let place = iterator;
        neighborhood[place] = [];
    }

    for (const line of neighborhoods) {
        let [place, person] = line.split(' - ');

        if(neighborhood[place]){
            neighborhood[place].push(person);
        }
    }

    let sortedEntires = Object.entries(neighborhood).sort((a,b) => b[1].length - a[1].length);
    
    for (const kvp of sortedEntires) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for (const iterator of kvp[1]) {
            console.log(`--${iterator}`);
        }
        
    }



}


solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
);