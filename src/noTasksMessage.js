const noTasksMessage = () => {
  const messageContainer = document.createElement("div");
  messageContainer.id = "message-container";
  const messageTittle = document.createElement("p");
  messageTittle.innerText = "Felicidades, no hay tareas!";
  const messageImg = document.createElement("img");
  messageImg.src = "./anime.png";

  messageContainer.appendChild(messageTittle);
  messageContainer.appendChild(messageImg);

  return messageContainer;
};

export { noTasksMessage };
