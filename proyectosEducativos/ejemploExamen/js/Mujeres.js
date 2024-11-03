class Mujeres extends Pacientes {
    constructor(dni, nombreCompleto, edad, peso, estatura, circunferenciaCintura, circunferenciaCadera, numeroEmbarazos) {
        super(dni, nombreCompleto, edad, peso, estatura, circunferenciaCintura, circunferenciaCadera);
        this.numeroEmbarazos = numeroEmbarazos;
    }

    riesgoSalud(rcc){
        if (rcc >= 0.82) {
            return `Riesgo de salud`;
        } else {
            return `No hay riesgo de salud`;
        }
    }
}