// class Zapatilla {
//     constructor(marca, color, anio, calidad, id) {
//         this.marca = marca;
//         this.color = color; 
//         this.anio = parseInt(anio); 
//         this.calidad = parseInt(calidad); 
//         this.id = id; 

//     }
//     asignarId(array) {
//         this.id = array.length;

//     }
//     asignarCalidad(calidad) {
//         this.calidad = calidad;
//     }

// }

// const zapatillas = [
//     new Zapatilla('Nike', 'azul', '2022', 8, 1),
//     new Zapatilla('Adidas', 'Negro', '2021', 9, 2),
//     new Zapatilla('Topper', 'gris', '2020', 7, 3),
//     new Zapatilla('Puma', 'marron', '2022', 9, 4),
//     new Zapatilla('Kappa', 'azul', '2021', 7, 5),
//     new Zapatilla('Rebook', 'blanco', '2020', 6, 6),
// ]


// let continuar = true;

// while (continuar) {
//     let Ingreso = prompt('Ingresa los datos de la zapatilla: marca, color, año, calidad de 1 a 10, separados por(/). Ingresa X para finalizar');

//     if (Ingreso.toUpperCase() == 'X') {
//         continuar = false;
//         break;
//     }

//     let datos = Ingreso.split('/');

//     const zapatilla = new Zapatilla(datos[0], datos[1], datos[2], datos[3], datos[4]);
//     zapatillas.push(zapatilla);
//     zapatilla.asignarId(zapatillas);

// }

// let catalogo = prompt('Elige el catalogo deseado:\n1 - Marca (A a Z) \n2 - Marca (Z a A)\n3 - Mejor a peor calidad \n 4 -Fecha de creacion');

// function ordenar(catalogo, array) {
//     let arrayOrdenado = array.slice(0);

//     switch (catalogo) {
//         case '1':
//             return nombreAscendente = arrayOrdenado.sort((a, b) => a.marca.localeCompare(b.marca));
//         case '2':
//             return nombreDescendente = arrayOrdenado.sort((a, b) => b.marca.localeCompare(a.marca));
//         case '3':
//             return arrayOrdenado.sort((a, b) => b.calidad - a.calidad);
//         case '4':
//             return arrayOrdenado.sort((a, b) => a.anio - b.anio);
//         default:
//             alert('Elija una opción valida por favor');
//             break;
//     }
// }



// function crearStringResultado(array) {
//     let info = ''

//     array.forEach(elemento => {
//         info+= 'Marca: ' + elemento.marca + '\nColor: ' + elemento.color + '\nAño de creacion: ' + elemento.anio + '\nCalidad: ' + elemento.calidad + 'puntos.\n\n'
//     });
//     return info;
// }

// alert(crearStringResultado(ordenar(catalogo, zapatillas)));

let zapatillas = [
    {
        Marca: 'Nike',
        color: 'azul',
        anio: 2022,
        calidad: 8,
        id: 1
    },
    {
        Marca: 'Adidas',
        color: 'Negro',
        anio: '2021',
        calidad: 9,
        id: 2
    },
    {
        Marca: 'Topper',
        color: 'gris',
        anio: '2020',
        calidad: 7,
        id: 3
    },
    {
        Marca: 'Puma',
        color: 'marron',
        anio: '2022',
        calidad: 9,
        id: 4
    },
    {
        Marca: 'Kappa',
        color: 'azul',
        anio: '2021',
        calidad: 7,
        id: 5
    },
    {
        Marca: 'Rebook',
        color: 'blanco',
        anio: '2020',
        calidad: 6,
        id: 6
    },
];


// Chequear si hay una base de datos previa en la memoria local
const zapatillasEnLS = JSON.parse(localStorage.getItem("zapatillasEnLS"));
if (zapatillasEnLS !== null) {
    zapatillas = zapatillasEnLS;
    console.log("Lista de zapatillas");
} else {
    const zapatillasEnLS = zapatillas;
}

