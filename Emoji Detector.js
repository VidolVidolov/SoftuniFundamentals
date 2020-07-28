function solve(input) {
    let string = input.shift();
    let pattern = /([:*])\1(?<word>[A-Z][a-z]{2,})\1\1/g;
    let words = string.match(pattern);
    let container = {};
    let word = pattern.exec(string);
    let emojisFound = 0;
    let coolness = generateThereshold(string);

    while (word !== null) {
        emojisFound++;
        let emoji = word.groups.word;
        let coolnesScore = findCoolnes(emoji);
        if(!container[emoji]){
            if(coolnesScore > coolness){
                container[emoji] = coolnesScore;
            }
        }
        word = pattern.exec(string);
    }

    console.log(`Cool threshold: ${coolness}`);
    console.log(`${emojisFound} emojis found in the text. The cool ones are:`);
    for (const element of words) {
        for (const key in container) {
            if(element.includes(key) && container[key] > coolness){
                console.log(element);
            }
        }
        
    }
    

function findCoolnes(string){

    let score = 0;

    for (const char of string) {
        let num = char.charCodeAt(0);
        score+= num;
    }
    return score;
}

function generateThereshold(string){
    let sum = 1;
    let digitPattern = /[\d]/g;
    let digits = string.match(digitPattern).map(Number);
    for (const iterator of digits) {
        sum *= iterator;
    }
    return sum;
}
}

solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ]
  
  
);