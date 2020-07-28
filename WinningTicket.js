function solve(string) {

    let pattern = /([\w]{0,4}[$#^@]{6,10}[\w]{0,4}[$#^@]{6,10}[\w]{0,4})/g;
    let input = string.shift();
    input = input.split(', ');
    for (let line of input) {
        line = line.trim();
        if (line.length === 20) {
            let smt = line.match(pattern);
            if (smt) {
                let counterPattern = /([@]{6,10})?([#]{6,10})?([$]{6,10})?([\^]{6,10})?/g;
                let count = smt[0].slice(0, 10);
                let count2 = smt[0].slice(10);
                count = count.match(counterPattern).join('');
                count2 = count2.match(counterPattern).join('');
                
                if(count.length === count2.length){
                    if (count.length < 10) {
                        console.log(`ticket "${smt[0]}" - ${count.length}${count[0]}`);
                    } else if (count.length === 10) {
                        console.log(`ticket "${smt[0]}" - ${count.length}${count[0]} Jackpot!`);
                    }
                }else{
                    console.log(`invalid ticket`);
                }
            } else {
                console.log(`ticket "${line}" - no match`);
            }
        } else {
            console.log(`invalid ticket`);
        }
    }

}

solve(['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     @@@@@@@@@@@@@@e@@@ey']



);