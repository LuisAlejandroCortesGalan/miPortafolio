class Clientes {

    constructor(dni, nacionalidad, edad) {
        this.dni = dni;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
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


    // Métodos adicionales

    precioCo2(co2Emitido) {
        return co2Emitido * 5;
    }


}