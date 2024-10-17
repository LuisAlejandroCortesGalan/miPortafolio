class Vuelos {

    constructor(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores) {
        this.numeroVuelo = numeroVuelo;
        this.distancia = distancia;
        this.compañia = compañia;
        this.numeroPasajeros = numeroPasajeros;
        this.numeroMotores = numeroMotores;
    }

    // Métodos GET
    
    getNumeroVuelo() {
        return this.numeroVuelo;
    }

    getDistancia() {
        return this.distancia;
    }

    getCompañia() {
        return this.compañia;
    }

    getNumeroPasajeros() {
        return this.numeroPasajeros;
    }
    
    getNumeroMotores() {
        return this.numeroMotores;
    }

    // Métodos SET

    setNumeroVuelo(numeroVuelo) {
        this.numeroVuelo = numeroVuelo;
    }

    setDistancia(distancia) {
        this.distancia = distancia;
    }

    setCompañia(compañia) {
        this.compañia = compañia;
    }

    setNumeroPasajeros(numeroPasajeros) {
        this.numeroPasajeros = numeroPasajeros;
    }
    
    setNumeroMotores(numeroMotores) {
        this.numeroMotores = numeroMotores;
    }

    // Metodos

    calcularHuellaCarbono() {
        let calculo = this.numeroMotores * 0.1 * (this.distancia / 1000)
        return calculo;
    }

    crearVuelo(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores) {
        let vuelo = new Vuelos(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores);
        return vuelo;
    }

    darDeBaja(numeroVuelo) {
        if (this.numeroVuelo === numeroVuelo) {
            return "El vuelo con número de vuelo " + this.numeroVuelo + " ha sido dado de baja.";
        }
    }

    verVuelo(numeroVuelo) {
        if (this.numeroVuelo === numeroVuelo) {
            return "El vuelo con número de vuelo " + this.numeroVuelo + " tiene una distancia de " + this.distancia + " millas, una compañía de " + this.compañia + ", " + this.numeroPasajeros + " pasajeros y " + this.numeroMotores + " motores.";
        } else {
            return "No se ha encontrado ningún vuelo con el número de vuelo " + numeroVuelo + ".";
        }
    }
    modificarVuelo(numeroVuelo, distancia, compañia, numeroPasajeros, numeroMotores) {
        this.numeroVuelo = numeroVuelo;
        this.distancia = distancia;
        this.compañia = compañia;
        this.numeroPasajeros = numeroPasajeros;
        this.numeroMotores = numeroMotores;
    }
}