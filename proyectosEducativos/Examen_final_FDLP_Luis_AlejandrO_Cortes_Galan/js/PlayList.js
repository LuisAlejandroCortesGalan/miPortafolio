class PlayList {

    constructor(playListName, description) {
        this.playListName = playListName;
        this.description = description;
        this.active = false;
    }

    activatePlayList() {
        this.active = true;
        return `La playlist ${this.PlayListName} esta ACTIVA`;
    }
}