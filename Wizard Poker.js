function solve(array){

    let cards = array[0].split(':')
    let commands = array.slice(1);
    let deck = [];
    for (let i = 0; i < commands.length; i++) {
        let element = commands[i].split(' ');
        let action = element[0];
        let card = element[1];
        let newCard = element[2];
        if(action === 'Ready'){
            break;
        }
        
        if(action === 'Add'){
            if(cards.includes(card)){
                deck.push(card);
            }else{
                console.log(`Card not found.`);
            }
        }else if(action === 'Insert'){
            if(cards.includes(card) && newCard < deck.length && newCard >= 0){
                deck.splice(newCard,0,card);
            }else{
                console.log(`Error!`);
            }
        }else if(action === 'Remove'){
            if(deck.includes(card)){
                let index = deck.indexOf(card);
                deck.splice(index,1);
            }else{
                console.log(`Card not found.`);
            }
        }else if(action === 'Swap'){
            let indexOfFirst = deck.indexOf(card);
            let indexOfSecond = deck.indexOf(newCard);

           let swap = deck.splice(indexOfFirst,1,newCard);
            deck.splice(indexOfSecond,1,swap[0]);
        }else if(action === 'Shuffle'){
            deck.reverse();
        }
        
    }

console.log(deck.join(' '));

}


solve([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
  ]
  
  );