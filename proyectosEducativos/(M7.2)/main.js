function verificarNumeroPrimo() {
    let numero = parseInt(prompt("Escoge un número: "), 10);  // Convertir el input a número entero
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        return;
    }
    
    let esPrimo = false;
    if (numero > 1) {
        esPrimo = esNumeroPrimo(numero);  // Llamada a la función para verificar si es primo
    }
    alert(esPrimo);
}

function esNumeroPrimo(numero) {
    let primo = true;
    let divisor = 2;
    
    // Verificamos divisibilidad del número por los valores menores a él
    while (primo && divisor < numero) {
        if (numero % divisor === 0) {
            primo = false;
        }
        divisor++;
    }
    return primo;
}