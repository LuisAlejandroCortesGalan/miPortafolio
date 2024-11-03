let clientes = [
    new Clientes("12345678A", "Carlos Pérez"), // Cliente 1
    new Clientes("87654321B", "María García"), // Cliente 2
    new Clientes("11223344C", "Juan López")    // Cliente 3
];

let productos = [
    // Electrónicos
    new Electronico(1, "Televisor", 299.99, 10, 100),   // 100 watts
    new Electronico(2, "Laptop", 799.99, 5, 65),        // 65 watts
    new Electronico(3, "Smartphone", 499.99, 15, 15),   // 15 watts

    // Ropa
    new Ropa(4, "Camiseta", 19.99, 30, "M"),            // talla M
    new Ropa(5, "Jeans", 49.99, 20, "L"),               // talla L
    new Ropa(6, "Chaqueta", 89.99, 10, "XL"),           // talla XL

    // Alimentos
    new Alimentos(7, "Manzana", 1.99, 50, "Fruta"),     // tipo Fruta
    new Alimentos(8, "Pan", 2.49, 25, "Panadería"),     // tipo Panadería
    new Alimentos(9, "Leche", 1.29, 40, "Lácteo")       // tipo Lácteo
];

let eleccionProducto = 'electronico';
document.getElementById('producto').addEventListener('change', function () {
    let eleccion = document.getElementById('producto').value;
    if (eleccion == 'electronico') {
        eleccionProducto = 'electronico';
        document.getElementsByClassName('watts')[0].style.display = 'block';
        document.getElementsByClassName('watts')[1].style.display = 'block';
        document.getElementsByClassName('talla')[0].style.display = 'none';
        document.getElementsByClassName('talla')[1].style.display = 'none';
        document.getElementsByClassName('tipo')[0].style.display = 'none';
        document.getElementsByClassName('tipo')[1].style.display = 'none';


    } else if (eleccion == 'ropa') {
        eleccionProducto = 'ropa';
        document.getElementsByClassName('watts')[0].style.display = 'none';
        document.getElementsByClassName('watts')[1].style.display = 'none';
        document.getElementsByClassName('talla')[0].style.display = 'block';
        document.getElementsByClassName('talla')[1].style.display = 'block';
        document.getElementsByClassName('tipo')[0].style.display = 'none';
        document.getElementsByClassName('tipo')[1].style.display = 'none';
    } else if (eleccion == 'alimentos') {
        eleccionProducto = 'alimentos';
        document.getElementsByClassName('watts')[0].style.display = 'none';
        document.getElementsByClassName('watts')[1].style.display = 'none';
        document.getElementsByClassName('talla')[0].style.display = 'none';
        document.getElementsByClassName('talla')[1].style.display = 'none';
        document.getElementsByClassName('tipo')[0].style.display = 'block';
        document.getElementsByClassName('tipo')[1].style.display = 'block';
    }
})

let introducirCliente = () => {
    let dni = document.getElementById('dni').value;
    let nombre = document.getElementById('nombre').value;

    let clienteEncontrado = clientes.find(cliente => cliente.dni === dni);

    if (clienteEncontrado) {
        document.getElementById('respuesta1').innerHTML = `<p class="win">El cliente con DNI: ${dni} <span class="lose">YA EXISTE</span></p>`;
        return;
    } else {
        let cliente = new Clientes(dni, nombre);
        clientes.push(cliente);
        document.getElementById('respuesta1').innerHTML = `<p class="win">Cliente añadido correctamente!!<br>nombre: ${nombre}<br> dni: ${dni} </p>`;
        document.getElementById('dni').value = '';
        document.getElementById('nombre').value = '';
    }
}



let comprobarCliente;
let verCliente = () => {
    let dniCliente = document.getElementById('comprobarDni').value;
    comprobarCliente = clientes.find(cliente => cliente.dni == dniCliente);
    if (clientes.length === 0) {
        console.log(comprobarCliente);
        document.getElementById('respuesta3').innerHTML = `<p class="lose">No hay clientes registrados</p>`;
    } else {
        if (comprobarCliente) {
            document.getElementById('respuesta3').innerHTML = `<p class="win" id="${dniCliente}">El Cliente existe!: <br> Nombre: ${comprobarCliente.nombre} <br> DNI: ${comprobarCliente.dni}</p>`;
            document.getElementsByClassName("clienteComprobado")[0].style.display = 'block';
            document.getElementsByClassName("clienteComprobado")[1].style.display = 'block';
        } else {
            document.getElementById('respuesta3').innerHTML = `<p class="lose">El cliente no existe!</p>`;
            document.getElementsByClassName("clienteComprobado")[0].style.display = 'none';
            document.getElementsByClassName("clienteComprobado")[1].style.display = 'none';
            document.getElementsByClassName('verIntroducirProducto')[0].style.display = 'none';

        }
    }
}

let verIntroducirProducto = () => {
    mostrarProductos()
    verCliente();
    if (comprobarCliente) {
        document.getElementsByClassName('verIntroducirProducto')[0].style.display = 'flex';
    } else {
        document.getElementById('respuesta3').innerHTML = `<p class="lose">Primero, busque el cliente</p>`;
    }
}

let volverAtras = () => {
    document.getElementsByClassName('verIntroducirProducto')[0].style.display = 'none';

}

