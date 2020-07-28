function solve(input) {

    let string = input.shift();
    let pattern = /([@#])(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
    let words = pattern.exec(string);
    let counter = 0;
    let result = {};
    let printer = [];
    let pairsCounter = 0;

    while (words !== null) {
        pairsCounter++;
        let firstWord = words.groups['first'];
        let secondWord = words.groups['second'];
        if (firstWord === secondWord.split('').reverse().join('')) {
            printer.push(firstWord + ' <=> ' + secondWord);
            counter++;
        }
        words = pattern.exec(string);
    }

    if(pairsCounter > 0){
        console.log(`${pairsCounter} word pairs found!`);
    }else{
        console.log(`No word pairs found!`);
    }
    if (counter === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(printer.join(', '));
    }
}



solve([
    `@LOOP@@POol@car@@rac@`
]
);