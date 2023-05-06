document.getElementById("mi-boton").addEventListener("click", function(event) {
  // Prevenir el comportamiento predeterminado de la etiqueta <a>
  event.preventDefault();

  // Agregar la clase "animated" al elemento deseado para iniciar la animación
  document.querySelector(".right-section").classList.add("animated");
  
  // Esperar a que la animación termine antes de redirigir
  setTimeout(function() {
    // Redirigir al usuario al enlace deseado
    window.location.href = "https://cristianpz.github.io";
  }, 1500); // 2500 ms = 2.5 segundos
});
