const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('matricular', 'Matricular alumno', opciones)
    .argv


module.exports = {
    opciones,
    argv
};