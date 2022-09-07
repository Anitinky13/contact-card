i; // Import modules
import "./form";
import "./submit";
import { initdb, getDb, postDb, deleteDb, editDb } from "./database";
// Import CSS files
import "../css/index.css";
//import bootstrap
import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Import images
import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";
//import fetchCards
import { fetchCards } from "./cards";
import { format } from "path";
// Add images on load
window.addEventListener("load", function () {
  initdb();
  fetchCards();

  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});

window.editCard = (e) => {
  //Grabs the id from the button element attached to the contact card and sets a global variable that will be used in the form element.
  profileId = parseInt(e.dataset.id);

  //grabs information to pre-populte edit form
  let editName = e.dataset.name;
  let editEmail = e.dataset.email;
  let editPhone = e.dataset.phone;

  document.getElementById("name").value = editName;
  document.getElementById("email").value = editEmail;
  document.getElementById("phone").value = editPhone;

  format.style.display = "block";

  //toggles the Submit button so that it now Updates an existing contact instead of posting a new one
  submitBtnToUpdate = true;
};
// Card functionality
// Adds deleteCard() to the global scope so each card has access to it.
window.deleteCard = (e) => {
  // Grabs the id from the button element attached to the contact card.
  let id = parseInt(e.id);
  // Delete the card
  deleteDb(id);
  // Reload the DOM
  fetchCards();
};
