//let  nombre_usuario_1= prompt("ingrese tu nombre")
/*console.log("tu nombre es: "+ nombre_usuario_1)
console.log(`tu nombre es: ${nombre_usuario_1}`)//(``)*/
let nombre = prompt("agrega tu nombre:")
let edad = prompt("agrega tu edad")
let anio_actual = prompt("ingrese los cuatro digitos del años actual ")
let nacimiento = parseInt(anio_actual - edad )//este es para numeros int = numero entero

let junH = nacimiento + 65;
let jubM = nacimiento + 57;

alert(nombre + "se jubila en: " +  jubM)