
//EJEMPLO DE CLIENTES
let cliente1 = new Cliente('123456789A', 18, 'Peruano', 80);
let cliente2 = new Cliente('987654321Z', 81, 'Ruso', 100)
//ARRAY DE CLIENTES
let clientes = [cliente1, cliente2];

// VEMOS EL ATRIBUTO CON EL METODO GET
function verAtributo() {
    let mostrar = document.getElementById('respuesta1');
    let cliente = document.getElementById('clientes').value;
    let atributo = document.getElementById('atributos').value;
    let clienteElegido = clientes[cliente]

    switch (atributo) {
        case 'dni':
            mostrar.innerHTML = `<p class="win">El DNI  es: ${clienteElegido.getDni()}</p>`;
            break;
        case 'edad':
            mostrar.innerHTML = `<p class="win">La edad es: ${clienteElegido.getEdad()}</p>`;
            break;
        case 'nacionalidad':
            mostrar.innerHTML = `<p class="win">La nacionalidad es: ${clienteElegido.getNacionalidad()}</p>`;
            break;
        case 'vuelos':
            mostrar.innerHTML = `<p class="win">Los vuelos son: ${clienteElegido.getVuelos()}</p>`;
        default:
            break;
    }
}

// CAMBIAMOS EL ATRIBUTO ELEGIDO CON EL METODO SET
function cambiarAtributo() {
    let mostrar = document.getElementById('respuesta2');
    let cliente = document.getElementById('clientesCambiar').value;
    let atributo = document.getElementById('atributosCambiar').value;
    let nuevoAtributo = document.getElementById('nuevoAtributo').value;
    let clienteElegido = clientes[cliente];

    switch (atributo) {
        case 'dni':
            clienteElegido.setDni(nuevoAtributo);
            mostrar.innerHTML = `<p class="win">El DNI nuevo introducido es ${nuevoAtributo}</p>`
            break;
        case 'edad':
            clienteElegido.setEdad(nuevoAtributo);
            mostrar.innerHTML = `<p class="win">La edad nueva introducida es ${nuevoAtributo}</p>`
            break;
        case 'nacionalidad':
            clienteElegido.setNacionalidad(nuevoAtributo);
            mostrar.innerHTML = `<p class="win">La nacionalidad nueva introducida es ${nuevoAtributo}</p>`
            break;
        case 'vuelos':
            clienteElegido.setVuelos(nuevoAtributo);
            mostrar.innerHTML = `<p class="win">Los vuelos nuevos introducidos son ${nuevoAtributo}</p>`
            break;
        default:
            break;
    }
}

// LLAMAMOS A EL METODO CALCULAR CO2
function calcularCo2() {
    let mostrar = document.getElementById('respuesta3');
    let cliente = document.getElementById('clientesCo2').value;
    let clienteElegido = clientes[cliente];

    clienteElegido.calcularCo2();
    mostrar.innerHTML = `<p class="win">El calculo de Co2 de este cliente es : ${clienteElegido.calcularCo2()}</p>`
}

// LLAMAMOS A EL METODO TOSTRING
function ver() {
    let mostrar = document.getElementById('respuesta4');
    let cliente = document.getElementById('ver').value;
    let clienteElegido = clientes[cliente];

    clienteElegido.toString();
    mostrar.innerHTML = `<p class="win">Los datos del Cliente son: ${clienteElegido}</p>`
}