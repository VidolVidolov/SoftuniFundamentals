function tseamAccount(input) {


    let games = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let element = input[i].split(' ');
        let command = element[0];
        let game = element[1];

        if (command === 'Play!') {
            break;
        } else if (command === 'Install') {
            let newGame = '';
            let counter = 0;
            for (let index = 0; index < games.length; index++) {
                let currElement = games[index];

                if (currElement === game) {
                    break;
                } else {
                    counter++;
                }

            }
            if (counter === games.length) {
                games.push(game);
            }

        } else if (command === 'Uninstall') {
            for (let index = 0; index < games.length; index++) {
                let currElement = games[index];
                if (currElement === game) {
                    games.splice(index, 1);
                    break;
                }

            }
        } else if (command === 'Update') {
            let counter = 0;
            for (let index = 0; index < games.length; index++) {
                let currElement = games[index];
                if (currElement === game) {
                    games.splice(index, 1);
                    games.push(game);
                } 
            }
            
        } else if (command === 'Expansion') {
            let expandedGame = game.split('-');
            let exGame = expandedGame[0];
            for (let index = 0; index < games.length; index++) {
                if(exGame === games[index]){
                    exGame = expandedGame.join(":");
                    games.splice(index + 1, 0, exGame);
                    break;
                }

            }
        }

    }
    console.log(games.join(' '));
    


}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']



);