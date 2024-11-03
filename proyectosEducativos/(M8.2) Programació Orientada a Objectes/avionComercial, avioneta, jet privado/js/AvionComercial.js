class AvionComercial extends Avion {

    constructor (numeroAvion, marca, modelo, carga, longitud, numeroPersonas) {
        
        super(numeroAvion, marca, modelo, carga, longitud);
        this.numeroPersonas = numeroPersonas;
    }

    toString() {
        return `${super.toString()}, Número de Personas: ${this.numeroPersonas}`;
    }

    calcularLimpieza(longitud) {
        let limpieza = (longitud * 10) + 240;
        return limpieza;
    }

    calcularCostoComida(personasDentro) {
        let costo = personasDentro * 10;
        return costo;
    }
}
