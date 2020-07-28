function solve(input){
let string = input.shift();
string = string.split('|');
let counter = 0;
let patternForCaps = /([\#\$\%\*\&])[A-Z]+\1/g;
let patternForStartingLetter = /[\d]+:[\d]{2}/g;
let finalPattern = /\s[A-Z][^\s]*[a-z]+/g;
let caps = [];
let capLettersAndRemainingLength = {};
let result = [];

for (let line of string) {
    if (counter === 0) {
        let capitalLetters = line.match(patternForCaps)
        capitalLetters = capitalLetters[0].split('');
        capitalLetters.shift();
        capitalLetters.pop();
        for (const char of capitalLetters) {
            caps.push(char);
        }
        counter++;
    } else if (counter === 1) {
        let infoWords = line.match(patternForStartingLetter);
        for (let iterator of infoWords) {
            iterator = iterator.split(':').map(Number);
            let cap = String.fromCharCode(iterator[0]);
            let remainingChars = Number(iterator[1]);
            capLettersAndRemainingLength[cap] = remainingChars;
        }
        counter++;
    } else if (counter === 2) {
        let words = line.match(finalPattern);
        for (const iterator of words) {
            let str = iterator.trim();
            for (const key in capLettersAndRemainingLength) {
                if (key === str[0] && str.length === capLettersAndRemainingLength[key] + 1) {
                    console.log(str);
                }
            }
        }
    }
}
}
