function solve(input){

    let string = input.shift();
    let pattern = /(?<=\s)[a-z]+([\.\-\_][a-z]+)*@[a-z]+([\.\-][a-z]+)*\.[a-z]+/g
    let result = [];
    let line;
        
        while((line = pattern.exec(string)) !== null){
            result.push(line[0]);
        }   
        
    console.log(result.join('\n'));
    
}

solve([ 'Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- _steve@yahoo.cn.' ]
);