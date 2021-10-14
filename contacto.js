var nombreYApellido = document.getElementById('nomYAp');
var Email = document.getElementById('Email');
var Telefono = document.getElementById('Telefono');
var Comentario = document.getElementById('Comentario');
var errorNombreYAp = document.getElementById('errorNombreYAp');
var errorEmail = document.getElementById('errorEmail');
var errorTelefono = document.getElementById('errorTelefono');
var errorComentario = document.getElementById('errorComentario');
errorNombreYAp.style.color = 'red'
errorEmail.style.color = 'red'
errorTelefono.style.color = 'red'
errorComentario.style.color = 'red'

function enviarFormulario() {

    if (nombreYApellido.value === null | nombreYApellido.value === '') {
        errorNombreYAp.innerHTML = 'ingresa tu nombre y apellido';
    }

    if (Email.value === null | Email.value === '') {
        errorEmail.innerHTML = 'ingresa tu email';
    }

    if (Telefono.value === null | Telefono.value === '') {
        errorTelefono.innerHTML = 'ingresa tu telefono';
    }

    if (Comentario.value === null | Comentario.value === '') {
        errorComentario.innerHTML = 'ingresa un comentario';
    }

    return false;
}