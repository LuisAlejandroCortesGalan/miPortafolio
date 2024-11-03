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