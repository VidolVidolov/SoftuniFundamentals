function solve(word, text) {

    word = word.toLowerCase();
    text = text.toLowerCase().split(' ');
    let foundWord = false;

    for (const currentWord of text) {
        if (currentWord === word) {
            foundWord = true;
            break;
        }
    }
    if (foundWord) {
        console.log(`${word}`);
    } else {
        console.log(`${word} not found!`);

    }
}

solve('javascript',
    'python is the best programming language'
);