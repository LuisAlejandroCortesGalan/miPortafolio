class Singer {

    constructor(singerName) {
        this.singerName = singerName;
        this.top3 = []
    }

    addTop3(song) {
        this.top3.push(song);
        console.log("TOP3", this.top3);
        
    }
}