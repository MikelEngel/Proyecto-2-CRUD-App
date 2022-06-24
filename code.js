// Definición de Variables

const contenedor = document.querySelector ('tbody')
let resultados = ''

const modalProductos = new bootstrap.Modal(document.getElementById('modalProductos'))
const formProducto = document.querySelector ('form')

const modelo = document.getElementById ('modelo')
const descripcion = document.getElementById ('descripcion')
const stock = document.getElementById ('stock')
const precio = document.getElementById ('precio')

let opcion = ''

btnCrear.addEventListener ('click', ()=>{

    modelo.value = ''
    descripcion.value = ''
    stock.value = ''
    precio.value = ''
    modalProductos.show ()
    opcion = 'crear'

})
