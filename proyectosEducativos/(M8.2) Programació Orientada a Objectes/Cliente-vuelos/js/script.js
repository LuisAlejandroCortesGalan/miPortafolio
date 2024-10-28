

let clientes = [];


let crearCliente = () => {
    let clienteComprobado = false;
    let dni = document.getElementById('dni').value;
    let nacionalidad = document.getElementById('nacionalidad').value;
    let edad = document.getElementById('edad').value;
    clientes.forEach(cliente => {
        console.log("clientedni", cliente.dni, "dni", dni)
        if (cliente.dni == dni) {
            document.getElementById('respuesta1').innerHTML = `<p class="win">El cliente con DNI: ${dni} <span class="lose">YA EXISTE</span></p>`;
            document.getElementById('listadoTitulo').style.display = 'none';
            document.getElementById('verClientes').innerHTML = "";
            clienteComprobado = true;
            return;
        }
    });
    if (clienteComprobado) {
        document.getElementById('listadoTitulo').style.display = 'none';
        document.getElementById('verClientes').innerHTML = "";
        return;
    }
    let cliente = new Clientes(dni, nacionalidad, edad);
    clientes.push(cliente);
    document.getElementById('respuesta1').innerHTML = `<p class="win">El cliente con DNI: ${dni} <br> ha sido creado correctamente.</p>`;
    document.getElementById('verClientes').innerHTML = ``;


}

let eliminarCliente = () => {
    let dni = document.getElementById('obtenerDni').value;
    let indice = clientes.findIndex(cliente => cliente.dni === dni);
    let respuesta = document.getElementById('respuesta2');
    if (indice !== -1) {
        respuesta.innerHTML = `<p class="win">El cliente con dni: ${dni} <span class="lose">SE ELIMINÓ</span></p>`;
        document.getElementById('clienteTitulo').style.display = 'none';
        clientes.splice(indice, 1)
    } else {
        respuesta.innerHTML = `<p class="win">El cliente con dni: ${dni} <span class="lose">NO EXISTE</span></p>`;
        document.getElementById('clienteTitulo').style.display = 'none';
    }
}

let verClientes = () =>{
    if (clientes.length > 0) {
        document.getElementById('verClientes').innerHTML = ``;
        for (let i = 0; i < clientes.length; i++) {
            document.getElementById('respuesta1').innerHTML = ``;
            document.getElementById('listadoTitulo').style.display = 'block';
            document.getElementById('verClientes').innerHTML += `<p class="win">DNI: ${clientes[i].dni} <br> Nacionalidad: ${clientes[i].nacionalidad} <br> Edad: ${clientes[i].edad}</p>`;
        }
    } else {
        document.getElementById('respuesta1').innerHTML = ``;
        document.getElementById('listadoTitulo').style.display = 'none';
        document.getElementById('verClientes').innerHTML = `<p class="lose">No hay clientes registrados.</p>`;
    }

}

let verCliente = () =>{
    let dni = document.getElementById('obtenerDni').value;
    let respuesta2 = document.getElementById('respuesta2');

    if (clientes.length === 0) {
        document.getElementById('clienteTitulo').style.display = 'none';
        respuesta2.innerHTML = `<p class="lose">No hay clientes registrados.</p>`;
    } else {
        let clienteEncontrado = false;
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].dni == dni) {
                document.getElementById('clienteTitulo').style.display = 'block';
                respuesta2.innerHTML = `<p class="win">DNI: ${clientes[i].dni} <br> Nacionalidad: ${clientes[i].nacionalidad} <br> Edad: ${clientes[i].edad}</p>`;
                if (clientes[i].vuelo.length > 0) {
                    let vuelosHtml = "<h3>Vuelos del cliente</h3>";
                    clientes[i].vuelo.forEach(vuelo => {
                        vuelosHtml += `<p class="win">VUELO-DNI: ${vuelo.dni} <br> Número de vuelo: ${vuelo.numeroVuelo} <br> Compañia: ${vuelo.compañia} <br> Distancia: ${vuelo.distancia} <br> Co2 Emitido: ${vuelo.co2Emitido}</p>`;
                    });
                    respuesta2.innerHTML += vuelosHtml;
                }
                clienteEncontrado = true;
                break;
            } 
    }
    if (!clienteEncontrado) {
        document.getElementById('clienteTitulo').style.display = 'none';
        respuesta2.innerHTML = `<p class="lose">No hay cliente con el dni ${dni}.</p>`;
    }
}
}

