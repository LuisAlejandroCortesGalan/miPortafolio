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

    toString() {
        return `Marca: ${this.marca},<br> Modelo: ${this.modelo},<br> Carga: ${this.carga} tons,<br> Longitud: ${this.longitud} metros`;
    }

}

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

class JetPrivado extends Avion {

    
    constructor (numeroAvion, marca, modelo, carga, longitud, numeroPersonasJet) {
        
        super(numeroAvion, marca, modelo, carga, longitud);
        this.numeroPersonasJet = numeroPersonasJet;
    }

    calcularLimpieza(longitud) {
        let limpieza = ((longitud * 10) / 2) + 15;
        return limpieza;
    }

    calcularCostoReserva(personasDentro) {

        let costo = personasDentro * 1000;
        personasDentro > 10 ? costo = `No pueden haber mas de 10 personas en el JET PRIVADO` : costo;
        return costo;
    }

    toString() {
        return `<br>${super.toString()}, Número de Personas: ${this.numeroPersonasJet}`;
    }
}