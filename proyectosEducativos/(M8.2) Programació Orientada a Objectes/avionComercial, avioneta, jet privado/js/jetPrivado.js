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