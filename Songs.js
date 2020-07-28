function songList(array) {

    let songsNumber = array[0];
    let songs = array.slice(1, songsNumber + 1);
    let searchedType = array[array.length - 1];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;

        }
    }
    let songsArr = [];

    for (let i = 0; i < songsNumber; i++) {
        let [typeList, name, time] = songs[i].split('_');
        let song = new Song(typeList, name, time);
        songsArr.push(song);
    }

    // for (let i = 0; i < songsArr.length; i++) {
    //     if(searchedType === 'all'){
    //         console.log(songsArr[i].name);
    //     }else{
    //         if(searchedType === songsArr[i].typeList){
    //             console.log(songsArr[i].name);

    //         }
    //     }

    // }
    if (searchedType === 'all') {
        songsArr.forEach(x => console.log(x.name));
    } else {
        let filtered = songsArr.filter(x => x.typeList === searchedType);
        filtered.forEach(x => console.log(x.name));
    }



}

songList([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']

);