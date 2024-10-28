class Electronico extends Productos {

    constructor(id, nombre, precio, stock, watts) {
        super(id, nombre, precio, stock);
        this.watts = watts;
    }

    toString() {
        return `<br><span class="lose">Producto tipo Electronico</span>: ${super.toString()},<br> Watts: ${this.watts}`;
    }
}
