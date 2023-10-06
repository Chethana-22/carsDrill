import { inventory } from "../data.js";
import { olderCar } from "../problem5.js";

let resultArray = olderCar(inventory);
for(let i=0;i<resultArray.length;i++){
    console.log(resultArray[i]);
}