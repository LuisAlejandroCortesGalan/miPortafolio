class Song {

    constructor(songName, singer, songTime, genre, favorite, isPlaying) {
        this.songName = songName;
        this.singer = singer;
        this.singerTime = songTime;
        this.genre = genre;
        this.favorite = favorite;
        this.isPlaying = false;
        this.isPlaying = isPlaying;
    }

    play () {
        this.isPlaying = true;
        return `La cancion ${this.songName} esta SONANDO`;
    }

    setFavorite () {
        if(!this.favorite) {
            this.favorite = true;
            return `La cancion ${this.songName} ya ES FAVORITA`;
        } else {
            this.favorite = false;
            return `La cancion ${this.songName} es NO ES FAVORITA`;
        }

    }
}