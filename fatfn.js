/* Todas las funciones que se declaren con la palabra reservada FUNCTION
Cumplen con 2 objetivos:
- Pueden tener un contexto de this
- Y podemos utilizarlos para implementar herencia basada en prototipos en js
Nota: Las funciones también son clases en JS pero son CLASES basadas en PROTOTIPOS.
 */

/* Js es un lenguaje MultiParadigma */
/* Implementa la herencia basada en prototipos */
function funcionRandom() {
    this.prop = 'propiedad'
    return 'Chanchito feliz'
}

funcionRandom.prototype.lala = function() {} // funcion anónima

const r =  new funcionRandom()
/* console.log(r.__proto__) */
// console.log(r)
// output: funcionRandom { prop: 'propiedad' }
/* Cuando llamamos una función con new, pasa lo siguiente:
1- Se crea un objeto literal DEL AIRE
2- Este objeto literal empieza a tomar todas las propiedades asignemos mediante la palabra reservada this  
3- Ignora totalmente el return de la función 
4- Retorna de manera implícita el THIS 
5- El prototipo de las funciones se le está asignando al this */


/*  ############################################## */

// fat arrow functions
console.log(this)
const fatFn = () => { // NO TIENEN CONTEXTO DE THIS!!!!
    this.prop = 'lala'
}

const r2 = fatFn()
console.log(this)
// output: error, fatFn no es un constructor
// Las fat arrow fn no pueden ser llamadas con NEW
// Es decir NO existe un this en este tipo de funciones
// Viendo el ejemplo, el this que estamos imprimiendo es el this que está en un scope anterior de la función

const fatFn2 = () => 2
/* const fatFn2 = () => return 2 */
console.log(fatFn2())
// output: 2
// Los fat arrow fn que no tengan las llaves, quiere decir que tiene un return implícito


 
 