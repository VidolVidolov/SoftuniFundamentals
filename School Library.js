function solve(array) {

    let shelf = array[0].split('&');
    let commands = array.slice(1);

    for (let i = 0; i < commands.length; i++) {
        let element = commands[i].split(' | ');
        let action = element[0];
        let bookName = element[1];
        let newBook = element[2];

        if(action === 'Done'){
            break;
        }
        if(action === 'Add Book'){
            if(shelf.includes(bookName)){
                continue;
            }else{
                shelf.unshift(bookName);
            }
        }else if(action === 'Take Book'){
            if(shelf.includes(bookName)){
                let index = shelf.indexOf(bookName);
                shelf.splice(index,1)
            }
        }else if(action === 'Swap Books'){
            if(shelf.includes(bookName) && shelf.includes(newBook)){
                let indexOne = shelf.indexOf(bookName);
                let indexTwo = shelf.indexOf(newBook);

                let firstBook = shelf.splice(indexOne,1).join(' ');
                shelf.splice(indexOne,0, newBook);
                let secondBook = shelf.splice(indexTwo,1);
                shelf.splice(indexTwo, 0, firstBook);
            }
        }else if(action === 'Insert Book'){
            shelf.push(bookName);
        }else if(action === 'Check Book'){
            bookName = Number(bookName);
            if(bookName >= shelf.length){
                continue;
            }
            let wantedBook = shelf.slice(bookName, bookName + 1);
            console.log(wantedBook.join(''));
            
        }

    }

    console.log(shelf.join(', '));
    

}

solve([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
  ]
  
);