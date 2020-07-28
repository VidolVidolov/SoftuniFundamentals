function solve(bandName, albumName, songName){

    let duration = (albumName.length * bandName.length) * songName.length / 2;
    let time = Math.ceil(duration / 2.5);
    console.log(`The plate was rotated ${time} times.`);
    
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');