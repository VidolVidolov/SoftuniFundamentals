function solve(input) {

    let pattern = /^(?<artist>[A-Z][a-z\s']*):(?<song>[A-Z\s]*)$/

    let line = input.shift();
    while (line !== 'end') {
        let result = pattern.exec(line);
        if (result) {
            let name = result.groups.artist;
            let song = result.groups.song;
            let key = name.length;
            let encryption = '';
            for (const char of line) {
                let numberChar = char.charCodeAt(0);
                if (numberChar !== 39 && numberChar !== 32) {
                    if (numberChar === 58){
                        numberChar = 64;
                        encryption += String.fromCharCode(numberChar);
                        continue;
                    }
                        if (numberChar + key > 122) {
                            numberChar = (numberChar + key) - 122;
                            numberChar += 96;
                            encryption += String.fromCharCode(numberChar);
                        } else if(numberChar + key > 90 && numberChar < 90){
                            numberChar = (numberChar + key) - 90;
                            numberChar += 64;
                            encryption += String.fromCharCode(numberChar);
                        }else{
                            encryption += String.fromCharCode(numberChar + key);
                        }
                }else {
                    encryption += String.fromCharCode(numberChar);
                }
            }
            console.log(`Successful encryption: ${encryption}`);
        }else {
            console.log(`Invalid input!`);
        }
        line = input.shift();
    }
}
solve([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    "Guns n'roses:NOVEMBER RAIN",
    'Christina Aguilera: HuRt',
    'end'
  ]
  
);