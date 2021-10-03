// ############### 1. Método FILTER ########################
// Filter toma todos los valores de un arreglo y devuelve sólamente
// los que sean evaluados como TRUE
// Nota1: Filter devuelve otro arreglo
// Nota2: Este arreglo devuelto es IGUAL o MENOR longitud del arreglo original
const arr = [5, 1, 2, 3, 4]

/* 
const r = arr.filter(element => element > 2)
console.log(r); output: [3, 4]
 */

const r = arr.filter((element, index) => {
    // console.log(index)
    return element > 2
})
// console.log(r);
// Observamos que también podemos utilizar el índice (index) del arreglo con filter

// ############### 2. Método MAP ########################
// Map toma todos los elementos de un arreglo y les aplica una función
// Finalmente retorna un arreglo de la misma longitud 

// const mapped = arr.map((el) => `<h1>${el}</h1>`)
// console.log(mapped)

// Ejemplo real
const users = [
    { id: 1, name: 'Chanchito feliz'},
    { id: 2, name: 'Chanchito triste'},
    { id: 3, name: 'Chanchito emocionado'},
    { id: 4, name: 'Felipe'},
]

const mapped = users.map((user) => `<h1>${user.name}</h1>`)
// console.log(mapped)

// ############### 3. Método REDUCE ########################
// Reduce toma todos los elementos de un arreglo y podremos devolver lo que queramos

// Nota: El acumulador son TODOS los valores ACUMULADOS que tenemos en el arreglo
// 0 es el valor inicial del ACUMULADOR
// reduce retorna valor del acumulador
// Nota: El valor inicial es OPCIONAL

// const r1 = arr.reduce((acumulador, el) => acumulador + el, 0)

// const getMax = (a, b) => Math.max(a, b)
// const r1 = arr.reduce( getMax, 0)
// console.log(r1)
// reduce se utiliza mucho como una función muy flexible
// A veces necesitaremos usar MAP y FILTER al mismo tiempo, ahí podemos usar REDUCE
/* 
const r2 = users.reduce((acc, el) => 
    `${acc === '' ? '' : `${acc}, ` }${el.name}`, '')
console.log(r2)
 */

const r3 = users.reduce((acc, el) => {
    if (el.id < 2) {
        return acc
    }
    return acc.concat(el)
}, [])
console.log(r3)