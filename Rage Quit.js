function solve(input){

    let string = input.shift();
    let pattern = /[^\d]+[\d]+/g;
    let result = [];
    let line = pattern.exec(string);
    let pushing = '';

    while(line != null){
        pushing = '';
        let digitPattern = /[\d]+/;
        let number = line[0].match(digitPattern);
        number = Number(number.join(''));
        line = line[0];
        while(line.includes(number)){
            line = line.replace(number,'');
        }
        for (let i = 0; i < number; i++) {
            pushing += line.toUpperCase();
        }
        result.push(pushing);
        line = pattern.exec(string)
    }

    let finalString = result.join('');
    let unique = [];
    let lowerCase = finalString.toLowerCase();
    for (const char of lowerCase) {
        if(!unique.includes(char)){
            unique.push(char)
        }
    }
    console.log(`Unique symbols used: ${unique.length}`);
    console.log(finalString);

}

solve([
    'kurwa&5sy@1'
  ]  
);
