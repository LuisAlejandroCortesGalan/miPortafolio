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




