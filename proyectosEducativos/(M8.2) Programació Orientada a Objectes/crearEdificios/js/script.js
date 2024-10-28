let edificios = [];

let seleccion = `hotel`;

document.getElementById("edificios").addEventListener("change", function (e) {
    seleccion = e.target.value;
    console.log(seleccion);

    if (seleccion === 'hotel') {

        document.getElementsByClassName("cine")[0].style.display = "none";
        document.getElementsByClassName("cine")[1].style.display = "none";
        document.getElementsByClassName("cine")[2].style.display = "none";
        document.getElementsByClassName("cine")[3].style.display = "none";
        document.getElementsByClassName("cine")[4].style.display = "none";
        document.getElementsByClassName("cine")[5].style.display = "none";

        document.getElementsByClassName("hospital")[0].style.display = "none";
        document.getElementsByClassName("hospital")[1].style.display = "none";

        document.getElementsByClassName("hotel")[0].style.display = "block";
        document.getElementsByClassName("hotel")[1].style.display = "block";
    }

    if (seleccion === 'hospital') {

        document.getElementsByClassName("hotel")[0].style.display = "none";
        document.getElementsByClassName("hotel")[1].style.display = "none";


        document.getElementsByClassName("cine")[0].style.display = "none";
        document.getElementsByClassName("cine")[1].style.display = "none";
        document.getElementsByClassName("cine")[2].style.display = "none";
        document.getElementsByClassName("cine")[3].style.display = "none";
        document.getElementsByClassName("cine")[4].style.display = "none";
        document.getElementsByClassName("cine")[5].style.display = "none";

        document.getElementsByClassName("hospital")[0].style.display = "block";
        document.getElementsByClassName("hospital")[1].style.display = "block";


    }

    if (seleccion === 'cine') {

        document.getElementsByClassName("hotel")[0].style.display = "none";
        document.getElementsByClassName("hotel")[1].style.display = "none";


        document.getElementsByClassName("hospital")[0].style.display = "none";
        document.getElementsByClassName("hospital")[1].style.display = "none";

        document.getElementsByClassName("cine")[0].style.display = "block";
        document.getElementsByClassName("cine")[1].style.display = "block";
        document.getElementsByClassName("cine")[2].style.display = "block";
        document.getElementsByClassName("cine")[3].style.display = "block";
        document.getElementsByClassName("cine")[4].style.display = "block";
        document.getElementsByClassName("cine")[5].style.display = "block";


    }
})

let introducirEdificio = () => {
    let nombre = document.getElementById("nombre").value;
    let plantas = document.getElementById("plantas").value;
    let superficie = document.getElementById("superficie").value;
    let respuesta1 = document.getElementById("respuesta1");

    let edificioEncontrado = edificios.find(edificio => edificio.nombre === nombre);

    if (edificioEncontrado) {
        respuesta1.innerHTML = `<h2 class="lose">El nombre de este edificio ya esta de alta</h2>`;
    } else {
        if (seleccion === 'hotel') {
            let numeroHabitaciones = document.getElementById("numeroHabitaciones").value;
            let edificio = new Hotel(nombre, plantas, superficie, numeroHabitaciones);

            edificios.push(edificio);
            console.log("ARRAY EDIFICIOS", edificios, "", "clase hotel creada:", edificio);
            respuesta1.innerHTML = `<h2 class="win">Hotel añadido correctamente</h2>`;
        } else if (seleccion === 'hospital') {
            let numeroRaciones = document.getElementById("raciones").value;
            let edificio = new Hospital(nombre, plantas, superficie, numeroRaciones);

            edificios.push(edificio);
            console.log("ARRAY EDIFICIOS", edificios, "", "clase hotel creada:", edificio);
            respuesta1.innerHTML = `<h2 class="win">Hospital añadido correctamente</h2>`;

        } else if (seleccion === 'cine') {
            let numeroAsistentes = document.getElementById("numeroAsistentes").value;
            let precioEntrada = document.getElementById("precioEntrada").value;
            let aforoMaximo = document.getElementById("aforoMaximo").value


            let edificio = new Cine(nombre, plantas, superficie, numeroAsistentes, precioEntrada, aforoMaximo);
            edificios.push(edificio);
            console.log("ARRAY EDIFICIOS", edificios, "", "clase hotel creada:", edificio);
            respuesta1.innerHTML = `<h2 class="win">Cine añadido correctamente</h2>`;
        } else {
            respuesta1.innerHTML = `<h2 class="lose">Debes seleccionar un tipo de edificio</h2>`;
        }
    }

}

