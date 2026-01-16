// vos imports ici
import {changeTextColor} from "./dom-utils.js";

window.addEventListener("DOMContentLoaded", () => {
   // votre code ici
   let textToColor = document.querySelector("#text-to-color");
   let color = textToColor.style.color; 
   textToColor.style.color = "red";
});