let playList = [
    new PlayList("Lista de Rock", "rock duro"),
    new PlayList("Lista de POP", "michale jackson"),

]

let songs = [
    new Song("Wonderwall", "David Bowie", 130, "Rock", false),
    new Song("White and Black", "Michael Jackson", 250, "POP", true),
]

let singer = [
    new Singer("David Bowie"),
    new Singer("Michael Jackson"),
]

singer[0].top3.push(songs[0]);


let seleccion = `PlayList`;

document.getElementById("datos").addEventListener("change", function (e) {
    seleccion = e.target.value;
    console.log(seleccion);

    if (seleccion === 'PlayList') {

        document.getElementsByClassName("formOcultoPlayList")[0].style.display = "flex";
        document.getElementsByClassName("formOcultoSong")[0].style.display = "none";
        document.getElementsByClassName("formOcultoSinger")[0].style.display = "none";
        document.getElementsByClassName("formOcultoTop3")[0].style.display = "none";
    }

    if (seleccion === 'song') {

        document.getElementsByClassName("formOcultoPlayList")[0].style.display = "none";
        document.getElementsByClassName("formOcultoSong")[0].style.display = "flex";
        document.getElementsByClassName("formOcultoSinger")[0].style.display = "none";
        document.getElementsByClassName("formOcultoTop3")[0].style.display = "none";
    }

    if (seleccion === 'singer') {

        document.getElementsByClassName("formOcultoPlayList")[0].style.display = "none";
        document.getElementsByClassName("formOcultoSong")[0].style.display = "none";
        document.getElementsByClassName("formOcultoSinger")[0].style.display = "flex";
        document.getElementsByClassName("formOcultoTop3")[0].style.display = "none";

    }
    if (seleccion === 'top3') {

        document.getElementsByClassName("formOcultoPlayList")[0].style.display = "none";
        document.getElementsByClassName("formOcultoSong")[0].style.display = "none";
        document.getElementsByClassName("formOcultoSinger")[0].style.display = "none";
        document.getElementsByClassName("formOcultoTop3")[0].style.display = "flex";
    }

})


let altaPlayList = () => {
    let playListName = document.getElementById('playList').value;
    let description = document.getElementById('description').value;

    playList.push(new PlayList(playListName, description));
    document.getElementById('respuesta1').innerHTML = `<p class="Win">PlayList añadida ${playListName}, <br> Nombre: ${playListName}, <br> Descripcion: ${description}</p>`

}

let altaSong = () => {
    let songName = document.getElementById('songName').value;
    let singer = document.getElementById('singer').value;
    let songTime = document.getElementById('songTime').value;
    let genero = document.getElementById('genero').value;
    let favorito = document.getElementById('favorito').checked;
    songs.push(new Song(songName, singer, songTime, genero, favorito));
    document.getElementById('respuesta2').innerHTML = `<p class="Win">Cancion añadida!! <br> Nombre: ${songName} <br> <br> Cantante: ${singer} <br><br> tiempo de duracion: ${songTime} <br><br> genero: ${genero} <br><br> favorito?: ${favorito} <br></p>`


}

let altaSinger = () => {
    let singerName = document.getElementById('singerName').value;
    singer.push(new Singer(singerName));

    document.getElementById('respuesta3').innerHTML = `<p class="Win">Cantante añadido ${singerName}</p>`
}

let altaTop3 = () => {
    let singer = document.getElementById('singerTop3').value;
    let song = document.getElementById('songTop3').value;

console.log("singer", singer, "song", song);
let buscarCantante = singer.find(cantante => cantante.singerName == nombre)
let encontrarCancion = songs.find(song => song.songName == song)


if (buscarCantante && encontrarCancion) {
    buscarCantante = singer.indexOF(buscarCantante);
    buscarCantante.top3.push(encontrarCancion);
    document.getElementById('respuestaTop3').innerHTML = `<p class="lose">Cancion añadida!! <br> Nombre cantante: ${singer}, <br> Nombre cancion: ${song}</p>`
} else {
    document.getElementById('respuestaTop3').innerHTML = `<p class="lose">El cantante o la cancion no existen!</p>`
}

console.log( "comprobarSong", encontrarCancion);

}

let verDatosCantante = () => {
    let nombre = document.getElementById('nombreCantante').value;

    let buscarCantante = singer.find(cantante => cantante.singerName == nombre)
    if (buscarCantante) {
        document.getElementById('respuesta4').innerHTML = `<p class="win">El cantante existe!</p>`
    } else {
        document.getElementById('respuesta4').innerHTML = `<p class="lose">El cantante no existe!</p>`
    } 
    if (buscarCantante.top3.length > 0) {
        document.getElementById('respuesta4').innerHTML = `<p class="win">El cantante existe y tiene ${buscarCantante.top3.length} canciones en el top 3</p>`
    }else {
        document.getElementById('respuesta4').innerHTML = `<p class="lose">El cantante existe pero no tiene canciones en el top 3</p>`
    }

}

let verDatosPlayList = () => {
    let nombre = document.getElementById('nombrePlayList').value;

    let buscarPlayList = playList.find(playlist => playlist.playListName == nombre);
    
    
    if (buscarPlayList) {
        console.log("buspalsdasd", buscarPlayList);
        document.getElementById("respuesta5").innerHTML = `<p class="win">La playList si existe! <br> su nombre es: ${nombre} <br> y su descripcion: ${buscarPlayList.description}</p>`

    } else {
        document.getElementById("respuesta5").innerHTML = `<p class="lose">La playList no existe!</p>`
    }
    
    
}

let activarPlayList = () => {
    let nombre = document.getElementById('nombreActivarPlayList').value;

    playList.map(playlist => playlist.active == false)
    let buscarPlayList = playList.find(playlist => playlist.playListName == nombre);
    
    if (!buscarPlayList) {
        document.getElementById("respuesta6").innerHTML = `<p class="lose">La playList no existe!</p>`
    } else {
        buscarPlayList.activatePlayList();
        document.getElementById("respuesta6").innerHTML = `<p class="win">La playList ${nombre} se ha activado!</p>`
    }
    
}

let activarPlaySong = () => { 
    let nombre = document.getElementById('nombreCancion').value;

    let encontrarCancion = songs.find(song => song.songName == nombre)

    songs.map(song => song.active == true ? song.active == false : song.active == true)

    console.log("encontrar cancion", encontrarCancion);

    if (!encontrarCancion) {
        document.getElementById("respuesta7").innerHTML = `<p class="lose">La CANCION no existe!</p>`
    } else {
        encontrarCancion.play();
        document.getElementById("respuesta7").innerHTML = `<p class="win">La CANCION ${nombre}  SE ESTA REPRODUCIENDO!</p>`
    }
}

let activarSongFavorita = () => {
    let nombre = document.getElementById('nombreCancionFavorita').value;

    let encontrarCancion = songs.find(song => song.songName == nombre)

    if (!encontrarCancion) {
        document.getElementById("respuesta8").innerHTML = `<p class="lose">La CANCION no existe!</p>`
    } else {
        let  cambio = encontrarCancion.setFavorite();
        document.getElementById("respuesta8").innerHTML = `<p class="win">La CANCION ${nombre} se ha cambiado: <br> ${cambio}!</p>`
    }

}


let verFavoritas = () => {
    let favoritas = songs.filter(song => song.favorite === true)
    console.log("favoritas", favoritas);
    document.getElementById("respuesta9").innerHTML = `<p class="win">CANCIONES FAVORITAS <br> ${favoritas.map(song => song.songName).join(', ')}</p>`
}