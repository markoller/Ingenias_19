let tallerJson = [`{
    "Danza": "Contemporaneo",
    "Horario":"Lunes 14 a 16"
    }`,
    `{
    "Danza": "Ball Room",
    "Horario":"Martes 14 a 16"
    }`,
    `{
    "Danza": "Infantil",
    "Horario":"Jueves 17 a 19"
    }`,
]

console.log(tallerJson)
console.log(typeof tallerJson)

//let jsonConvertido= JSON.parse(tallerJson)
//console.log(jsonConvertido)
//console.log(typeof jsonConvertido)
//localStorage; setItem

localStorage.setItem("nombre", prompt ("ingrese su nombre"))
localStorage.setItem("mail", prompt ("Ingrese su mail"))
localStorage.setItem("edad", prompt ("Ingrese su edad"))
localStorage.setItem("tallerEdad", "Adultos")
localStorage.setItem("danzaTipo", "Contemporaneo")
localStorage.setItem("Horario", "Lunes 14 a 16")

// localStorage: getItem

let nombre = localStorage.getItem("nombre")
let mail = localStorage.getItem("mail")
let edad = localStorage.getItem("edad")
let tallerEdad = localStorage.getItem("tallerEdad")
let danzaTipo = localStorage.getItem("danzaTipo")
let Horario = localStorage.getItem("Horario")

console.log(nombre)
console.log(mail)
console.log(edad)
console.log(tallerEdad)
console.log(danzaTipo)
console.log(Horario)

let baseDatos = [];

baseDatos.push(nombre);
baseDatos.push(mail);
baseDatos.push(edad);
baseDatos.push(tallerEdad);
baseDatos.push(danzaTipo);
baseDatos.push(Horario);

let datoConvertido = JSON.stringify(baseDatos);
console.log(datoConvertido);

localStorage.setItem("datosUsuario", datoConvertido);



alert( nombre + " El taller diponible es: " + danzaTipo + " y el horario es: " + Horario)