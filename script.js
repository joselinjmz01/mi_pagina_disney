// Cuando le das clic a una foto de la galería, te dice el nombre
document.querySelectorAll(".galeria div").forEach(function(carta) {
  carta.addEventListener("click", function() {
    let nombre = carta.querySelector("p").textContent;
    alert("¡Elegiste " + nombre + " ✨");
  });
});

// Para que los botones de arriba bajen suavecito
document.querySelectorAll('a[href^="#"]').forEach(function(enlace) {
  enlace.addEventListener("click", function(e) {
    let destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mensajito cuando abres la página
console.log("¡Bienvenidos a la magia! ✨");