
// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and log
// the results in the console as it was returned.

export function sortCars(inventory){
    inventory.sort(function(a, b) {
        let modelA = a.car_model.toLowerCase();
        let modelB = b.car_model.toLowerCase(); 
        if (modelA < modelB) {
            return -1;
        }
        if (modelA > modelB) {
            return 1;
        }
        return 0;
    });

    return inventory;
}


