let clientes = [];
let eleccionProducto = 'electronico';
document.getElementById('producto').addEventListener('change', function (){
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




let verCliente = () => {
    let dniCliente = document.getElementById('comprobarDni').value;
    let comprobarCliente = clientes.find(cliente => cliente.dni == dniCliente);
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
    document.getElementsByClassName('verIntroducirProducto')[0].style.display = 'flex';
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

    console.log("cliente Encontrado",clienteEncontrado);

    let comprobarProducto = clienteEncontrado.listaProductos.find(producto => producto.id == id);

    console.log("Comprovar producto", comprobarProducto);
    

    if (comprobarProducto) {
        respuesta2.innerHTML = `<p class="lose" id="${dniCliente}">Ya existe un producto con este id ${id}</p>`;
        return;
    } else {
        if (eleccionProducto === 'electronico' ) {
            console.log("Producto electronico");
            let watts = document.getElementById('watts').value;
            let Producto = new Electronico(id, nombreProducto, precio, stock, watts);
            clienteEncontrado.listaProductos.push(Producto);
            respuesta2.innerHTML = `<p class="win">Producto Electronico Comprado: <br>Con id: ${id}, <br>Con Nombre: ${nombreProducto}, <br>Con precio: ${precio}, <br>Con stock: ${stock}, <br>Con Watts: ${watts} </p>`;
    
        } else if (eleccionProducto === 'ropa') {
            console.log("Producto ROPA");
            let talla = document.getElementById('talla').value;
            let producto = new Ropa(id, nombreProducto, precio, stock, talla);
            clienteEncontrado.listaProductos.push(producto);
            respuesta2.innerHTML = `<p class="win">Producto de Ropa Comprado: <br>Con id: ${id}, <br>Con Nombre: ${nombreProducto}, <br>Con precio: ${precio}, <br>Con stock: ${stock}, <br>Con talla: ${talla} </p>`;
    
        } else if (eleccionProducto === 'alimentos') {
            console.log("Producto Alimentos");
            let tipo = document.getElementById('tipo').value;
            let producto = new Alimentos(id, nombreProducto, precio, stock, tipo);
            clienteEncontrado.listaProductos.push(producto);
            respuesta2.innerHTML = `<p class="win">Producto Electronico Comprado: <br>Con id: ${id}, <br>Con Nombre: ${nombreProducto}, <br>Con precio: ${precio}, <br>Con stock: ${stock}, <br>Con tipo: ${tipo} </p>`;
        }
    }
    
}

let verLista = () => {
    let dniCliente = document.getElementById('comprobarDni').value;
    let clienteEncontrado = clientes.find(cliente => cliente.dni == dniCliente);
    let respuesta3 = document.getElementById('respuesta3');
    console.log("encontrado cliente", clienteEncontrado);
    let productos = [];
    

    if (clienteEncontrado.listaProductos.length === 0) {
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

let eliminarCliente = () => {
    let dniCliente = document.getElementById('comprobarDni').value;
    let clienteEncontrado = clientes.find(cliente => cliente.dni === dniCliente);
}