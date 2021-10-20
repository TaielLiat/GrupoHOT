var nombreYApellido = document.getElementById('nomYAp');
var Email = document.getElementById('Email');
var Telefono = document.getElementById('Telefono');
var Comentario = document.getElementById('Comentario');
var errorNombreYAp = document.getElementById('errorNombreYAp');
var errorEmail = document.getElementById('errorEmail');
var errorTelefono = document.getElementById('errorTelefono');
var errorComentario = document.getElementById('errorComentario');
errorNombreYAp.style.color = 'red';
errorEmail.style.color = 'red';
errorTelefono.style.color = 'red';
errorComentario.style.color = 'red';

function enviarFormulario() {
    var mostrarModal = true;
    if (nombreYApellido.value === null | nombreYApellido.value === '') {
        errorNombreYAp.innerHTML = 'ingresa tu nombre y apellido';
        mostrarModal = false;
    } else {
        errorNombreYAp.innerHTML = '';
    }

    if (Email.value === null | Email.value === '') {
        errorEmail.innerHTML = 'ingresa tu email';
        mostrarModal = false
    } else {
        errorEmail.innerHTML = '';
    }

    if (Telefono.value === null | Telefono.value === '') {
        errorTelefono.innerHTML = 'ingresa tu telefono';
        mostrarModal = false
    } else {
        errorTelefono.innerHTML = '';
    }

    if (Comentario.value === null | Comentario.value === '') {
        errorComentario.innerHTML = 'ingresa un comentario';
        mostrarModal = false
    } else {
        errorComentario.innerHTML = '';
    }

    if (mostrarModal) {
        modal_container.classList.add('show');
    }

    return false;
}

const boton_enviar = document.getElementById('send');
const modal_container = document.getElementById('modal_container');
const boton_close = document.getElementById('close');

boton_close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

boton_enviar.addEventListener('click', () => {
    //aca irian las acciones que ocurririan en el caso de presionar "si"
});