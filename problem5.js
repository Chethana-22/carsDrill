
// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
// Using the array you just obtained from the previous problem, find out how many cars 
// were made before the year 2000 and return the array of older cars and log its length.


export function olderCar(inventory){
    var resultArray = [];
    let years = [];
    for(let i=0;i<inventory.length;i++){
        years.push(inventory[i].car_year);
        if(years[i] < 2000){
            resultArray.push(years[i]);
        }  
    }
        
    console.log("The number of cars older than year 2000 is " + resultArray.length);

    return resultArray;
}

