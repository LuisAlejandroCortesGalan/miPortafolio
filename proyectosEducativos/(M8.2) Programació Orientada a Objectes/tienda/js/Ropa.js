class Ropa extends Productos {

    constructor(id, nombre, precio, stock, talla) {
        super(id, nombre, precio, stock);
        this.talla = talla;
    }

    toString() {
        return `<br><span class="lose">Producto tipo Ropa</span>: ${super.toString()},<br> Talla: ${this.talla}`;
    }

}