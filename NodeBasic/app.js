// para ejecutarlo debo colocar node app -b=5 


// manera normal
//const multiplciar = require('./Multiplicar/multiplicar')


// manera ganster de instanciar un archivo de nodejs
const { crearArchivo2 } = require('./Multiplicar/multiplicar');
//const argv = require('yargs');
var colors = require('colors');

//como colocar colores ejemplo
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

//puedo quemar el parametro de base
//let base1 = "15";


//o se lo puedo enviar por consola como voy a hacer por el momento

let argv = process.argv;

let parametro = argv[2];
console.log(parametro);
let base = parametro.split('=')[1]

//como es una promesa me devuelve un then y un catch
crearArchivo2(base).then((result) => {
    console.log(`Archivo creado ${result}`);
}).catch((err) => {
    console.log(`El error es : ${err}`);

});