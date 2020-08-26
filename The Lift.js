function solve(input) {

    let passengers = Number(input.shift());
    let vagons = input.shift().split(' ').map(Number);

    for (let i = 0; i < vagons.length; i++) {
        let currVagon = vagons[i];
        if (currVagon < 4) {
            while (currVagon != 4) {
                currVagon++;
                passengers--;
                if (passengers == 0) {
                    break;
                }
            }
            vagons[i] = currVagon;
            if (passengers == 0) {
                break;
            }
        }

    }

    let isFull = vagons.filter(x => x !== 4);
    if (isFull.length === 0 && passengers === 0) {
        console.log(vagons.join(' '));
    } else if (isFull.length !== 0) {
        console.log(`The lift has empty spots!`);
        console.log(vagons.join(' '));
    } else {
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
        console.log(vagons.join(' '));
    }
}
solve([
    "20",
    "1 1 1 1 0"
   ]
   
   
);