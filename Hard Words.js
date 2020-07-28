function solve(input){

    let text = input.shift().split(' ');
    let arrayOfWords = input.shift();
    let newText = [];
    for (let word of text) {
        if(word.includes('_')){
            let length = word.length;
            let newWord = addWord(length);
            word = newWord;
        }
        newText.push(word);
    }

    console.log(newText.join(' '));
    
    function addWord(lenght){

        let result = '';
        for (const word of arrayOfWords) {
            if(word.length === lenght){
                result = word;
                break
            }
        }
        return result;
    }


}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);