let introducirProducto = () => {
    let dniCliente = document.getElementById('comprobarDni').value;
    let id = document.getElementById('id').value;
    let nombreProducto = document.getElementById('nombreProducto').value;
    let precio = document.getElementById('precio').value;
    let stock = document.getElementById('stock').value;
    let clienteEncontrado = clientes.find(cliente => cliente.dni == dniCliente);
    let respuesta2 = document.getElementById('respuesta2');

    console.log("cliente Encontrado", clienteEncontrado);

    let comprobarProducto = clienteEncontrado.listaProductos.find(producto => producto.id == id);

    console.log("Comprovar producto", comprobarProducto);


    if (comprobarProducto) {
        respuesta2.innerHTML = `<p class="lose" id="${dniCliente}">Ya existe un producto con este id ${id}</p>`;
        return;
    } else {
        if (eleccionProducto === 'electronico') {
            console.log("Producto electronico");
            let watts = document.getElementById('watts').value;
            let producto = new Electronico(id, nombreProducto, precio, stock, watts);
            productos.push(producto);

            respuesta2.innerHTML = `<p class="win">Producto Electronico Comprado: <br>Con id: ${id}, <br>Con Nombre: ${nombreProducto}, <br>Con precio: ${precio}, <br>Con stock: ${stock}, <br>Con Watts: ${watts} </p>`;

        } else if (eleccionProducto === 'ropa') {
            console.log("Producto ROPA");
            let talla = document.getElementById('talla').value;
            let producto = new Ropa(id, nombreProducto, precio, stock, talla);
            productos.push(producto);

            respuesta2.innerHTML = `<p class="win">Producto de Ropa Comprado: <br>Con id: ${id}, <br>Con Nombre: ${nombreProducto}, <br>Con precio: ${precio}, <br>Con stock: ${stock}, <br>Con talla: ${talla} </p>`;

        } else if (eleccionProducto === 'alimentos') {
            console.log("Producto Alimentos");
            let tipo = document.getElementById('tipo').value;
            let producto = new Alimentos(id, nombreProducto, precio, stock, tipo);
            productos.push(producto);

            respuesta2.innerHTML = `<p class="win">Producto Electronico Comprado: <br>Con id: ${id}, <br>Con Nombre: ${nombreProducto}, <br>Con precio: ${precio}, <br>Con stock: ${stock}, <br>Con tipo: ${tipo} </p>`;
        }
    }
    mostrarProductos()
}

let verLista = () => {
    let dniCliente = document.getElementById('comprobarDni').value;
    let clienteEncontrado = clientes.find(cliente => cliente.dni == dniCliente);
    let respuesta3 = document.getElementById('respuesta3');
    console.log("encontrado cliente", clienteEncontrado);
    let productos = [];

    if (!clienteEncontrado) {
        respuesta3.innerHTML = `<p class="lose">No hay ningun Cliente con este dni ${dniCliente}</p>`;

    } else {
        if (clienteEncontrado.listaProductos.length === 0 || clienteEncontrado.listaProductos === null || clienteEncontrado.listaProductos === 'undefined') {
            console.log("encontrado if cliente", clienteEncontrado);
            respuesta3.innerHTML = `<p class="lose">No hay ningun producto en la lista de este cliente</p>`;
        } else {
            for (let i = 0; i < clienteEncontrado.listaProductos.length; i++) {
                productos.push(clienteEncontrado.listaProductos[i]);
            }
            respuesta3.innerHTML = `<h2 class="win">Listado de productos:</h2>`;
            respuesta3.innerHTML += `<p class="win">${productos}</p>`;

        }
    }

}

let eliminarCliente = () => {
    document.getElementsByClassName('verIntroducirProducto')[0].style.display = 'none';
    document.getElementById('respuestaCarrito').innerHTML = '';
    let dniCliente = document.getElementById('comprobarDni').value;
    let clienteEncontrado = clientes.find(cliente => cliente.dni === dniCliente);
    let indice = clientes.indexOf(clienteEncontrado)

    if (clientes.length === 0) {
        respuesta3.innerHTML = `<p class="lose">No hay ningun cliente con este dni ${dniCliente}</p>`;
    } else {

        console.log("clienteEncontrado:", clienteEncontrado, "indice:", indice);
        if (indice === -1) {
            document.getElementById('respuesta3').innerHTML = `<p class="lose">El cliente no existe!</p>`;

        } else {
            clientes.splice(indice, 1);
            document.getElementById('respuesta3').innerHTML = `<p class="lose">Cliente eliminado correctamente!</p>`;
        }
    }

}


// Función para mostrar productos
function mostrarProductos() {
    let listaProductos = document.getElementById('carrito');
    listaProductos.innerHTML = ''; // Limpiar lista antes de mostrar productos

    productos.forEach(producto => {
        let item = document.createElement('li'); // Crear un nuevo elemento de lista
        item.innerHTML = `${producto.id} - ${producto.nombre} - $${producto.precio} 
            <button onclick="agregarAlCarrito(${producto.id})">Comprar</button>`; // Botón para comprar
        listaProductos.appendChild(item); // Agregar el elemento a la lista
    });
}

// Llamar a la función para mostrar productos al cargar la página
mostrarProductos();
let mensajeCarrito;
// Función para manejar la acción de compra
function agregarAlCarrito(id) {

    const producto = productos.find(p => p.id === id);
    if (producto) {
        mensajeCarrito = `<div class="contenedores" id="${id}"><p class="win" style="margin: 0; padding: 0;">Has agregado ${producto.nombre} al carrito.</p><br><button onClick="devolverProducto(${id})">Devolver Producto</button> </div>`
        document.getElementById('respuestaCarrito').innerHTML += mensajeCarrito;
        comprobarCliente.listaProductos.push(producto);
    }
}

function devolverProducto(id) {
    let encontrarProducto = comprobarCliente.listaProductos.find(producto => producto.id === id);
    let indice = comprobarCliente.listaProductos.indexOf(encontrarProducto);
    console.log(indice);

    if (eleccionProducto) {
        comprobarCliente.listaProductos.splice(indice, 1)
        document.getElementById(`${id}`).remove();

    }
}