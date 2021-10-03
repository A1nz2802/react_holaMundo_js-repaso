// Rest Operator
const rest = (a, ...argumentos) => {
    // console.log(a);
    // console.log(argumentos);
}

rest(1,2,3)
// Cuando queramos utilizar el Rest Operator en las funciones 
// tienen que ser el último parámetro (...argumentos) que nosotros definamos

// object destructuring
const obj1 = {
    a: 1, b: 2, c: 3, d: 4
}

// const { a, b, ...restobj} = obj1
// console.log(a, b, restobj)

const arr = [1, 2, 3, 4, 5]

const [a, b, ...r] = arr
console.log(a,b,r); 

const useSate = () => ['valor', () => {}]

const [valor, setValor] = useSate();
console.log(valor, setValor)

