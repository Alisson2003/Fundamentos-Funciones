let numOrden = 1
let modulo = "Carrito de compras"
let estatus = true
let tipoPago = "Efectivo"
let producto = "Rafferiza Vestido mini con escote cuadrado, estampado floral elegante y con volantes en los puños"
let descripcion ={
    color : ['Azul', 'Rojo', ' Multicolor', 'Negro'],
    talla : ['XS', 'S', 'M ', 'L', 'XL'],
    SKU : "sz25031856949666026",
}
let calificacion = 4.87
let precio = 6.56

console.log(`Bienvenido a la Tienda de SHEIN
    SU NUMERO DE ORDEN ES ${numOrden}`)

console.log(numOrden), console.log(modulo)
console.log(estatus)
console.log(tipoPago)
console.log(producto)
console.log(descripcion)
console.log(calificacion)
console.log(precio)
console.log(producto.length)

console.log(`Si realiza la compra de dos ${producto} el valor a cancalear es ${(precio + precio)}`)

console.log(calificacion == precio)

console.log(`La ${numOrden} tiene un valor a cancelar de ${precio} y su metodo de pago es ${tipoPago.toUpperCase()} `)