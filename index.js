// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"]
const returnFirstTwoDrivers = function(drivers){
     return drivers.slice(0,2);
     
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4)
    // console.log(drivers.slice(2,4))

}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(valueToMultiply){
    return function (fare) {
            return fare * valueToMultiply;
    }
}
// createFareMultiplier();

const fareDoubler = createFareMultiplier(2);
// console.log(fareDoubler(5))
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectingDrivers){
    return selectingDrivers(drivers);
    
}