const argv = require('yargs')
            .command('borrar','borra las tareas por hacer',{
                descripcion:{
                    alias: 'd',
                    demand: true,
                    desc: 'Descripción de la tarea por hacer'
                }
            })
            .command('crear','Crea las tareas por hacer',{
                descripcion:{
                    alias: 'd',
                    demand: true,
                    desc: 'Descripción de la tarea por hacer'
                    
                }

            })
            .command('Actualizar','Actualiza e estado completo de una tarea',{
                descripcion:{
                    alias: 'd',
                    demand: true,
                    desc: 'Descripción de la tarea por hacer'
                    
                },
                completado:{
                    alias: 'c',
                    default: true,
                    desc: 'Marca como completado o pendiente la tarea por hacer'
                }
            })
            .help()
            .argv;

module.exports = {
    argv
}