class Alimentos extends Productos {

    constructor(id, nombre, precio, stock, tipo) {
        super(id, nombre, precio, stock);
        this.tipo = tipo;
    }

    toString() {
        return `<br><span class="lose">Producto tipo Alimentos</span>: ${super.toString()},<br> Tipo: ${this.tipo}`;
    }
}