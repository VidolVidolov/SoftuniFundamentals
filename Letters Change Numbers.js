function solve(input){

    let sequence = input.split(' ').filter(x => x !== "");
    let result = 0;
    let aplhabet = genCharArray('a', 'z');
    for (let group of sequence) {
        group = group.split('');
        let firstLetter = group.shift();
        let secondLetter = group.pop();
        let number = Number(group.join(''));
        let checkFirst = isUpperCase(firstLetter);
        let checkSecond = isUpperCase(secondLetter);
        if(checkFirst){
            let position = aplhabet.indexOf(firstLetter.toLowerCase()) +1;
            number = number / position;
        }else {
            let position = aplhabet.indexOf(firstLetter.toLowerCase()) +1;
            number = number * position;
        }
        if(checkSecond){
            let position = aplhabet.indexOf(secondLetter.toLowerCase()) +1;
            number -= position;
        }else{
            let position = aplhabet.indexOf(secondLetter.toLowerCase()) +1;
            number += position;
        }
        result += number;
    }
    console.log(result.toFixed(2));
    


    function isUpperCase(char){
        let result = char.charCodeAt(0);
        return result >= 65 && result <= 90? true : false ;
    }
    function genCharArray(charA, charZ) {
        var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i));
        }
        return a;
    }


}

solve('P34562Z q2576f   H456z');