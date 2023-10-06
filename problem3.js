
// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and log
// the results in the console as it was returned.

export function sortCars(inventory){
    for(let i=0;i<inventory.length-1;i++){
        for(let j=i+1;j<inventory.length;j++){
            const modelA = inventory[i].car_model.toLowerCase();
            const modelB = inventory[j].car_model.toLowerCase();
            if(modelA > modelB){
                const temp = inventory[i];
                inventory[i] = inventory[j];
                inventory[j] = temp;
            }
        }
    }
    return inventory;
}


