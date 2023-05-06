document.getElementById("mi-boton").addEventListener("click", function(event) {
  // Prevenir el comportamiento predeterminado de la etiqueta <a>
  event.preventDefault();

  // Agregar la clase "animated" al elemento deseado para iniciar la animación
  document.querySelector(".right-section").classList.add("animated");
  
  // Esperar a que la animación termine antes de redirigir
  setTimeout(function() {
    // Redirigir al usuario al enlace deseado
    window.location.href = "file:///C:/Users/perey/Documents/proyectos%20web/certificaciones/index.html";
  }, 1500); // 2500 ms = 2.5 segundos
});




// Obtiene todos los botones con la clase 'button-1' a 'button-4'
var buttons = document.querySelectorAll('.button-1, .button-2, .button-3, .button-4');

// Itera sobre todos los botones y agrega un listener a cada uno
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    event.preventDefault(); // Evita la redirección por defecto
    
    var button = this;
    button.classList.add('boton-animado'); // Agrega la clase 'animated' al botón para que se reproduzca la animación
    
    button.addEventListener('animationend', function() {
      // Elimina la clase 'animated' después de que termine la animación
      button.classList.remove('boton-animado');
      
      // Abre la URL en una nueva pestaña después de que termine la animación
      window.open(button.parentNode.href, '_blank');
    }, {once: true}); // El listener se ejecuta solo una vez
  });
}



var buttons = document.querySelectorAll('.estilo-boton');

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Evita la redirección por defecto

    button.classList.add('boton-animado'); // Agrega la clase 'animated' al botón para que se reproduzca la animación

    button.addEventListener('animationend', function() {
      // Elimina la clase 'animated' después de que termine la animación
      button.classList.remove('boton-animado');

      // Abre la URL en una nueva pestaña después de que termine la animación
      window.open(button.parentNode.href, '_blank');
    }, {once: true}); // El listener se ejecuta solo una vez
  });
});
