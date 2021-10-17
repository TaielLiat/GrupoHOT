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
    var mostrarModal = true;
    if (nombreYApellido.value === null | nombreYApellido.value === '') {
        errorNombreYAp.innerHTML = 'ingresa tu nombre y apellido';
        mostrarModal = false;
    }

    if (Email.value === null | Email.value === '') {
        errorEmail.innerHTML = 'ingresa tu email';
        mostrarModal = false
    }

    if (Telefono.value === null | Telefono.value === '') {
        errorTelefono.innerHTML = 'ingresa tu telefono';
        mostrarModal = false
    }

    if (Comentario.value === null | Comentario.value === '') {
        errorComentario.innerHTML = 'ingresa un comentario';
        mostrarModal = false
    }

    if(mostrarModal) {
        modal_container.classList.add('show'); 
    }

    return false;
}

const open = document.getElementById('enviar');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});