// Modal "Agregar país": Función para agregar un nuevo país al array
const botonAgregar = document.querySelector("#btnAgregarZapatilla");
botonAgregar.addEventListener("click", agregarZapatilla);
const formulario = document.querySelector("#agregar-form");

function agregarZapatilla(e) {
    e.preventDefault();
    const marca = document.querySelector("#zapatillaMarcaNuevo").value;
    const color = document.querySelector("#zapatillaColorNuevo").value;
    const anio = document.querySelector("#zapatillaAnioNuevo").value;
    const calidad = document.querySelector("#zapatillaCalidadNuevo").value;
    const id = document.querySelector("#zapatillaIdNuevo").value;

    // Crear un nuevo objeto con la información del país
    const zapatilla = {
        Marca: marca,
        color: color,
        anio: anio,
        calidad: calidad,
        id: id,
    };

    // Agregar el nuevo objeto al array de países
    borrarZapatillasViejos();
    zapatillas.push(zapatilla);

    localStorage.setItem("zapatillasEnLS", JSON.stringify(zapatillas));

    pintarZapatillas();
    formulario.reset();
}

//Borrar set de países viejos al agregar uno nuevo
const borrarZapatillasViejos = () => {
    const contenedor = document.getElementById("zapatilla-contenedor");
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
};

//Modal "Eliminar Países": Lista de opciones
const modalEliminarZapatillas = () => {
    const contenedorModal = document.getElementById("modal-opciones-eliminar");
    while (contenedorModal.firstChild) {
        contenedorModal.removeChild(contenedorModal.firstChild);
    }
    const option = document.createElement('option');
    option.innerHTML += `<option selected>Selecciona una zapatilla de esta lista</option>`
    contenedorModal.appendChild(option);
    zapatillas.forEach(zapatilla => {
        const option = document.createElement('option');
        option.innerHTML += `<option> ${zapatilla.Marca} </option>`
        contenedorModal.appendChild(option);
    });
};


// Modal "Eliminar Países": Funcionalidad botón Eliminar
const btnEliminarModal = document.getElementById("btnEliminarModal");
btnEliminarModal.addEventListener("click", eliminarZapatilla);

function eliminarZapatilla() {
    const select = document.getElementById("modal-opciones-eliminar");
    const marca = select.value;

    // Validar que se haya seleccionado un país
    if (marca === "Selecciona una zapatilla de esta lista") {
        alert("Selecciona una zapatilla de la lista para eliminarlo.");
        return;
    }
    // Eliminar el país del array
    const indice = zapatillas.findIndex(zapatilla => zapatilla.Marca === marca);
    zapatillas.splice(indice, 1);

    modalEliminarZapatillas();     // Actualizar la lista de países en el modal

    localStorage.setItem("zapatillasEnLS", JSON.stringify(zapatillas));

    borrarZapatillasViejos();
    pintarZapatillas();
}

//Cuerpo HTML: Mostrar Países
const pintarZapatillas = () => {
    const contenedor = document.getElementById("zapatilla-contenedor");
    zapatillas.forEach(zapatilla => {
        const div = document.createElement('div');
        div.classList.add('caja');
        div.innerHTML += `<div class="card-image">
                        <p class="titulos">${zapatilla.Marca}</p>
                        </div>
                        <div class="card-content">
                            <p>Color: ${zapatilla.color.toLocaleString()}</p>
                            <p>Año: ${zapatilla.anio.toLocaleString()}</p>
                            <p>Calidad: ${zapatilla.calidad}</p>
                            <p>Id: ${zapatilla.id.toLocaleString()}</p>                           
                        </div>`
        contenedor.appendChild(div);
    });
    modalEliminarZapatillas(); //Refrescar la lista de países en el modal
};

// Carga inicial de la pagina 
document.addEventListener('DOMContentLoaded', () => {
    pintarZapatillas();
    modalEliminarZapatillas();
});


