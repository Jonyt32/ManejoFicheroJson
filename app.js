//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');
const colores = require('colors');

console.log(argv);

let comando = argv._[0];

switch(comando){
    case 'listar':
        
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('========= Por hacer =========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('=============================='.green);
        }

        break;
    case 'crear':
        let tarea =  porHacer.crear(comando.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':

        let actualizo = porHacer.actualizar(comando.descripcion, comando.completado);
        if(actualizo){
            console.log('actualizo');
        }
        else{
            console.log('No actualizo');
        }
        //console.log(tarea);
        break;
    case 'borrar':

        let borro = porHacer.borrar(argv.descripcion);
        if(borro){
            console.log('borro');
        }
        else{
            console.log('no borro');
        }
        break;
    default:
        console.log('Comando no definido');
}