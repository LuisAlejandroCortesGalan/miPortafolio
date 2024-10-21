let array1 = [];
let array2 = [];

let mostrar = () => {
    let respuesta = document.getElementById("respuesta");
    let num1 = parseInt(document.getElementById("array1").value);
    let num2 = parseInt(document.getElementById("array2").value);

    if (isNaN(num1) || isNaN(num2)) {
        respuesta.innerHTML = `<p class="lose">Ingresa valores numéricos Validos!</p>`;
        return;
    } 
    array1.push(num1);
    array2.push(num2);
    
    if (array1.length === array2.length) {
        let resultado = combinar(array1, array2);
        respuesta.innerHTML = `<p class="win">El array combinado es <br> [ ${resultado} ]</p> `;
    } else if (array1.length > array2.length){
        respuesta.innerHTML = `<p class="lose">El array 1 es mas grande que el array 2</p>`;
    } else {
        respuesta.innerHTML = `<p class="lose">El array 2 es mas grande que el array 1</p>`;
    }
}


let combinar = (array1, array2) => {
    let arrayCombinado = [];
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] % 2 == 0 && array2[i] % 2 == 0) {
                arrayCombinado.push(array1[i] + array2[i]);
            } else if (array1[i] % 2 != 0 && array2[i] % 2 != 0) {
                arrayCombinado.push(array1[i] * array2[i]);
            } else if (array1[i] % 2 == 0 && array2[i] % 2 != 0) {
                arrayCombinado.push(array2[i] - array1[i]);
            } else if (array1[i] % 2 != 0 && array2[i] % 2 == 0) {
                arrayCombinado.push(array1[i] - array2[i]);
            }
        }
        
        let arrayCombinadoPositivo = arrayCombinado.map(num => num < 0 ?  num * -1 : num)
        arrayCombinadoPositivo = arrayCombinadoPositivo.join(', ');
        
        return arrayCombinadoPositivo;
    
}

let reset = () => {
    location.reload(); 
} 