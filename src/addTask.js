import { projectsObj } from "./projectsObj";

import { displayTasksOfEachProject } from "./displayTasksOfEachProject";

import mouseOverOutClick from "./mouseOverOutClick";
import webStorageApi from "./webStorageApi";

const addTask = () => {
  /// gets elements
  const addTaskButton = document.getElementById("add-task-button");
  const content = document.getElementById("content");
  const tittle = document.getElementById("tittle");
  ////

  addTaskButton.style.display = "none";

  /// creates form
  const form = document.createElement("form");
  form.id = "form";

  const tittleLabel = document.createElement("label");
  tittleLabel.for = "tittle-input";
  tittleLabel.innerText = "Titulo:";

  const tittleInput = document.createElement("input");
  tittleInput.type = "text";
  tittleInput.id = "tittle-input";

  const detailsLabel = document.createElement("label");
  detailsLabel.for = "details-input";
  detailsLabel.innerText = "Detalles(opcional):";

  const detailsInput = document.createElement("input");

  detailsInput.id = "details-input";

  const dateLabel = document.createElement("label");
  dateLabel.for = "date-input";
  dateLabel.innerText = "Fecha(opcional):";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "date-input";

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.innerText = "Añadir";
  addButton.className = "add";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.innerText = "Cancelar";
  cancelButton.className = "cancel";

  form.appendChild(tittleLabel);
  form.appendChild(tittleInput);
  form.appendChild(detailsLabel);
  form.appendChild(detailsInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);

  form.appendChild(addButton);
  form.appendChild(cancelButton);

  content.appendChild(form);
  // ends form creation //

  addButton.addEventListener("click", () => {
    projectsObj[tittle.innerText][tittleInput.value] = {};
    projectsObj[tittle.innerText][tittleInput.value] = {
      details: detailsInput.value,
      date: dateInput.value,
    };
    webStorageApi();
    addTaskButton.style.display = "inline";
    form.style.display = "none";
    displayTasksOfEachProject(content, addTaskButton, tittle);
  });

  cancelButton.addEventListener("click", () => {
    //form.style.display= "none";
    form.remove();
    addTaskButton.style.display = "inline";
  });
};

export default addTask;
