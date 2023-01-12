const howToUseMessage = () => {
  const messageContainer = document.createElement("div");
  messageContainer.id = "message-container";

  const messageTittle = document.createElement("h2");
  messageTittle.innerText = "Crea una tarea !";

  const messageInstrucctions = document.createElement("p");
  /* const messageImg = document.createElement("img"); */

  messageInstrucctions.innerHTML =
    "Usa el menu para crear una nueva <strong>CATEGORIA</strong> donde se guardaran tus tareas. Ejemplo: <strong>COMPRAS</strong> donde guardaras las compras que no puedes olvidarte de hacer!";

  /* messageImg.src = ""; */

  messageContainer.appendChild(messageTittle);
  messageContainer.appendChild(messageInstrucctions);
  /* messageContainer.appendChild(messageImg); */

  return messageContainer;
};
const noTasksMessage = () => {
  const messageContainer = document.createElement("div");
  messageContainer.id = "message-container";
  const messageTittle = document.createElement("h2");
  messageTittle.innerText = "Felicidades, no hay tareas!";
  const messageImg = document.createElement("img");
  messageImg.src = "./anime.png";

  messageContainer.appendChild(messageTittle);
  messageContainer.appendChild(messageImg);

  return messageContainer;
};

export { howToUseMessage, noTasksMessage };
