class Hotel extends Edificios {
    constructor(nombre, numeroPlantas, superficie, numeroHabitaciones) {
        super(nombre, numeroPlantas, superficie);
        this.numeroHabitaciones = numeroHabitaciones;
    }

    calcularCostoVigilancia(superficie) {
        let numeroVigilantes = Math.ceil(superficie / 1000);
        let precioMensual = numeroVigilantes * 1800;
        let mensaje = `La cantidad de vigilantes necesarios es: ${numeroVigilantes} <br> y el costo mensual de estos es de ${precioMensual}`;
        return mensaje;
    }

    servicioHabitaciones (numeroHabitaciones) {
        let numeroLimpiadores = Math.ceil(numeroHabitaciones / 20);
        let precioMensual = numeroLimpiadores * 1000;
        let mensaje = `La cantidad de limpiadores necesarios es: ${numeroLimpiadores} <br> y el costo mensual de estos es de ${precioMensual}`;
        return mensaje;
    }
}
