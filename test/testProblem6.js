import { inventory } from "../data.js";
import { getBMWandAudi } from "../problem6.js";


let result = getBMWandAudi(inventory);
console.log(JSON.stringify(result));