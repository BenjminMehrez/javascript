class Zapatilla {
    constructor(marca, color, anio, calidad, id) {
        this.marca = marca;
        this.color = color; 
        this.anio = parseInt(anio); 
        this.calidad = parseInt(calidad); 
        this.id = id; 

    }
    asignarId(array) {
        this.id = array.length;

    }
    asignarCalidad(calidad) {
        this.calidad = calidad;
    }

}

const zapatillas = [
    new Zapatilla('Nike', 'azul', '2022', 8, 1),
    new Zapatilla('Adidas', 'Negro', '2021', 9, 2),
    new Zapatilla('Topper', 'gris', '2020', 7, 3),
    new Zapatilla('Puma', 'marron', '2022', 9, 4),
    new Zapatilla('Kappa', 'azul', '2021', 7, 5),
    new Zapatilla('Rebook', 'blanco', '2020', 6, 6),
]

let continuar = true;

while (continuar) {
    let Ingreso = prompt('Ingresa los datos de la zapatilla: marca, color, año, calidad de 1 a 10, separados por(/). Ingresa X para finalizar');

    if (Ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = Ingreso.split('/');

    const zapatilla = new Zapatilla(datos[0], datos[1], datos[2], datos[3], datos[4]);
    zapatillas.push(zapatilla);
    zapatilla.asignarId(zapatillas);

}

let catalogo = prompt('Elige el catalogo deseado:\n1 - Marca (A a Z) \n2 - Marca (Z a A)\n3 - Mejor a peor calidad \n 4 -Fecha de creacion');

function ordenar(catalogo, array) {
    let arrayOrdenado = array.slice(0);

    switch (catalogo) {
        case '1':
            return nombreAscendente = arrayOrdenado.sort((a, b) => a.marca.localeCompare(b.marca));
        case '2':
            return nombreDescendente = arrayOrdenado.sort((a, b) => b.marca.localeCompare(a.marca));
        case '3':
            return arrayOrdenado.sort((a, b) => b.calidad - a.calidad);
        case '4':
            return arrayOrdenado.sort((a, b) => a.anio - b.anio);
        default:
            alert('Elija una opción valida por favor');
            break;
    }
}



function crearStringResultado(array) {
    let info = ''

    array.forEach(elemento => {
        info+= 'Marca: ' + elemento.marca + '\nColor: ' + elemento.color + '\nAño de creacion: ' + elemento.anio + '\nCalidad: ' + elemento.calidad + 'puntos.\n\n'
    });
    return info;

}


alert(crearStringResultado(ordenar(catalogo, zapatillas)));























// function dibujarLinea() {
//     console.log("--------------------------------------");
// }

// function mostrarListado() {
//     alert("¡BIENVENIDO A NUESTRO SHOP ONLINE DE YERBAS " + (usuario.nombre).toUpperCase() + "!\nLos productos disponibles son los siguientes:\n");
//     dibujarLinea();
//     listaYerbas.forEach(yerba => {
//         alert(yerba.id + "-" + yerba.nombre + ": $" + yerba.precio + " Stock Disponible: " + yerba.stock + "\n");
//     });
//     dibujarLinea();
//     alert("Tienes $" + usuario.dinero + " disponibles.\n")
// }

// function logueoInicial() {
//     SOLICITO NOMBRE DE USUARIO A BUSCAR
//     let nombreBuscado = prompt("Ingrese el nombre de usuario");
//     BUSCO EN EL ARRAY EL NOMBRE BUSCADO
//     const resultado = arrayUsuarios.find((usuario) => usuario.nombre === nombreBuscado);
//     SI EL RESULTADO NO ES INDEFINIDO, ES DECIR QUE SE HA ENCONTRADO EL USUARIO
//     if (resultado != undefined) {
//         SOLICITO LA CONTRASEÑA
//         let contraseñaBuscada = prompt("Ingrese la contraseña");
//         MIENTRAS QUE LA CONTRASEÑA SEA INCORRECTA SIGO SOLICITANDOLA
//         while (resultado.contraseña != contraseñaBuscada) {
//             alert("Lo siento, la contraseña es incorrecta. Intente nuevamente.");
//             contraseñaBuscada = prompt("Ingrese la contraseña");
//         }
//         return resultado;
//     } else {
//         SI EL USUARIO ES INCORRECTO, VUELVO A INICIAR EL LOGUEO
//         alert("Lo siento, la información brindada es incorrecta. Intente nuevamente.");
//         logueoInicial();
//     }
// }

// function mostrarSaldo() {
//     alert("Su saldo actual es de: " + usuario.dinero);
// }

// function nombreYerba(idBuscado) {
//     const resultado = listaYerbas.find((yerba) => yerba.id == idBuscado);
//     return resultado.nombre;
// }

// function precioYerba(idBuscado) {
//     const resultado = listaYerbas.find((yerba) => yerba.id == idBuscado);
//     return resultado.precio;
// }

// function comprobarStock(idBuscado) {
//     const resultado = listaYerbas.find((yerba) => yerba.id == idBuscado);
//     if (resultado.stock >= 1) {
//         return true;
//     } else return false;
// }

// function quitarUnStock(idBuscado) {
//     const resultado = listaYerbas.find((yerba) => yerba.id == idBuscado);
//     resultado.stock -= 1;
// }

// function realizarCompra(compra) {
//     if (usuario.dinero >= precioYerba(compra)) {
//         if (comprobarStock(compra) == true) {
//             quitarUnStock(compra);
//             usuario.dinero -= precioYerba(compra);
//             console.log("Compra realizada\n");
//             console.log("Tu dinero actual es: " + usuario.dinero);
//             return true;
//         } else {
//             alert("Lo sentimos. No hay Stock");
//         }
//     }
// }

// function menuOpciones() {
//     let opcion = prompt("Ingrese un ID o -1 para dejar de comprar.")
//     while (opcion != -1) {
//         switch (opcion) {
//             case "1":
//                 if (realizarCompra(opcion) == true) {
//                     alert("Gracias por su compra!");
//                 }
//                 break;
//             case "2":
//                 if (realizarCompra(opcion) == true) {
//                     alert("Gracias por su compra!");
//                 }
//                 break;
//             case "3":
//                 if (realizarCompra(opcion) == true) {
//                     alert("Gracias por su compra!");
//                 }
//                 break;
//             case "4":
//                 if (realizarCompra(opcion) == true) {
//                     alert("Gracias por su compra!");
//                 }
//                 break;
//             default:
//                 console.log("Ingreso erroneo");
//                 break;
//         }
//         opcion = prompt("Ingrese un ID o -1 para dejar de comprar.");
//     }
//     console.log("¡Gracias por tu compra!");
// }

// DECLARO LA CLASE YERBA
// class Yerba {
//     constructor(id, nombre, precio, stock = 5) {
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }

//     comprarYerba() {
//         this.stock--;
//     }

//     mostrarPrecio() {
//         return ("$" + this.precio);
//     }
// }

// CREO YERBAS Y EL ARRAY QUE CONTIENE LAS YERBAS
// const yerba1 = new Yerba(01, "Yerba La Tronquera", 960);
// const yerba2 = new Yerba(02, "Yerba Playadote", 600);
// const yerba3 = new Yerba(03, "Yerba Rezamonjes", 500);
// const yerba4 = new Yerba(04, "Yerba Tardaluis", 690);

// const listaYerbas = [yerba1, yerba2, yerba3, yerba4];

// DECLARO LA CLASE USUARIO
// class Usuario {
//     constructor(nombre, contraseña, dinero = 5000) {
//         this.nombre = nombre;
//         this.contraseña = contraseña;
//         this.dinero = dinero;
//     }
// }

// CREO USUARIOS Y EL ARRAY QUE CONTIENE LOS USUARIOS
// const usuario1 = new Usuario("admin", "1234");
// const usuario2 = new Usuario("Edgar", "yoEdgar");

// const arrayUsuarios = [usuario1, usuario2];

// let usuario = logueoInicial();

// mostrarListado();

// console.log("Presione un boton para continuar...");

// menuOpciones();