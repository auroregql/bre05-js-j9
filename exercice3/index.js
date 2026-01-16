// vos imports ici
import {numbers} from "./numbers.js";
import {computeAverage} from "./functions.js";

window.addEventListener("DOMContentLoaded", () => {
   // votre code ici
   const moyenne = computeAverage(numbers);
   console.log(moyenne);
});