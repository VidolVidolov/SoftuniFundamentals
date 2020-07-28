function solve(input) {

    let text = input.split('');
    let sentance = [];
    let indexes = [];
    let word = '';
    let index = -1;
    for (const char of text) {
        let isCap = isCapital(char);
        if (isCap) {
            index = text.indexOf(char, index + 1);
            indexes.push(index);
        }
    }

    for (let i = 0; i < indexes.length; i++) {
        let word = input.substring(indexes[i], indexes[i + 1]);
        sentance.push(word);
    }
    console.log(sentance.join(', '));
    
    function isCapital(char) {
        char = char.charCodeAt(0);
        return char >= 65 && char <= 90 ? true : false;

    }

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');