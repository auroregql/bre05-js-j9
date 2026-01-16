import { numbers } from "./numbers.js"; 

export function computeAverage(numbers) {
    let sum = 0;

    for (let number of numbers) {   
        sum += number;            
    }

    let average = sum / numbers.length; 

    return average;
}

console.log(computeAverage(numbers)); 
