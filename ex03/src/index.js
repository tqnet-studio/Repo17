const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
};

function main(myCar){
//only change code below this line
    //const cylinders = MY_CAR.cylinders;
    //const size = MY_CAR.size;
const {cylinders, size} = MY_CAR;
return {cylinders, size};

//only change code above this line
}
console.log(main(MY_CAR));
module.exports=main;