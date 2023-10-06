import { inventory } from "../data.js";
import { getYears } from "../problem4.js";

let years = getYears(inventory);
for(let i=0;i<years.length;i++){
    console.log(years[i]);
}