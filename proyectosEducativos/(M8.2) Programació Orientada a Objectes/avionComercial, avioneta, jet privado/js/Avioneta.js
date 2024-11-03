class Avioneta extends Avion {

    
    constructor (numeroAvion, marca, modelo, carga, longitud, numeroHelices) {
        
        super(numeroAvion, marca, modelo, carga, longitud);
        this.numeroHelices = numeroHelices;
    }
    calcularLimpieza(longitud) {
        let limpieza = (longitud * 10) / 2;
        return limpieza;
    }

    calcularDistancia(numeroHelices) {        
        let distancia = numeroHelices * 1000;
        return distancia;
    }

    toString() {
        return `<br>${super.toString()}, Número de Helices: ${this.numeroHelices}`;
    }
}