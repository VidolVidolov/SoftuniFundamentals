function printDNA(number){

    let dnaLetters = ['AT','CG','TT','AG','GG'];
    let dashes = [0,2,4,2];
    let stars = [4,2,0,2];

    let output = '';

    for (let i = 0; i < number; i++) {
        let dnaLine = dnaLetters.shift().split('');
        let dash = dashes.shift();
        let star = stars.shift();

        let starsToPrint = '*'.repeat(star/2);
        let dashesToPrint = '-'.repeat(dash);

        output += `${starsToPrint}${dnaLine[0]}${dashesToPrint}${dnaLine[1]}${starsToPrint}\n`;

        dnaLetters.push(dnaLine.join(''));
        dashes.push(dash);
        stars.push(star);
        
    }
    console.log(output);


}


printDNA(10);