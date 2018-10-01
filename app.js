const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

//Entrada node app.js --base=5
//let base = '7';

/*let argv = process.argv;

let parametro = argv[2];
let base = parametro.split('=')[1]*/

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(lista =>{
            console.log(lista.red);
        })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(arc => {
            console.log(`Archivo creado: ${arc}`.green);
        }).catch(e => {
            console.log(e);
        })
        break;
    default:
        console.log('Comando no reconocido');
}

