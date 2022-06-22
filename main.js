function valorcuota(producto, cantidadcuotas) {
    return parseInt(producto / cantidadcuotas)
}

function mostrarMensaje(nombre, precio) {
    alert("Usted selecciono el producto " + nombre + " valor " + precio)
}

// seleccion de producto menu de opciones

function seleccionProducto() {
    let producto1 = 100
    let producto2 = 200
    let producto3 = 300
    let producto4 = 400

    let seleccionProducto = 0

    do {
        seleccionProducto = parseInt(prompt("seleccione el producto deseado :\n1. producto 1\n2. producto 2\n3. producto 3\n4. producto 4"))

        switch (seleccionProducto) {
            case 1:
                mostrarMensaje("1", producto1)
                return producto1
            case 2:
                mostrarMensaje("2", producto2)
                return producto2
            case 3:
                mostrarMensaje("3", producto3)
                return producto3
            case 4:
                mostrarMensaje("4", producto4)
                return producto4
            default:
                alert("Usted no selecciono ningun producto")
                break
        }

    } while (seleccionProducto < 1 || seleccionProducto > 4 || isNaN(seleccionProducto))
}

// seleccion de cantidad de cuotas

function seleccionCuotas(precio) {


    let seleccionCuotas = 0

    do {
        seleccionCuotas = parseInt(prompt("seleccione cantidad de cuotas:\n1. Un pago sin interes\n2. Tres pagos sin interes\n3. Seis pagos sin interes"))

        if (seleccionCuotas == 1) {
            alert("Usted selecciono un pago sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 1))
        } else if (seleccionCuotas == 2) {
            alert("Usted selecciono tres pagos sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 3))
        } else if (seleccionCuotas == 3) {
            alert("Usted selecciono seis pagos sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 6))
        } else {
            alert("Usted no selecciono un valor de cuotas valido")
        }

    } while (seleccionCuotas < 1 || seleccionCuotas > 3 || isNaN(seleccionCuotas))
}

// confirmacion de compra 

function confirmar() {

    let confirmacion = prompt("Confirma la compra ? Si/No")

    if (confirmacion.toLowerCase() == "si") {
        alert("Muchas gracias por su compra !")
    } else {
        alert("Gracias por su visita !")
    }
}

// funcion para dar orden a las otras funciones

function principal() {
    alert("bienvenido a TuTienda !")

    let precio = seleccionProducto()

    seleccionCuotas(precio)

    confirmar()
}

//iniciador de las funciones

principal()