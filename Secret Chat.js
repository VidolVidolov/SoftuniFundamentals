function solve(input){

    let string = input.shift();
    let command = input.shift();
    let result = '';

    while(command !== 'Reveal'){
        let [att1, att2, att3] = command.split(':|:')
        if(att1 === 'InsertSpace'){
            let index = Number(att2);
            string = string.split('');
            string.splice(index,0,' ');
            string = string.join('');
            console.log(string);
            
        }else if(att1 === 'Reverse'){
            let substring = att2;
            if(string.includes(substring)){
                string = string.replace(substring,'');
                substring = substring.split('').reverse().join('');
                string = string.concat(substring);
                console.log(string);
            }else{
                console.log(`error`);
            }
            
            
        }else if(att1 === 'ChangeAll'){
            let substring = att2;
            let replacement = att3;

            while(string.includes(substring)){
                string = string.replace(substring, replacement);
            }
            console.log(string);
        }
        command = input.shift();
    }

    console.log(`You have a new text message: ${string}`);
    
}

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
  );