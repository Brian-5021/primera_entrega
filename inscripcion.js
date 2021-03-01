const { cursos } = require('./data');
const { MostrarData } = require('./mostrarinfo');
const { argv, opciones } = require('./matricular');
const fs = require('fs');
var express = require('express')
var app = express()

if (argv.id == null) {
    console.log(MostrarData());
} else {
    let argumentos = cursos.find(argumentos => argumentos.id == argv.id);
    var infoData;
    let course = (params) => {
        if (argumentos) {
            for (i = 0; i <= 2; i++) {
                if (cursos[i].id == params) {
                    (function(ifa) {
                        infoData = 'Curso ' + cursos[ifa].id + ': ' + cursos[ifa].nombre + ', tiene una duración de ' + cursos[ifa].duracion + ' horas, y un precio de $' + cursos[ifa].precio;
                    })(i);
                }
            }
        }
    }
    course(argv.id);

    let archivotxt = (alumno) => {
        texto = 'Se ha registrado un nuevo estudiante: \n Nombre: ' + argv.nombre + '\n Cédula: ' + argv.cedula +
            '\n ' + infoData;
        fs.writeFile('matricula.txt', texto, (err) => {
            if (argv.id > 3 || argv.id < 1) {
                (console.log('La identificación del curso no se encuentra, por favor revisa nuestra información y digita el id correcto: \n' + imprimirDatos()));
            } else {
                console.log('Qué bien se ha creado el archivo con la información!!!');
                app.get('/', function(req, res) {
                    res.send(texto)
                })
            }

        })
    }

    archivotxt(argv);
    app.listen(3000)
}