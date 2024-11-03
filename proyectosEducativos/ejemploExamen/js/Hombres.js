class Hombres extends Pacientes {

    constructor(dni, nombreCompleto, edad, peso, estatura, circunferenciaCintura, circunferenciaCadera){
        super(dni, nombreCompleto, edad, peso, estatura, circunferenciaCintura, circunferenciaCadera)
    }

    riesgoSalud(rcc){
        if (rcc > 0.95) {
            return `Riesgo de salud`;
        } else {
            return `No hay riesgo de salud`;
        }
    }
}