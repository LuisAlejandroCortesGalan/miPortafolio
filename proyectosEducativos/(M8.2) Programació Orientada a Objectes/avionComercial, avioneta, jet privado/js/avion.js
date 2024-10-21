class Avion {
    constructor(numeroAvion, marca, modelo, carga, longitud) {
        this.numeroAvion = numeroAvion;
        this.marca = marca;
        this.modelo = modelo;
        this.carga = carga;
        this.longitud = longitud;
    }

    calcularCombustible(longitud, carga) {
        let combustible = longitud * carga;
        return combustible; 
    }

}

class AvionComercial extends Avion {
    calcularLimpieza(longitud) {
        let limpieza = (longitud * 10) + 240;
        return limpieza;
    }

    calcularCostoComida(personasDentro) {
        let costo = personasDentro * 10;
        return costo;
    }
}

class Avioneta extends Avion {
    calcularLimpieza(longitud) {
        let limpieza = (longitud * 10) / 2;
        return limpieza;
    }

    calcularDistancia(numeroHelices) {        
        let distancia = numeroHelices * 1000;
        return distancia;
    }
}

class JetPrivado extends Avion {
    calcularLimpieza(longitud) {
        let limpieza = ((longitud * 10) / 2) + 15;
        return limpieza;
    }

    calcularCostoReserva(personasDentro) {

        let costo = personasDentro * 1000;
        personasDentro > 10 ? costo = `No pueden haber mas de 10 personas en el JET PRIVADO` : costo;
        return costo;
    }
}