function solve(sentace, word){

    while(sentace.includes(word)){
        sentace = sentace.replace(word, '*'.repeat(word.length));
    }
    console.log(sentace);
    
}

solve("A small sentence with some words small", "small");