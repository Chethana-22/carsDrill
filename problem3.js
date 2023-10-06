
// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and log
// the results in the console as it was returned.

export function sortCars(inventory){
    for(let i=0;i<inventory.length;i++){
        for(let j=0;j<inventory.length-i-1;j++){
            const modelA = inventory[i].car_model.toLowerCase();
            const modelB = inventory[j].car_model.toLowerCase();
            if(modelA > modelB){
                const temp = inventory[j];
                inventory[j] = inventory[j + 1];
                inventory[j+1] = temp;
            }
        }
    }
    return inventory;
}