let mostrarAñadirVuelo = () => {
    let dni = document.getElementById('obtenerDni').value;
    let respuesta2 = document.getElementById('respuesta2');
    let oculto = document.getElementsByClassName('oculto');
    let visto = document.getElementsByClassName('visto');

    if (!clientes.length > 0) {
        document.getElementById('clienteTitulo').style.display = 'none';
        respuesta2.innerHTML = `<p class="lose">No hay clientes registrados.</p>`;
    } else {
        let clienteEncontrado = false;
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].dni === dni) {
                oculto[0].style.display = 'flex';
                for (let i = 0; i < oculto.length; i++) {
                    oculto[i].style.display = 'flex';
                }
                for (let i = 0; i < visto.length; i++) {
                    visto[i].style.display = 'none';
                }
                document.getElementById('clienteTitulo').style.display = 'block';
                respuesta2.innerHTML = `<p class="win">Introduce los datos del vuelo</p>`;
                clienteEncontrado = true;
            } 
            
            
            if (!clienteEncontrado) {
                document.getElementById('clienteTitulo').style.display = 'none';
                respuesta2.innerHTML = `<p class="lose">No hay cliente con el dni ${dni}.</p>`;
            }

    }
}
}


let volverAtras = () => {
    let oculto = document.getElementsByClassName('oculto');
    let visto = document.getElementsByClassName('visto');
    document.getElementById('respuesta2').innerHTML = '';
    document.getElementById('clienteTitulo').style.display = 'none';
    oculto[0].style.display = 'none';
    for (let i = 1; i < oculto.length; i++) {
        oculto[i].style.display = 'none';
    }
    for (let i = 0; i < visto.length; i++) {
        visto[i].style.display = 'block';
    }
}


let añadirVuelo = () => {

    let dni = document.getElementById('obtenerDni').value;
    let numeroVuelo = document.getElementById('numeroVuelo').value;
    let compañia = document.getElementById('compañiaCambiar').value;
    let distancia = document.getElementById('distanciaCambiar').value;
    let co2Emitido = document.getElementById('co2Cambiar').value;

    let comprobarDni = clientes.find(cliente => cliente.dni == dni);
    if (comprobarDni) {

        let datosVuelo = {
        dni: dni,
        numeroVuelo: numeroVuelo,
        compañia: compañia,
        distancia: distancia,
        co2Emitido: co2Emitido,
    };

            // Inicializar vuelos si no existe el array
            if (!comprobarDni.vuelo) {
                comprobarDni.vuelo = [];
            }

    
    
    let indiceElegido = clientes.findIndex(cliente => comprobarDni.dni == cliente.dni);

    let comprobarVuelo = comprobarDni.vuelo.find(vuelo => vuelo.numeroVuelo == numeroVuelo);
    
    console.log("comprobarVuelo", comprobarVuelo)
    console.log("numero vuelo", numeroVuelo)
    console.log("comprobar dni", comprobarDni)


    if (comprobarVuelo) {
        console.log("no hay vuelosQ", comprobarVuelo)
        document.getElementById('respuesta2').innerHTML = `<p class="lose">El cliente con el dni ${dni} ya tiene el vuelo ${numeroVuelo} Registrado.</p>`;

    } else {
        agregarVueloAlaClase(indiceElegido, datosVuelo);
    };

    } else {
        document.getElementById('clienteTitulo').style.display = 'none';
        document.getElementById('respuesta2').innerHTML = `<p class="lose">No hay cliente con el dni ${dni}.</p>`;
        return;
    }
}

let agregarVueloAlaClase = (indice, vuelo) => {
    if (clientes[indice]) {
        let cliente = clientes[indice];

        if (!cliente.vuelo) {
            cliente.vuelo = [];
        }
        cliente.vuelo.push(vuelo);
        document.getElementById('respuesta2').innerHTML = `<p class="win">Vuelo añadido!! </p>`;
    }
}

