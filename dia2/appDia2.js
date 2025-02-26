// función para leer el valor de un elemento a través de id del html
function leerElementoPorId (elemento){
    let elementoHTML = document.getElementById(elemento);
    return elementoHTML.value;
}

function saludar() {
    // tomando valores de los input del html
    let nombreHTML = leerElementoPorId("nombre");
    let edadHTML = leerElementoPorId("edad");
    let lenguajeHTML = leerElementoPorId("lenguaje");

    // modificando el primer párrafo del html
    let pHTML = document.getElementById("saludo");
    pHTML.innerHTML = "Hola "+nombreHTML+", tienes "+edadHTML+" años y ya estás aprendiendo "+lenguajeHTML+"!";

    // preguntando opinión acerca del lenguaje
    let resp = parseInt(prompt(`¿Te gusta estudiar ${lenguajeHTML}? Responde con el número 1 para SÍ o 2 para NO.`));

    // modificando segundo párrafo en base a la respuesta para mostrarla en el html
    let p2HTML = document.getElementById("motivacion");
    if (resp == 1) {
        p2HTML.innerHTML = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
    } else if (resp == 2){
        p2HTML.innerHTML = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
    } 
}

