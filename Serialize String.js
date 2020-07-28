function sovle(input){

    let string = input.shift();
    let chars = {}; 

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if(!chars[char]){
            chars[char] = [i];
        }else{
            chars[char].push(i);
        }
        
    }
    
    for (const key in chars) {
        let indeces = chars[key];
        console.log(`${key}:${indeces.join('/')}`);
    }

}

sovle(['avjavamsdmcalsdm']);