let huellaCarbono = () => {
    let dni = Number(document.getElementById('obtenerDni').value.trim());  
    let vueloEncontrado = false; 
    let respuesta = document.getElementById('respuesta2');
    let mensaje = ``;

    // Validación de DNI: que no sea vacío, null o no numérico
    if (dni === "" || isNaN(dni) || dni === 0) {
        respuesta.innerHTML = `<p class="lose">Por favor, ingresa un DNI válido.</p>`;
        return;
    }

    // Validación si no hay clientes registrados
    if (clientes.length === 0) {
        document.getElementById('clienteTitulo').style.display = 'none';
        respuesta.innerHTML = `<p class="lose">No hay clientes registrados.</p>`;
        return;
    }
    let co2EmitidoTotal = 0;
    let total = 0;
    // Buscar vuelos asociados al DNI ingresado
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].dni == dni) { 
            // Cliente encontrado
            vueloEncontrado = true;
            if (!clientes[i].vuelo || clientes[i].vuelo.length === 0) {
                document.getElementById('clienteTitulo').style.display = 'none';
                mensaje = `<p class="lose">El cliente ${clientes[i].dni} no tiene vuelos registrados.</p>`;
            } else {
                document.getElementById('clienteTitulo').style.display = 'none';
                for (let j = 0; j < clientes[i].vuelo.length; j++) {
                    co2EmitidoTotal += Number(clientes[i].vuelo[j].co2Emitido);
                }
                total = co2EmitidoTotal * 5; 
                mensaje = `<p class="win">La huella de carbono del cliente ${clientes[i].dni} es:</p><p class="lose">${co2EmitidoTotal}</p> <br> <p class="lose">La compensación total de este cliente es de: </p><p class="win">${total}€</p>`;
                vueloEncontrado = true;
            }
            break; 
        }
    }

    // Si no se encontraron vuelos, mostrar mensaje
    if (!vueloEncontrado) {
        document.getElementById('clienteTitulo').style.display = 'none';
        mensaje = `<p class="lose">No se encontraron clientes para el DNI ${dni}.</p>`;
    }

    // Mostrar el mensaje final
    respuesta.innerHTML = mensaje;
}


let huellaCarbonoTodos = () => {
    let respuesta1 = document.getElementById('respuesta1');
    respuesta1.innerHTML = ``;
    let totalCo2 = [];
    let suma = 0;

    if (!clientes.length) {
        respuesta1.innerHTML = `<p class="lose">No hay clientes registrados.</p>`;
        document.getElementById('clienteTitulo').style.display = 'none';
        return;
    } 
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].vuelo && clientes[i].vuelo.length > 0) {
            for (let j = 0; j < clientes[i].vuelo.length; j++) {
                totalCo2.push(Number(clientes[i].vuelo[j].co2Emitido));
        }
    }
}

if (totalCo2.length === 0) {
    respuesta1.innerHTML = `<p class="lose">No hay vuelos registrados para los clientes.</p>`;
    return;
}

    for (let i = 0; i < totalCo2.length; i++) {
        suma += Number(totalCo2[i]);
    }
    let total = suma / Number(totalCo2.length);
    let precio = 5 * suma;
    total = total.toFixed(2);

    respuesta1.innerHTML = `<p class="win">La huella de carbono MEDIA de todos los clientes es:</p><p class="lose">${total}</p> <br> <p class="lose">La compensación total de los clientes es de: </p><p class="win">${precio}€</p>`;

}

let mediaEdad = () => {
    let respuesta1 = document.getElementById('respuesta1');
    respuesta1.innerHTML = ``;
    document.getElementById('listadoTitulo').style.display = 'none';
    let edades = [];
    let suma = 0;
    let hayMayores = false;
    if (!clientes.length) {
        respuesta1.innerHTML = `<p class="lose">No hay clientes registrados.</p>`;
        return;
    } 
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].edad > 18) {
            edades.push(Number(clientes[i].edad));
            suma += Number(clientes[i].edad);
            hayMayores = true;
        }
    }
    if (!hayMayores) {
        respuesta1.innerHTML = `<p class="lose">No hay clientes mayores de 18 años.</p>`;
        return;
    }

    let total = suma / edades.length;
    total = total.toFixed(2);

    respuesta1.innerHTML = `<p class="win">La media de edades de los adultos es : ${total}</p>`;
    
}














































// let cliente1 = new Cliente('123456789A', 18, 'Peruano', 80);
// let cliente2 = new Cliente('987654321Z', 81, 'Ruso', 100)

// let clientes = [cliente1, cliente2];


// function verAtributo() {
//     let mostrar = document.getElementById('respuesta1');
//     let cliente = document.getElementById('clientes').value;
//     let atributo = document.getElementById('atributos').value;
//     let clienteElegido = clientes[cliente]


//     switch (atributo) {
//         case 'dni':
//             mostrar.innerHTML = `<p class="win">El DNI  es: ${clienteElegido.getDni()}</p>`;
//             break;
//         case 'edad':
//             mostrar.innerHTML = `<p class="win">La edad es: ${clienteElegido.getEdad()}</p>`;
//             break;
//         case 'nacionalidad':
//             mostrar.innerHTML = `<p class="win">La nacionalidad es: ${clienteElegido.getNacionalidad()}</p>`;
//             break;
//         case 'vuelos':
//             mostrar.innerHTML = `<p class="win">Los vuelos son: ${clienteElegido.getVuelos()}</p>`;
//         default:
//             break;
//     }
// }

