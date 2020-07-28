function solve(text) {

    let sentance = text.split(' ');

    let hashTag = [];

    for (const word of sentance) {
        if (word.length > 1 && word.startsWith('#')) {
            hashTag.push(word);
        }
    }

    for (const word of hashTag) {
        let check = checker(word);
        if(check){
            console.log(word.substring(1));
        }
    }

    function checker(word) {
        let flag = false;
        word = word.substring(1);
        for (const iterator of word) {
            let char = iterator.charCodeAt(0);
            if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
                flag = true;
            }else{
                flag = false;
                break;
            }
               
        }
        return flag;

    }


}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');