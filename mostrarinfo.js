const { cursos } = require('./data.js');


let MostrarData = () => {
    for (i = 0; i <= 2; i++) {
        (function(infoData) {
            setTimeout(function() {
                console.log('Curso ' + cursos[infoData].id + ': ' + cursos[infoData].nombre + ', tiene una duración de ' + cursos[infoData].duracion + ' horas, y un precio de $' + cursos[infoData].precio);
            }, 2000 * (infoData + 1));
        })(i);
    }
}

module.exports = {
    MostrarData
};