// function cambiarAtributo() {
//     let mostrar = document.getElementById('respuesta2');
//     let cliente = document.getElementById('clientesCambiar').value;
//     let atributo = document.getElementById('atributosCambiar').value;
//     let nuevoAtributo = document.getElementById('nuevoAtributo').value;
//     let clienteElegido = clientes[cliente];

//     switch (atributo) {
//         case 'dni':
//             clienteElegido.setDni(nuevoAtributo);
//             mostrar.innerHTML = `<p class="win">El DNI nuevo introducido es ${nuevoAtributo}</p>`
//             break;
//         case 'edad':
//             clienteElegido.setEdad(nuevoAtributo);
//             mostrar.innerHTML = `<p class="win">La edad nueva introducida es ${nuevoAtributo}</p>`
//             break;
//         case 'nacionalidad':
//             clienteElegido.setNacionalidad(nuevoAtributo);
//             mostrar.innerHTML = `<p class="win">La nacionalidad nueva introducida es ${nuevoAtributo}</p>`
//             break;
//         case 'vuelos':
//             clienteElegido.setVuelos(nuevoAtributo);
//             mostrar.innerHTML = `<p class="win">Los vuelos nuevos introducidos son ${nuevoAtributo}</p>`
//             break;
//         default:
//             break;
//     }
// }


// function calcularCo2() {
//     let mostrar = document.getElementById('respuesta3');
//     let cliente = document.getElementById('clientesCo2').value;
//     let clienteElegido = clientes[cliente];

//     clienteElegido.calcularCo2();
//     mostrar.innerHTML = `<p class="win">El calculo de Co2 de este cliente es : ${clienteElegido.calcularCo2()}</p>`
// }

// function ver() {
//     let mostrar = document.getElementById('respuesta4');
//     let cliente = document.getElementById('ver').value;
//     let clienteElegido = clientes[cliente];

//     clienteElegido.toString();
//     mostrar.innerHTML = `<p class="win">Los datos del Cliente son: ${clienteElegido}</p>`
// }




























// // ========================  ZONA VUELOS ========================


// let vuelos = [];

// function darAlta() {
//     let numeroVuelo = document.getElementById('numeroVuelo').value;
//     let distancia = document.getElementById('distancia').value;
//     let compañia = document.getElementById('compañia').value;
//     let numeroPasajeros = document.getElementById('numeroPasajeros').value;
//     let numeroMotores = document.getElementById('numeroMotores').value;
//     let respuesta = document.getElementById('respuesta1');
//     let comprobarVuelo = false;

//     comprobarVuelo = vuelos.some(vuelo => vuelo.numeroVuelo === numeroVuelo ? true : false)  // Si el numeroVuelo ya existe, se sale del bucle y no se añade el vuelo) 
//     if (comprobarVuelo) {
//         respuesta.innerHTML = '<p class="lose">El Numero de vuelo ya existe</p>';
//     } else {
//         console.log(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores);
//         let vuelo = new Vuelos(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores);
//         console.log("ver vuelo alta", vuelo);
//         vuelos.push(vuelo);

//         respuesta.innerHTML = `<p class="win">Vuelo dado de alta con éxito: <br> Numero de Vuelo: ${numeroVuelo} <br> Distancia: ${distancia} km <br> Compañía: ${compañia} <br> Número de Pasajeros: ${numeroPasajeros} <br> Número de Motores: ${numeroMotores}</p>`;
//         console.log(vuelos);
//         for (let i = 0; i < vuelos.length; i++) {
//             let huella = vuelos[i].calcularHuellaCarbono();
//             respuesta.innerHTML += `<p class="win">La huella de carbono del vuelo numero: ${vuelos[i].numeroVuelo} es de: ${huella} toneladas de CO2</p>`;        
//         }
//     }
    
// }

// function comprobarVuelo() {
//     let numeroVuelo = document.getElementById('numeroVueloVer').value;
//     let respuesta = document.getElementById('respuesta2');
//     let comprobarVuelo = false;
//     comprobarVuelo = vuelos.some(vuelo => vuelo.numeroVuelo === numeroVuelo ? true : false)  
//     console.log(comprobarVuelo);
//     if (comprobarVuelo) {
//         respuesta.innerHTML = `<p class="win">El Vuelo existe, Editalo o Eliminalo!</p>`;
//     } else {
//         respuesta.innerHTML = `<p class="lose">El Vuelo no existe!</p>`;
//     }
// }

