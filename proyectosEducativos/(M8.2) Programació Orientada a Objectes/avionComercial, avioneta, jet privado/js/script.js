
let respuesta2 = document.getElementById('respuesta2');
let respuesta3 = document.getElementById('respuesta3');

let aviones = [];



document.addEventListener("click", function (e) {

    e.preventDefault(); // evita que el enlace se abra en blanco
    let select = document.getElementById('aviones').value;
    let avioneta = document.getElementsByClassName('formOcultoAvioneta')[0];
    let avionComercial = document.getElementsByClassName('formOcultoAvionComercial')[0];
    let jetPrivado = document.getElementsByClassName('formOcultoJetPrivado')[0];

    switch (select) {

        case "avionComercial":
            avionComercial.style.display = 'flex';
            avioneta.style.display = 'none';
            jetPrivado.style.display = 'none';

            break;

        case "avioneta":
            avioneta.style.display = 'flex';
            avionComercial.style.display = 'none';
            jetPrivado.style.display = 'none';

            break;

        case "jetPrivado":
            jetPrivado.style.display = 'flex';
            avioneta.style.display = 'none';
            avionComercial.style.display = 'none';

            break;

        default:
            break;
    }
})

function altaAvionComercial() {
    let verAvionComercial;

    let numeroAvion = document.getElementById("numAvionComercial").value;
    let marcaAvion = document.getElementById("marcaComercial").value;
    let modeloAvion = document.getElementById("modeloComercial").value;
    let cargaAvion = document.getElementById("cargaComercial").value;
    let longitudAvion = document.getElementById("longitudComercial").value;
    let numeroPersonasComercial = document.getElementById("numeroPersonasComercial").value;

    let nuevoAvionComercial = new AvionComercial(numeroAvion, marcaAvion, modeloAvion, cargaAvion, longitudAvion, numeroPersonasComercial);
    aviones.push(nuevoAvionComercial);
    console.log(nuevoAvionComercial);

    verAvionComercial = `El Avion comercial con numero: ${nuevoAvionComercial.numeroAvion},<br> marca: ${nuevoAvionComercial.marca},<br> modelo: ${nuevoAvionComercial.modelo}, <br> carga: ${nuevoAvionComercial.carga}, <br> longitud: ${nuevoAvionComercial.longitud}, <br> numero de personas: ${nuevoAvionComercial.numeroPersonas} <br>`;

    document.getElementById('respuesta1').innerHTML = `<h2 class="win">Avión Comercial añadido correctamente</h2>`;
    document.getElementById('respuesta1').innerHTML += `<p class="lose">${verAvionComercial}</p>`;
}

function altaAvioneta() {
    let verAvioneta;

    let numeroAvion = document.getElementById("numAvioneta").value;
    let marcaAvion = document.getElementById("marcaAvioneta").value;
    let modeloAvion = document.getElementById("modeloAvioneta").value;
    let cargaAvion = document.getElementById("cargaAvioneta").value;
    let longitudAvion = document.getElementById("longitudAvioneta").value;
    let numeroHelicesAvioneta = document.getElementById("numeroHelicesAvioneta").value;

    let nuevoAvioneta = new Avioneta(numeroAvion, marcaAvion, modeloAvion, cargaAvion, longitudAvion, numeroHelicesAvioneta);
    aviones.push(nuevoAvioneta);
    console.log(nuevoAvioneta);

    verAvioneta = `La avioneta con numero: ${nuevoAvioneta.numeroAvion},<br> marca: ${nuevoAvioneta.marca},<br> modelo: ${nuevoAvioneta.modelo}, <br> carga: ${nuevoAvioneta.carga}, <br> longitud: ${nuevoAvioneta.longitud}, <br> numero de helices: ${nuevoAvioneta.numeroHelices} <br>`;

    document.getElementById('respuesta2').innerHTML = `<h2 class="win">Avióneta añadida correctamente</h2>`;
    document.getElementById('respuesta2').innerHTML += `<p class="lose">${verAvioneta}</p>`;
}

function altaJetPrivado() {
    let verJet;

    let numeroAvion = document.getElementById("numAvionJet").value;
    let marcaAvion = document.getElementById("marcaJet").value;
    let modeloAvion = document.getElementById("modeloJet").value;
    let cargaAvion = document.getElementById("cargaJet").value;
    let longitudAvion = document.getElementById("longitudJet").value;
    let numeroPersonasJet = document.getElementById("numeroPersonasJet").value;

    let jetPrivado = new JetPrivado(numeroAvion, marcaAvion, modeloAvion, cargaAvion, longitudAvion, numeroPersonasJet);
    aviones.push(jetPrivado);
    console.log(jetPrivado);

    verJet = `La avioneta con numero: ${jetPrivado.numeroAvion},<br> marca: ${jetPrivado.marca},<br> modelo: ${jetPrivado.modelo}, <br> carga: ${jetPrivado.carga}, <br> longitud: ${jetPrivado.longitud}, <br> numero de personas: ${jetPrivado.numeroPersonasJet} <br>`;
    document.getElementById('respuesta3').innerHTML = `<h2 class="win">Jet privado añadido correctamente</h2>`;
    document.getElementById('respuesta3').innerHTML += `<p class="lose">${verJet}</p>`;
}



