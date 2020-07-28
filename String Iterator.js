function solve(input){
    let words = input.split(' ');

    let text = {
        next: function(){
            let flag = words.length === 0;
            let word = words.shift();
            let object = {
                value: word,
                done: flag
            }
            return object;
        }
    }
    
    let element = text.next();

    while(!element.done){
        console.log(element.value);
        element = text.next();
    }

}

solve('Et cillum do voluptate cillum ut cupidatat aliqua.');