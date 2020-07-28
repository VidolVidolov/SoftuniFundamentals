function solve(wordToRemove, string){


    while(string.includes(wordToRemove)){
        string = string.replace(wordToRemove, '');
    }
    console.log(string);

}

solve('ice', 'kicegiciceeb');