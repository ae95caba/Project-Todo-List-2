import { projectsObj } from "./projectsObj";

import { displayTasksOfEachProject } from "./displayTasks";

import webStorageApi from "./webStorageApi";
import { formatRFC3339 } from "date-fns";

// form part

const addTask = () => {
  /// gets elements need to add a tasks
  const addTaskButton = document.getElementById("add-task-button");
  const content = document.getElementById("content");
  const tittle = document.getElementById("tittle");
  ////

  addTaskButton.style.display = "none";

  //////////////////////  form //////////////////////

  const form = document.createElement("form");
  form.id = "form";

  const tittleLabel = document.createElement("label");
  tittleLabel.for = "tittle-input";
  tittleLabel.innerText = "Titulo:";

  const tittleInput = document.createElement("input");
  tittleInput.type = "text";
  tittleInput.maxLength = "40";
  tittleInput.id = "tittle-input";
  tittleInput.setAttribute("required", "");

  const detailsLabel = document.createElement("label");
  detailsLabel.for = "details-input";
  detailsLabel.innerText = "Detalles(opcional):";

  const detailsInput = document.createElement("input");
  detailsInput.id = "details-input";
  detailsInput.maxLength = "40";

  const dateLabel = document.createElement("label");
  dateLabel.for = "date-input";
  dateLabel.innerText = "Fecha(opcional):";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "date-input";

  const addButton = document.createElement("button");
  addButton.type = "submit";

  addButton.innerText = "Añadir";
  addButton.className = "add";

  const formButtonsContainer = document.createElement("div");
  formButtonsContainer.id = "form-buttons-container";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.innerText = "Cancelar";
  cancelButton.className = "cancel";

  formButtonsContainer.appendChild(addButton);
  formButtonsContainer.appendChild(cancelButton);

  form.appendChild(tittleLabel);
  form.appendChild(tittleInput);
  form.appendChild(detailsLabel);
  form.appendChild(detailsInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(formButtonsContainer);

  /* form.addEventListener("submit",(e){
		e.preventDefault();

	}) */

  content.appendChild(form);

  /* addButton.addEventListener("click", () => { */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //save form data to storage
    projectsObj[tittle.innerText][tittleInput.value] = {};
    projectsObj[tittle.innerText][tittleInput.value] = {
      details: detailsInput.value,
      date: dateInput.value,
    };
    webStorageApi();
    ////////////////////////////////

    addTaskButton.style.display = "inline";
    form.remove();

    ////////////////////////////
    displayTasksOfEachProject(content, tittle);
  });

  cancelButton.addEventListener("click", () => {
    form.remove();
    addTaskButton.style.display = "inline";
  });

  //////////////// ends form creation ////////////////
};

export default addTask;