let mostrarEdificio = () => {
    let nombre = document.getElementById("nombreEdificio").value;
    let edificioEncontrado = edificios.find(edificio => edificio.nombre === nombre);
    let mensaje = ``;

    console.log(edificioEncontrado);
    if (edificioEncontrado instanceof Cine) {
        let costoVigilancia = edificioEncontrado.calcularCostoVigilancia(edificioEncontrado.superficie);
        let proyectarSesion = edificioEncontrado.proyectarSesion(edificioEncontrado.numeroAsistentes, edificioEncontrado.precioEntrada, edificioEncontrado.aforoMaximo);
        mensaje = `Edificio tipo Cine:<br> Nombre: ${edificioEncontrado.nombre},<br>Plantas: ${edificioEncontrado.numeroPlantas} plantas,<br>Superficie: ${edificioEncontrado.superficie} m²,<br>Numero de asistentes: ${edificioEncontrado.numeroAsistentes} asistentes,<br>Precio de la entrada: ${edificioEncontrado.precioEntrada} €€,<br>Aforo Maximo: ${edificioEncontrado.aforoMaximo} personas, <br> Calcular costo de la vigilancia: ${costoVigilancia} y lo que se recaudo por sesion es: ${proyectarSesion}`;
        console.log("cine")
    } else if (edificioEncontrado instanceof Hotel) {
        let servicioHabitaciones = edificioEncontrado.servicioHabitaciones(edificioEncontrado.numeroHabitaciones);
        let costoVigilancia = edificioEncontrado.calcularCostoVigilancia(edificioEncontrado.superficie);
        mensaje = `Edificio tipo Hotel:<br> Nombre: ${edificioEncontrado.nombre},<br>Plantas ${edificioEncontrado.numeroPlantas} plantas,<br>Superficie ${edificioEncontrado.superficie} m²,<br>Numero de habitaciones: ${edificioEncontrado.numeroHabitaciones} habitaciones, <br> Calcular costo de la vigilancia: ${costoVigilancia}, <br> Calcular costo de la servicio: ${servicioHabitaciones}`;
        console.log("hotel")
    } else if (edificioEncontrado instanceof Hospital) {
        let costoVigilancia = edificioEncontrado.calcularCostoVigilancia(edificioEncontrado.superficie);
        let raciones = edificioEncontrado.repartirComida(edificioEncontrado.raciones);
        mensaje = `Edificio tipo Hospital:<br> Nombre: ${edificioEncontrado.nombre}, <br>Plantas ${edificioEncontrado.numeroPlantas} plantas,<br>Superficie ${edificioEncontrado.superficie} m²,<br>Numero de raciones: ${raciones} raciones, <br> y el costo de vigilancia es de : ${costoVigilancia}`;
        console.log("hospital")
    } else {
        mensaje = "No se ha encontrado el edificio con el nombre especificado.";
        console.log("no se ha encontrado")
    }

    document.getElementById("respuesta2").innerHTML = `<p class="win">${mensaje}</p>`;
}


let eliminarEdificio = () => {
    let nombre = document.getElementById("nombreEdificio").value;
    let indice = edificios.findIndex(edificio => edificio.nombre === nombre);

    if (indice !== -1) {
        edificios.splice(indice, 1);
        console.log("ARRAY EDIFICIOS", edificios);
        document.getElementById("respuesta2").innerHTML = `<p class="win">Edificio eliminado correctamente</p>`;
    } else {
        document.getElementById("respuesta2").innerHTML = `<p class="lose">No se ha encontrado el edificio con el nombre especificado.</p>`;
    }
}