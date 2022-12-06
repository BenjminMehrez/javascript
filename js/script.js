function darBienvenida() {
    alert("Bienvenido")
}

darBienvenida();

// function calcularEdad() {
//     const year = 2022;
//     let nacimiento = parseInt(prompt("Ingresa el año en que naciste"));
//     let edad = year - nacimiento;
//     alert("Tenes " + edad + " años");
// }

//calcularEdad();


// function multiplica(num1, num2) {
//     let resultado = num1 * num2;
//     alert("El resultado de multiplicar " + num1 + " x " + num2 + " es: " + resultado);
// }


//multiplica(6,6);


// let primerNum = parseInt(prompt("Ingrese el primer numero"));
// let segundoNum = parseInt(prompt("Ingrese el segundo numero"));

// multiplica(primerNum, segundoNum);


function calcularenvio(precio){
    let totalenvio = precio * 1.50;
    alert("El precio total del envio es de: $"+totalenvio);
}


// let precioProd = parseFloat(prompt("Ingresa el precio del producto"))
// calcularenvio(precioProd);
// for (let i=1; i<4;i++){
//     let precioProd = parseFloat(prompt("Ingrese el precio del segundo producto producto"));
//     calcularenvio(precioProd);
// }

let precioProd = parseFloat(prompt("Ingrese el precio del producto (0 para salir)"));
while(precioProd !=0){
    calcularenvio(precioProd);
    precioProd = parseFloat(prompt("Ingrese el precio del producto (0 para salir)"));
}

function adios(){
    alert("Que tengo un lindo dia")
}

adios();