let verAvion = () => {
    let numeroAvionIntroducido = Number(document.getElementById('obtenerNumeroAvion').value);
    console.log("Número de avión introducido:", numeroAvionIntroducido);

    let buscarAvion = aviones.find(avion => avion.numeroAvion == numeroAvionIntroducido);
    console.log("Avión encontrado:", buscarAvion);

    if (buscarAvion) {
        // Determina el tipo de avión
        let tipoAvion = '';
        if (buscarAvion instanceof AvionComercial) {
            tipoAvion = 'Comercial';
        } else if (buscarAvion instanceof Avioneta) {
            tipoAvion = 'Avioneta';
        } else if (buscarAvion instanceof JetPrivado) {
            tipoAvion = 'Jet Privado';
        }

        // Mensaje inicial sobre el avión encontrado
        let mensaje = `El avión con número ${buscarAvion.numeroAvion}, de tipo ${tipoAvion} ha sido encontrado`;
        document.getElementById('respuesta4').innerHTML = `<h2 class="win">${mensaje}</h2>`;
        document.getElementById('respuesta4').innerHTML += `<p class="win">${buscarAvion.toString()}</p>`;
        document.getElementById('respuesta4').innerHTML += `<p class="win">El combustible necesario es:${buscarAvion.calcularCombustible(buscarAvion.longitud, buscarAvion.carga)} Litros</p>`;


        // Llamadas a funciones específicas dependiendo del tipo de avión
        if (buscarAvion instanceof AvionComercial) {
            let limpieza = buscarAvion.calcularLimpieza(buscarAvion.longitud);
            let costoComida = buscarAvion.calcularCostoComida(buscarAvion.numeroPersonas);
            document.getElementById('respuesta4').innerHTML += `<p class="win">Limpieza: ${limpieza} minutos</p>`;
            document.getElementById('respuesta4').innerHTML += `<p class="win">Costo de Comida: $${costoComida}</p>`;
        } else if (buscarAvion instanceof Avioneta) {
            let limpieza = buscarAvion.calcularLimpieza(buscarAvion.longitud);
            let distancia = buscarAvion.calcularDistancia(buscarAvion.numeroHelices);
            document.getElementById('respuesta4').innerHTML += `<p class="win">Limpieza: ${limpieza} minutos</p>`;
            document.getElementById('respuesta4').innerHTML += `<p class="win">Distancia: ${distancia} km</p>`;
        } else if (buscarAvion instanceof JetPrivado) {
            let limpieza = buscarAvion.calcularLimpieza(buscarAvion.longitud);
            let costoReserva = buscarAvion.calcularCostoReserva(buscarAvion.numeroPersonasJet);
            document.getElementById('respuesta4').innerHTML += `<p class="win">Limpieza: ${limpieza} minutos</p>`;
            document.getElementById('respuesta4').innerHTML += `<p class="win">Costo de Reserva: ${costoReserva}</p>`;
        }
    } else {
        document.getElementById('respuesta4').innerHTML = `<p class="lose">No se encontró ningún avión</p>`;
    }
}



let eliminarAvion = () => {
    let numeroAvionIntroducido = Number(document.getElementById('obtenerNumeroAvion').value);
    console.log("Número de avión introducido:", numeroAvionIntroducido);

    let buscarAvion = aviones.find(avion => avion.numeroAvion == numeroAvionIntroducido);
    console.log("Avión encontrado:", buscarAvion);

    let indice = aviones.indexOf(buscarAvion);

    console.log("INDICE", indice);
    
    if (buscarAvion) {
        let borrado = aviones.splice(indice, 1);

        let mensaje = `Se borró el avion ${numeroAvionIntroducido}`;
        document.getElementById('respuesta4').innerHTML = `<h2 class="lose">${mensaje}</h2>`;
        document.getElementById('respuesta4').innerHTML += `<p class="lose">${buscarAvion.toString()}</p>`;
    } else {
        document.getElementById('respuesta4').innerHTML = `<p class="lose">No se encontró ningún avión</p>`;
    }
}

