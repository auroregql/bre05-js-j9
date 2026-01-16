import { numbers } from "./numbers.js";

window.addEventListener("DOMContentLoaded", () => {

    function printArray(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i]);
        }
    }

    printArray(numbers);
});
