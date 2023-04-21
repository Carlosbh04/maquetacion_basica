
  function enviarDatos(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Guardar los datos en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('mensaje', mensaje);

    // Redirigir a la página de éxito
    window.location.href = 'gracias.html';
  }

  // Asignar el manejador de eventos al formulario
  const form = document.querySelector('form');
  form.addEventListener('submit', enviarDatos);


const nombre = localStorage.getItem('nombre');
const email = localStorage.getItem('email');
const telefono = localStorage.getItem('telefono');
const mensaje = localStorage.getItem('mensaje');
