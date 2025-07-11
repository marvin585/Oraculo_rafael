
const respuestas = [
    "Sí, pero no como esperas.",
    "No por ahora, pero pronto cambiará.",
    "La energía fluye a tu favor.",
    "Es posible si crees en ello.",
    "Pregunta de nuevo bajo la luna llena.",
    "No es el momento adecuado.",
    "Sí, sin duda alguna.",
    "Tal vez... todo depende de ti.",
    "El universo tiene un plan para ti.",
    "La respuesta está en tu interior."
];

function consultarOraculo() {
    const pregunta = document.getElementById('pregunta').value.trim();
    const respuestaDiv = document.getElementById('respuesta');
    if (pregunta === "") {
        respuestaDiv.innerHTML = "El Oráculo no puede responder si no preguntas nada...";
        return;
    }
    const indice = Math.floor(Math.random() * respuestas.length);
    respuestaDiv.innerHTML = respuestas[indice];
}
