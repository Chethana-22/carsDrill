import { inventory } from "../data.js";
import { sortCars } from "../problem3.js";

let result = sortCars(inventory);
for(let i=0;i<result.length;i++){
    console.log(result[i].car_model);
}
