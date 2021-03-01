const { cursos } = require('./data');
const { MostrarData } = require('./mostrarinfo');
const { argv, opciones } = require('./matricular');
const { fren } = require('./inscripcion');
const fs = require('fs');


let archivotxt = (estudiante) => {
    texto = 'Se ha registrado un nuevo estudiante: \n Nombre: ' + argv.nombre + '\n Cédula: ' + argv.cedula +
        '\n ' + infoCurso;
    fs.writeFile('matricula.txt', texto, (err) => {
        if (argv.id > 3 || argv.id < 1) {
            (console.log('La identificación del curso no se encuentra, por favor revisa nuestra información y digita el id correcto: \n' + imprimirDatos()));
        } else {
            console.log('Qué bien se ha creado el archivo con la información!!!');
        }

    })
}

app.use(express.static(__dirname + '/'))



archivotxt(argv);