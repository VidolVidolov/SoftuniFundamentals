function solve(text , word){

    let searchedWord = ` ${word} `;
    let counter = 0;
    let found = text.indexOf(searchedWord);
    while(found > -1){
        counter++;
        found = text.indexOf(searchedWord,found+1);
        
    }

    if(text.startsWith(word)){
        counter++;
    }
    if(text.endsWith(word)){
        counter++;
    }

    console.log(counter);

}

solve("This is a word and it also is a sentence",
"is"
);