const descripcion ={
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea por hacer'
}

const argv = require('yargs')
            .command('borrar','borra las tareas por hacer',{
                descripcion
            })
            .command('crear','Crea las tareas por hacer',{
                descripcion
            })
            .command('Actualizar','Actualiza e estado completo de una tarea',{
                descripcion,
                completado
            })
            .help()
            .argv;

module.exports = {
    argv
}