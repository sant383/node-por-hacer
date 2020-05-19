const opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opt)
    .command('actualizar', 'Actualiza el estado de completado', opt)
    .command('borrar', 'Borra una tarea', opt)
    .help()
    .argv;

module.exports = {
    argv
}