// function comprobarVuelo1() {
//     let numeroVuelo = document.getElementById('numeroVueloVer').value;
//     let respuesta = document.getElementById('respuesta2');
//     let comprobarVuelo = false;
//     comprobarVuelo = vuelos.some(vuelo => vuelo.numeroVuelo === numeroVuelo ? true : false) 
//     console.log(comprobarVuelo);
//     if (comprobarVuelo) {
//         respuesta.innerHTML = `<p class="win">El Vuelo existe! <span class="lose">EDITALO</span></p>`;
//         let oculto = document.getElementsByClassName('oculto');
//         let visto = document.getElementsByClassName('visto');
//         oculto[0].style.display = 'flex';
//         for (let i = 1; i < oculto.length; i++) {
//             oculto[i].style.display = 'flex';
//         }
//         for (let i = 0; i < visto.length; i++) {
//             visto[i].style.display = 'none';
//         }

//     } else {
//         respuesta.innerHTML = `<p class="lose">El Vuelo no existe!</p>`;
//     }
// }


// function cambiarVuelo() {
//     let numeroVuelo = document.getElementById('numeroVueloVer').value;
//     let distancia = document.getElementById('distanciaCambiar').value;
//     let compañia = document.getElementById('compañiaCambiar').value;
//     let numeroPasajeros = document.getElementById('numeroPasajerosCambiar').value;
//     let numeroMotores = document.getElementById('numeroMotoresCambiar').value;
//     let respuesta = document.getElementById('respuesta2');
//     let vueloEncontrado = vuelos.find(vuelo => vuelo.numeroVuelo === numeroVuelo);
//     console.log("vuelo encontrado array vuelos", vueloEncontrado);
//     if (vueloEncontrado) {
//         let vueloCambiado = vueloEncontrado.modificarVuelo(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores);
//         console.log("vuelo cambiado con funcion modificarvuelo", vueloCambiado)

//         respuesta.innerHTML = `<p class="win">Vuelo modificado con éxito: <br> Numero de Vuelo: ${numeroVuelo} <br> Distancia: ${distancia} km <br> Compañía: ${compañia} <br> Número de Pasajeros: ${numeroPasajeros} <br> Número de Motores: ${numeroMotores}</p>`;
//     } else {
//         respuesta.innerHTML = `<p class="lose">El Vuelo no existe!</p>`;
//     }


//     console.log("ver vuelo", vuelos);
// }

// function eliminarVuelo() {
//     let numeroVuelo = document.getElementById('numeroVueloVer').value;
//     let indice = vuelos.findIndex(vuelo => vuelo.numeroVuelo === numeroVuelo);
//     let respuesta = document.getElementById('respuesta2');
//     console.log("vuelos antes", vuelos);
//     if (indice !== -1) {
//         respuesta.innerHTML = `<p class="win">El vuelo se numero: ${numeroVuelo} <span class="lose">SE ELIMINÓ</span></p>`;
//         vuelos.splice(indice, 1)
//     } else{
//         respuesta.innerHTML = `<p class="win">El vuelo se numero: ${numeroVuelo} <span class="lose">NO EXISTE</span></p>`;
//     }
//     console.log("numero de indice", indice);
//     console.log("numero de vuelos", numeroVuelo);
//     console.log("vuelos despues", vuelos);
// }

// function mirar() {
//     document.getElementById('respuesta2').innerHTML = ``;
//     if (vuelos.length > 0) {
//         for (let i = 0; i < vuelos.length; i++) {
//             document.getElementById('respuesta2').innerHTML += `<p class="win">El vuelo numero: ${vuelos[i].numeroVuelo} <br>Con distancia: ${vuelos[i].distancia} Con la compañia: ${vuelos[i].compañia}, numero de pasasjeros: ${vuelos[i].numeroPasajeros} y numero de motores: ${vuelos[i].numeroMotores}</p> <br>`
//             let huella = vuelos[i].calcularHuellaCarbono();
//             console.log("calcularHuellaCarbono", huella);
//             document.getElementById('respuesta2').innerHTML += `<p class="win">La huella de carbono del vuelo numero: ${vuelos[i].numeroVuelo} es de: ${huella} toneladas de CO2</p>`;        
//         }
//     } else {
//         document.getElementById('respuesta2').innerHTML = `<p class="lose">No hay vuelos guardados!</p>`;
//     }
// }

// function volverAtras() {
//     let oculto = document.getElementsByClassName('oculto');
//     let visto = document.getElementsByClassName('visto');
//     oculto[0].style.display = 'none';
//     for (let i = 1; i < oculto.length; i++) {
//         oculto[i].style.display = 'none';
//     }
//     for (let i = 0; i < visto.length; i++) {
//         visto[i].style.display = 'block';
//     }
// }
