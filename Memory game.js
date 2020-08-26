function solve(input){

    let elements = input.shift().split(' ');
    let moves = 0;
    let guess = input.shift();
    while(guess !== 'end'){
        let [guess1, guess2] = guess.split(' ');
        guess1 = Number(guess1);
        guess2 = Number(guess2);
        moves++;
        if(guess1 === guess2 || (guess1 < 0 || guess1 >= elements.length) || (guess2 < 0 || guess2 >= elements.length)){
            console.log(`Invalid input! Adding additional elements to the board`);
            let lenght = Math.floor(elements.length / 2);
            elements.splice(lenght,0,`${-moves}a`);
            let index = elements.indexOf(`${-moves}a`);
            elements.splice(index + 1, 0, `${-moves}a`);
        }else if(elements[guess1] === elements[guess2]){
            console.log(`Congrats! You have found matching elements - ${elements[guess1]}!`);
            let element1 = elements[guess1];
            let element2 = elements[guess2];
            let index = elements.indexOf(element1);
            elements.splice(index,1);
            index = elements.indexOf(element2);
            elements.splice(index,1);
        }else if(elements[guess1] !== elements[guess2]){
            console.log(`Try again!`);
        }
        
        if(elements.length === 0){
            console.log(`You have won in ${moves} turns!`);
            break;
        }
        guess = input.shift();
    }

    if(elements.length > 0){
        console.log(`Sorry you lose :(\n${elements.join(' ')}`);
    }

}
solve( [
    "a 2 4 a 2 4", 
    "-4 0", 
    "0 -2",
    "0 -1",
    "0 -1", 
    "end"
    ]
    
    
    );