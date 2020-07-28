function solve(input){

    let result = [];
    let line = input.shift();

    while(line !== 'end'){
        line = line.split(':');
        let char = line.shift();
        let positions = line.shift().split('/').map(Number);
        for (const index of positions) {
            result[index] = char;
            
        }

        line = input.shift();
    }
    console.log(result.join(''));
    
}

solve([
    'a:0/3/5/11', 'v:1/4',
    'j:2',        'm:6/9/15',
    's:7/13',     'd:8/14',
    'c:10',       'l:12',
    'end'
  ]
  
);