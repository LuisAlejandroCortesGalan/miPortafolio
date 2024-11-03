class Edificios {

    constructor(nombre, numeroPlantas, superficie) {
        this.nombre = nombre;
        this.numeroPlantas = numeroPlantas;
        this.superficie = superficie;
    }

    get getNombre() {
        return this.nombre;
    }

    get getNumeroPlantas() {
        return this.numeroPlantas;
    }

    get getSuperficie() {
        return this.superficie;
    }

    limpiar(superficie, numeroPlantas) {
        let minutos = Math.ceil(superficie / 5);
        let tiempoAdicional = numeroPlantas * 0.5;
        minutos = (minutos * numeroPlantas) + tiempoAdicional;
        let costo = minutos * 30;
        let mensaje = `El tiempo que se tarda en limpiar el edifico es de ${minutos} <br> y el costo mensual es de ${costo}`;
        return mensaje;
    }

}




