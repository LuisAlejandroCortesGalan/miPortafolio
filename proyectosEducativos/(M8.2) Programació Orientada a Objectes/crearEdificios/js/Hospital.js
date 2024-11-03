class Hospital extends Edificios {
    constructor(nombre, numeroPlantas, superficie, raciones) {
        super(nombre, numeroPlantas, superficie);
        this.raciones = raciones;

    }

    calcularCostoVigilancia(superficie) {
        let numeroVigilantes = Math.ceil(superficie / 1000);
        let precioMensual = numeroVigilantes * 1300;
        let mensaje = `La cantidad de vigilantes necesarios es: ${numeroVigilantes} <br> y el costo mensual de estos es de ${precioMensual}`;
        return mensaje;
    }

    repartirComida(raciones) {
        let mensaje = `Se estan repartiendo: ${raciones} raciones`;
        return mensaje;
    }
}