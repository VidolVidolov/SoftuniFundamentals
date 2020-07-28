function solve(input){

    let words = new Map();
    let occurances = 1;
    for (const iterator of input) {
        let word = iterator;

        if(words.has(word)){
            let count = words.get(word)
            words.set(word, count +1);
            
            
        }else{
            words.set(word, occurances);
        }
    }

    let sorted = Array.from(words.entries()).sort((a,b) => b[1]-a[1]);
    
    for (const iterator of sorted) {
        console.log(`${iterator[0]} -> ${iterator[1]} times`);
        
    }
    



}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);