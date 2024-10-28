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

class Cine extends Edificios {
    constructor(nombre, numeroPlantas, superficie, numeroAsistentes, precioEntrada, aforoMaximo) {
        super(nombre, numeroPlantas, superficie);
        this.numeroAsistentes = numeroAsistentes;
        this.precioEntrada = precioEntrada;
        this.aforoMaximo = aforoMaximo;
    }

    calcularCostoVigilancia(superficie) {
        let numeroVigilantes = Math.ceil(superficie / 3000);
        let precioMensual = numeroVigilantes * 1300;
        let mensaje = `La cantidad de vigilantes necesarios es: ${numeroVigilantes} <br> y el costo mensual de estos es de ${precioMensual}`;
        return mensaje;
    }

    proyectarSesion(numeroAsistentes, precioEntrada, aforoMaximo) {
        if (numeroAsistentes > aforoMaximo) {
            return `El aforo maximo no puede ser mayor al numero de asistenetes`
        } else {
            let euros = numeroAsistentes * precioEntrada;
            let mensaje = `Se han recaudado ${euros} Euros!`;
            return mensaje;
        }
    }
}