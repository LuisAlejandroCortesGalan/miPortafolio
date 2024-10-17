class Cliente {

    constructor(dni, edad, nacionalidad, vuelos) {
        this.dni = dni;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.vuelos = vuelos;
    }

    // Métodos GET

    getDni() {
        return this.dni;
    }

    getEdad() {
        return this.edad;
    }

    getNacionalidad() {
        return this.nacionalidad;
    }

    getVuelos() {
        return this.vuelos;
    }

    // Métodos SET

    setDni(dni) {
        this.dni = dni;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    setNacionalidad(nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    setVuelos(vuelos) {
        this.vuelos = vuelos;
    }

    // METODOS 

    calcularCo2() {
        let tones = 0.5;
        let calculo = this.vuelos * tones;
        return calculo;
    }

    toString() {
        return `"DNI: ${this.dni} <br>Edad: ${this.edad} <br>Nacionalidad: ${this.nacionalidad} <br>Vuelos: ${this.vuelos}`;
    }
}