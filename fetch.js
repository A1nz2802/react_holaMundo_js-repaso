// Fetch API no está implementanda en NODE
// Por lo tanto debemos usar el navegador
// Fetch recibe una url y un objeto de configuración (opcional)
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    // Debemos transforma el responde a algo "manejable"
    // Los métodos disponibles se encuentran dentro del prototipo de la response
    // Métodos que nos interesan: (json, text)
    // text: Transforma una respuesta a una cadena de texto
    // json: Transforma la respuesta a un objeto json
    // AMBOS Métodos retornan PROMESAS
    /* .then((response) => console.log(response)) */
    .then((response) => response.json())
    // En el segundo then podemos tratar la data de la promesa que nos devolvio el .json()
    .then( data => console.log(data))

// ###################################################################

// Ejemplo cuando queremos hacer un POST
fetch(url, {
    method: 'POST', // GET, POST, PUT, PATCH, DELETE entre otros
    headers: {
        'Content-Type': 'application/json', // Le decimos al servidor que estamos enviando un objeto json
        'Authorization': 'Bearer acadebeexistiruntokendeautorización ' // Este parametro es opcional
    },
    // body contiene los datos en formato json que queremos enviar
    // Debemos enviarle como un string
    body: JSON.stringify({
        name: 'Chanchito feliz',
        website: 'google.com'
    })
})
    
    .then((response) => response.json())
    .then( data => console.log(data))

// ################################################################

// Mismo ejemplo con una función async
const fn = async() => {
    const response = await fetch(url, {
        method: 'POST', // GET, POST, PUT, PATCH, DELETE entre otros
        headers: {
            'Content-Type': 'application/json', // Le decimos al servidor que estamos enviando un objeto json
            'Authorization': 'Bearer acadebeexistiruntokendeautorización ' // Este parametro es opcional
        },
        // body contiene los datos en formato json que queremos enviar
        // Debemos enviarle como un string
        body: JSON.stringify({
            name: 'Chanchito feliz',
            website: 'google.com'
        })
    })

    const data = await response.json()
    console.log(data);
}

fn()

/* ¿Cuando debo usar las promesas con .then y cuando debo usarlas con 
async/await ? */
// La mayoria de las veces cuando trabajemos con promesas vamos a estar utilizando
// funciones del tipo async/await pero necesariamente no quiere decir que sean la mejor
// forma. Si utilizamos código FUNCIONAL entonces NO podemos usar el async/await
// async/await es código estrictamente imperativo
// usamos .then cuando hacemos código funcional