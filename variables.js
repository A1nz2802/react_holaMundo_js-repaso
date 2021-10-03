/* Al utilizar var, javascript mueve la declaracion de 
la variable al principio del documento de la siguiente forma: */
/* Para este curso, NO usaremos var */
var miVariable 
miVariable = 'variable'

/* Si llamamos una variable antes de declararla, js nos arroja un error */
/* La única forma de acceder a la variable creada con let es después de inicializarla */
let variable = 'variable creada con let'

/* Al igual que let, no podemos acceder a una constante antes de su inicialización */
/* No podemos re-asignarle el valor a una constante */
const constante = 'este valor es constante'

console.log(miVariable);