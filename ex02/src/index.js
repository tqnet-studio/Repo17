    //only change code below this line
   
const workDays =['MON', 'TUE', 'WED', 'THU', 'FRI'];
function myWeek(days){

    let week=[...workDays,'SAT', 'SUN'];
    return week;
    }
    console.log(myWeek());

//only change code above this line
module.exports=myWeek;