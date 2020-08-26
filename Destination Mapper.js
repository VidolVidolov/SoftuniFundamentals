function solve(input) {

    let pattern = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
    let locations = input.match(pattern);
    let result = [];
    let points = 0;
    if (locations) {
        for (let loc of locations) {
            loc = loc.split('');
            loc.pop();
            loc.shift();
            loc = loc.join('');
            points += loc.length;
            result.push(loc);
        }
    }

    console.log(`Destinations: ${result.join(', ')}`);
    console.log(`Travel Points: ${points}`);

}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');