document.addEventListener("DOMContentLoaded", function () {
  const chatBody = document.querySelector(".chat-body");
  const input = document.querySelector("#chatInput");
  const sendButton = document.querySelector("#sendButton");

  const respuestas = [
    "Gracias por compartir cómo te sientes.",
    "Recuerda que estás haciendo lo mejor que puedes.",
    "Respira hondo, todo pasará.",
    "Estoy aquí para escucharte.",
    "¿Quieres contarme qué te hizo sentir así?",
    "Puedes hablarme con confianza.",
    "Es un buen momento para agradecer algo bueno del día.",
    "¿Te gustaría hacer una actividad de relajación?",
    "Recuerda que no estás solo/a.",
    "Eres muy valioso/a.",
  ];

  // Mostrar primer saludo automático
  mostrarMensaje("Hola, ¿cómo te sientes hoy?", "bot");

  sendButton.addEventListener("click", enviarMensaje);
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") enviarMensaje();
  });

  function enviarMensaje() {
    const mensaje = input.value.trim();
    if (mensaje !== "") {
      mostrarMensaje(mensaje, "user");
      input.value = "";

      setTimeout(() => {
        const respuesta =
          respuestas[Math.floor(Math.random() * respuestas.length)];
        mostrarMensaje(respuesta, "bot");
      }, 800);
    }
  }

  function mostrarMensaje(texto, tipo) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("message", tipo);
    mensajeDiv.textContent = texto;
    chatBody.appendChild(mensajeDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});
