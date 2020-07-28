function solve(n) {

    console.log('<div class="chessboard">');
    let white = 'white';
    let black = 'black';
    let currBlock = 'white';

    for (let i = 1; i <= n; i++) {
        console.log('  <div>');
        for (let j = 1; j <= n; j++) {

            if (currBlock === white) {
                console.log('    <span class="black"></span>');
                currBlock = black;
            } else {
                console.log('    <span class="white"></span>');
                currBlock = white;
            }

        }
        console.log('  </div>');

        if (n % 2 === 0) {
            if (currBlock == black) {
                currBlock = white;
            } else {
                currBlock = black;
            }
        }


    }

    console.log('</div>');

}


solve(3);