function solve(word, text){

    let words = word.split(', ');
    let sentance = text.split(' ');
    let newSentance = [];
    for (let singleWord of sentance) {
        if(singleWord.includes('*')){
            let newWord = checker(singleWord);
            singleWord = newWord;
        }
        newSentance.push(singleWord);
    }

    console.log(newSentance.join(' '));

    function checker(string){
        let result = '';
        for (const iterator of words) {
            if(iterator.length === string.length){
                result = iterator;
                break;
            }
        }
        return result;
    }


}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'

);