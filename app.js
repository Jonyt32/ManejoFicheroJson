//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch(comando){
    case 'listar':

        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'crear':
        let tarea =  porHacer.crear(argv.descripcion);
        console.log(tarea);
    default:
        console.log('Comando no definido');
}