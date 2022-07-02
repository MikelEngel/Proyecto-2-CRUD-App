let registros = [];

const txtID = document.getElementById ("txtID");
const txtModelo = document.getElementById ("txtModelo");
const txtDescripcion = document.getElementById ("txtDescripcion");
const txtCantidad = document.getElementById ("txtCantidad");
const numPrecio = document.getElementById ("numPrecio");
const proTabla = document.getElementById ("proTabla");

const crearRegistro = () => {

    const producto = {
        id: uuidv4(),
        modelo: txtModelo.value,
        descripcion: txtDescripcion.value,
        cantidad: txtCantidad.value,
        precio: numPrecio.value,
    };


    registros = JSON.parse( localStorage.getItem("productos")) || [];
    registros.push(producto);
    localStorage.setItem("productos", JSON.stringify(registros));

    mostrarRegistros();

};

const mostrarRegistros = () => {
    const registrosProductos = JSON.parse(localStorage.getItem("productos")) || [];

    proTabla.innerHTML = "";
    registrosProductos.forEach((registroProducto) => {
        const fila = `
                <tr>
                    <td>1</td>
                    <td>${registroProducto.modelo}</td>
                    <td>${registroProducto.descripcion}</td>
                    <td>${registroProducto.cantidad}</td>
                    <td>${registroProducto.precio}</td>
                    <td><button type="button" class="btn btn-warning" onclick="iniciarEditarRegistro('${registroProducto.id}')">EDITAR</button></td>
                    <td><button type="button" class="btn btn-danger" onclick="eliminarRegistro('${registroProducto.id}')">ELIMINAR</button></td>
                  </tr>
        `;

    proTabla.innerHTML += fila;
    
    
    });
};


const iniciarEditarRegistro = (idRegistro) => {

    const registrosProductos = JSON.parse(localStorage.getItem("productos")) || [];
    const producto = registrosProductos.find((registroProducto)=>{
        return registroProducto.id === idRegistro;

    });

    txtID.value = idRegistro;
    txtModelo.value = producto.modelo;
    txtDescripcion.value = producto.descripcion;
    txtCantidad.value = producto.cantidad;
    numPrecio.value = producto.precio;

};


const editarRegistros = () => {
    const registrosProductos = JSON.parse(localStorage.getItem("productos")) || [];
    const producto = registrosProductos.find((registroProducto)=>{
        return registroProducto.id === txtID.value;

    });

    producto.modelo = txtModelo.value;
    producto.descripcion = txtDescripcion.value;
    producto.cantidad = txtCantidad.value;
    producto.precio = numPrecio.value;

    localStorage.setItem("productos", JSON.stringify(registrosProductos));
    mostrarRegistros();
}

const eliminarRegistro = (idRegistro) => {
    const registrosProductos = JSON.parse(localStorage.getItem("productos")) || [];
    const registrosFiltrados = registrosProductos.filter((registroProducto)=>{
        return registroProducto.id !== idRegistro

    })
    localStorage.setItem("productos", JSON.stringify(registrosFiltrados));
    mostrarRegistros();
};


function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )  
}

window.onload = () => {
    mostrarRegistros();
};