class Pacientes {

    constructor(dni, nombreCompleto, edad, peso, estatura, circunferenciaCintura, circunferenciaCadera) {
        this.dni = dni;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
        this.peso = peso;
        this.estatura = estatura;
        this.circunferenciaCintura = circunferenciaCintura;
        this.circunferenciaCadera = circunferenciaCadera;
    }

    indiceMasaCorporal() {
        let imc = this.peso / (this.estatura * this.estatura);
        return imc;
    }

    categoriaPeso(imc) {
        if (imc <= 18.5) {
            return "Peso insuficiente";
        } else if (imc <= 24.9) {
            return "Peso normal";
        } else if (imc <= 29.9) {
            return "Sobrepeso";
        } else {
            return "Obesidad";
        }
    }

    indiceGrasa(imc, sexo) {
        let total = (1,2 * imc) + (0.23 * this.edad)
        return total;
    }

    relacionCinturaCadera() {
        let rcc = this.circunferenciaCintura / this.circunferenciaCadera;
        return rcc; 
    }

}
