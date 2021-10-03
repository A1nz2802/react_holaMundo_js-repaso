/* Expresión de clase 
const Rectangulo = class R {

} */

/* Declaración de clase */
class Rectangulo {

}

function Cuadrado() {}
/* console.log(Cuadrado, Rectangulo); */

const r = new Rectangulo()

/* Hoisting: Se toman las variables definidas 
con var o funciones definidas con la palabra 
reservada function y las lleva al comienzo del archivo */

/* Con la palabra reservada CLASS, no sucede el hoisting */

class Chancho {
    propiedad = 'mi propiedad'
    #hambre = false // Los campos privados deben ser definidos aquí
    static propiedadEstatica = 42
    constructor(estado = 'feliz', hambre = false) {
        this.estado = estado;
        this.#hambre = hambre;
    }
    
    hablar() {
        console.log(`Soy un chancho ${this.estado} ${this.#hambre ? 'con Mucha hambre' : 'satisfecho!'}`)
    }

    // Método estático
    static comer() { 
        // Este método solamente se puede acceder a travez de la clase 
        // Y no es necesario generar una nueva instancia de clase
        /* console.log(this.propiedad, 'estoy comiendo!'); */
        console.log(this.propiedadEstatica, 'estoy comiendo!');
    } 
    // Los métodos estáticos NO pueden acceder a las propiedades puclicas o privadas de la clase
    // Sólo pueden acceder a propiedades estaticas
}

Chancho.comer()
const feliz = new Chancho('feliz')
const triste = new Chancho('triste')
const nose = new Chancho()
// feliz.hablar()
console.log(feliz)
// triste.hablar()
// nose.hablar()
/* console.log(feliz.__proto__.hablar) */
/* Cuando llamamos a una clase con la palabra reservada NEW
se llama al constructor de la clase */
// output: Soy un chancho feliz
// No podemos llamar a una clase sin la palabra NEW