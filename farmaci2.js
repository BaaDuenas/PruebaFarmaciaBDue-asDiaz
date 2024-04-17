// Selección de elementos DOM necesarios para el control del carrusel.
const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

// Añade eventos de clic a los botones para mover el carrusel a la izquierda o derecha.
btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

// Establece un intervalo para mover automáticamente el carrusel a la derecha cada 3 segundos.
setInterval(() => {
    moveToRight()
}, 3000);

// Variables para controlar el estado del carrusel.
let operacion = 0,  // Almacena el porcentaje actual de desplazamiento del carrusel.
    counter = 0,    // Contador de la imagen actual mostrada en el carrusel.
    widthImg = 100 / sliderSection.length; // Calcula el ancho de cada imagen como porcentaje del ancho total.

// Función para mover el carrusel hacia la derecha.
function moveToRight() {
    if (counter >= sliderSection.length-1) {  // Si el carrusel está en la última imagen, reinicia.
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`; // Mueve el carrusel al inicio.
        slider.style.transition = "none";  // Elimina la transición para evitar el efecto visual al reiniciar.
        return;
    } 
    counter++;  // Incrementa el contador para moverse a la siguiente imagen.
    operacion = operacion + widthImg;  // Incrementa el porcentaje de desplazamiento.
    slider.style.transform = `translate(-${operacion}%)`; // Aplica el desplazamiento.
    slider.style.transition = "all ease .6s"  // Aplica una transición suave para el movimiento.
}  

// Función para mover el carrusel hacia la izquierda.
function moveToLeft() {
    counter--;  // Decrementa el contador para moverse a la imagen anterior.
    if (counter < 0) {  // Si el carrusel está en la primera imagen, pasa a la última.
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)  // Calcula el porcentaje de desplazamiento al final.
        slider.style.transform = `translate(-${operacion}%)`; // Mueve el carrusel al final.
        slider.style.transition = "none";  // Elimina la transición para evitar el efecto visual al cambiar.
        return;
    } 
    operacion = operacion - widthImg;  // Decrementa el porcentaje de desplazamiento.
    slider.style.transform = `translate(-${operacion}%)`; // Aplica el desplazamiento.
    slider.style.transition = "all ease .6s"  // Aplica una transición suave para el movimiento.
}
