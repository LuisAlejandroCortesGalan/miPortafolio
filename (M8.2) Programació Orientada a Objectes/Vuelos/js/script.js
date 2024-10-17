let vuelos = [];

function darAlta() {
    let numeroVuelo = document.getElementById('numeroVuelo').value;
    let distancia = document.getElementById('distancia').value;
    let compañia = document.getElementById('compañia').value;
    let numeroPasajeros = document.getElementById('numeroPasajeros').value;
    let numeroMotores = document.getElementById('numeroMotores').value;
    let respuesta = document.getElementById('respuesta1');
    let comprobarVuelo = false;

    comprobarVuelo = vuelos.some(vuelo => vuelo.numeroVuelo === numeroVuelo ? true : false)  // Si el numeroVuelo ya existe, se sale del bucle y no se añade el vuelo) 
    if (comprobarVuelo) {
        respuesta.innerHTML = '<p class="lose">El Numero de vuelo ya existe</p>';
    } else {
        console.log(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores);
        let vuelo = new Vuelos(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores);
        vuelos.push(vuelo);
        
        respuesta.innerHTML = `<p class="win">Vuelo dado de alta con éxito: <br> Numero de Vuelo: ${numeroVuelo} <br> Distancia: ${distancia} km <br> Compañía: ${compañia} <br> Número de Pasajeros: ${numeroPasajeros} <br> Número de Motores: ${numeroMotores}</p>`;
        console.log(vuelos);
    }
}

function comprobarVuelo() {
    let numeroVuelo = document.getElementById('numeroVueloCambiar').value;
    let respuesta = document.getElementById('respuesta3');
    let comprobarVuelo = false;
    comprobarVuelo = vuelos.some(vuelo => vuelo.numeroVuelo === numeroVuelo ? true : false)  // Si el numeroVuelo ya existe, se sale del bucle y no se añade el vuelo) 
    console.log(comprobarVuelo);
    if (comprobarVuelo) {
        respuesta.innerHTML = `<p class="win">El Vuelo existe!</p>`;
        let oculto = document.getElementsByClassName('oculto');
        let visto = document.getElementsByClassName('visto');
        oculto[0].style.display = 'block';
        for (let i = 1; i < oculto.length; i++) {
            oculto[i].style.display = 'flex';
        }
        for (let i = 0; i < visto.length; i++) {
            visto[i].style.display = 'none';
        }
    } else {
        respuesta.innerHTML = `<p class="lose">El Vuelo no existe!</p>`;
    }
}

function comprobarVuelo1() {
    let numeroVuelo = document.getElementById('numeroVueloVer').value;
    let respuesta = document.getElementById('respuesta2');
    let comprobarVuelo = false;
    comprobarVuelo = vuelos.some(vuelo => vuelo.numeroVuelo === numeroVuelo ? true : false)  // Si el numeroVuelo ya existe, se sale del bucle y no se añade el vuelo) 
    console.log(comprobarVuelo);
    if (comprobarVuelo) {
        respuesta.innerHTML = `<p class="win">El Vuelo existe! <span class="lose">EDITALO</span></p>`;
        let oculto = document.getElementsByClassName('oculto');
        let visto = document.getElementsByClassName('visto');
        oculto[0].style.display = 'flex';
        for (let i = 1; i < oculto.length; i++) {
            oculto[i].style.display = 'flex';
        }
        for (let i = 0; i < visto.length; i++) {
            visto[i].style.display = 'none';
        }
        let oculto1 = document.getElementsByClassName('oculto1');
        let visto1 = document.getElementsByClassName('visto1');
        for (let i = 1; i < oculto.length; i++) {
            oculto1[i].style.display = 'flex';
        }

        for (let i = 0; i < visto.length; i++) {
            visto1[i].style.display = 'none';
        }
    } else {
        respuesta.innerHTML = `<p class="lose">El Vuelo no existe!</p>`;
    }
}


function cambiarVuelo() {
    let numeroVuelo = document.getElementById('numeroVueloVer').value;
    let distancia = document.getElementById('distanciaCambiar').value;
    let compañia = document.getElementById('compañiaCambiar').value;
    let numeroPasajeros = document.getElementById('numeroPasajerosCambiar').value;
    let numeroMotores = document.getElementById('numeroMotoresCambiar').value;
    let respuesta = document.getElementById('respuesta2');
    let vueloEncontrado = vuelos.find(vuelo => vuelo.numeroVuelo === numeroVuelo)
    console.log("vuelo encontrado", vueloEncontrado);
    if (vueloEncontrado) {
        vueloEncontrado.modificarVuelo(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores);
        respuesta.innerHTML = `<p class="win">Vuelo modificado con éxito: <br> Numero de Vuelo: ${numeroVuelo} <br> Distancia: ${distancia} km <br> Compañía: ${compañia} <br> Número de Pasajeros: ${numeroPasajeros} <br> Número de Motores: ${numeroMotores}</p>`;
    } else {
        respuesta.innerHTML = `<p class="lose">El Vuelo no existe!</p>`;
    }

    console.log("Vuelos modificados", vuelos)
}

function eliminarVuelo() {
    let numeroVuelo = document.getElementById('numeroVueloVer').value;
    let indice = vuelos.findIndex(vuelo => vuelo.numeroVuelo === numeroVuelo);
    let respuesta = document.getElementById('respuesta2');
    console.log("vuelos antes", vuelos);
    if (indice !== -1) {
        respuesta.innerHTML = `<p class="win">El vuelo se numero: ${numeroVuelo} <span class="lose">SE ELIMINÓ</span></p>`;
        vuelos.splice(indice, 1)
    } else{
        respuesta.innerHTML = `<p class="win">El vuelo se numero: ${numeroVuelo} <span class="lose">NO EXISTE</span></p>`;
    }
    console.log("numero de indice", indice);
    console.log("numero de vuelos", numeroVuelo);
    console.log("vuelos despues", vuelos);
}

function mirar() {
    if (vuelos.length > 0) {
        for (let i = 0; i < vuelos.length; i++) {
            document.getElementById('respuesta2').innerHTML += `<p class="win">El vuelo numero: ${vuelos[i].numeroVuelo} <br>Con distancia: ${vuelos[i].distancia} Con la compañia: ${vuelos[i].compañia}, numero de pasasjeros: ${vuelos[i].numeroPasajeros} y numero de motores: ${vuelos[i].numeroMotores}</p> <br>`
        }
    } else {
        document.getElementById('respuesta2').innerHTML = `<p class="lose">No hay vuelos guardados!</p>`;
    }
}

function volverAtras() {
    let oculto = document.getElementsByClassName('oculto');
    let visto = document.getElementsByClassName('visto');
    oculto[0].style.display = 'none';
    for (let i = 1; i < oculto.length; i++) {
        oculto[i].style.display = 'none';
    }
    for (let i = 0; i < visto.length; i++) {
        visto[i].style.display = 'block';
    }
}