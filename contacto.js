var nombreYApellido = document.getElementById('nomYAp');
var Email = document.getElementById('Email');
var Telefono = document.getElementById('Telefono');
var Comentario = document.getElementById('Comentario');

function enviarFormulario() {
    var arrayErrores = [];

    if (nombreYApellido.value === null | nombreYApellido.value === '') {
        arrayErrores.push('ingresa tu nombre y apellido');
    }

    if (Email.value === null | Email.value === '') {
        arrayErrores.push('ingresa tu Email');
    }

    if (Telefono.value === null | Telefono.value === '') {
        arrayErrores.push('ingresa tu Telefono');
    }

    if (Comentario.value === null | Comentario.value === '') {
        arrayErrores.push('ingresa tu Comentario');
    }

    return false;
}