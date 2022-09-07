i; // Import modules
import "./form";
import "./submit";
import { initdb, getDb, postDb } from "./database";
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
// Add images on load
window.addEventListener("load", function () {
  initdb();
  fetchCards();

  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});
