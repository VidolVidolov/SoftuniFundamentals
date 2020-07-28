function solve(input){

    let firstString = input.shift();
    let secondString = input.shift();
    let wordToIterate = input.shift().toUpperCase();
    let string = firstString.concat(secondString);
    let vowels = ['a', 'e', 'o', 'u', 'i'];
    let newString = '';
    let counter = 0;
    for (let char of string) {
        
        if(vowels.includes(char)){
            char = wordToIterate[counter];
            counter++;
            if(counter === wordToIterate.length){
                counter = 0;
            }
        }
        newString+= char;
    }

    console.log(`Your generated password is ${newString.split('').reverse().join('')}`);
    

}

solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    );