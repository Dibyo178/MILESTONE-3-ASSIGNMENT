// feetToMile

function feetToMile(feet) {
    var mile= feet/5280;
    return mile; 
    
}
var array=[10,100,1000];
for(var i=0;i<array.length;i++){
    var result=feetToMile(array[i]);
    console.log(result);
}


//woodCalculator

function woodCalculator(chair,table,bed) {
   var  chairCount= chair*1;
    var  tableCount= table*3;
    var  bedCount=  bed*5;
   var  totalWood= chairCount+ tableCount + bedCount;
   return totalWood;

    }

    var result=woodCalculator(14,5,12);
    console.log(result);

 //brickCalculator

function brickCalculator(floor) {
    var sum=0;
    var perFeet=1000;
    for(i=floor;i>0;i--){
        if(i<=10){
            sum=sum+15*perFeet;
            }
            else if(i<=20){
                sum=sum+12*perFeet;
            }
            else if(i>20){
                sum=sum+10*perFeet;
            }
        
    }
    return sum;
}
var result=brickCalculator(5);
console.log(result);


//tinyFriend
function tinyFriends(name) {
    var min = name[0].length;
    for (var i = 0; i < name.length; i++) {
        if (name[i].length < min) {
            min =name[i].length;
            var largeString = name[i];
        }

    }
    return largeString;
}

var result = ['sourov', 'dibyo', 'deeya'];

console.log(tinyFriends(result));



//max arry string...


var friendsName = ['sakil','dibyopurkayastha', 'shanto', 'purkaysatha','rahi', 'anam', 'masum'];

function megaFriend(friendsName) {
    let max = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        let element = friendsName[i];
        if (element[i] > max[i]) {
            max = element;
        }
    }
    return max;
}

console.log(megaFriend(friendsName));

//hotelcost....

function hotelCost(Day) {
    var sum=0;
    var rent=0;
   
    for(i=Day;i>0;i--){
        if(i<=10){
            sum=sum+100;
           var TenDays=sum;
            rent=TenDays;
       
            }
            else if(i<=20){
                sum=sum+80;
                var TwentyDays=TenDays+sum;
                rent=TwentyDays;
               

            }
            else if(i>20){
                sum=sum+50;
                var afterTwentyDays=TwentyDays+sum;
                rent=afterTwentyDays;
                
            }
        
    }
    return rent;
}
var result=hotelCost(20);
console.log(result);

// or 


function hotelCost(days) {
    let cost = 0;
    if (days <= 10) {
        cost = days * 100;

    }
    else if (days <= 20) {
        let firstPart = 10 * 100;
        let remaining = days - 10;
        let secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        let firstPart = 10 * 100;
        let secondPart = 10 * 80;
        let remaining = days - 20;
        let thirdPart = remaining * 40;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}


const result = hotelCost(25);
console.log(result);

//2 no prb...

function budgetCalculator(watch,mobile,laptop){
    var perWatch=watch;
    var perMobile=mobile;
    var perLaptop=laptop;
    var sum= perWatch+perMobile+perLaptop;
    return sum;
}
var output =budgetCalculator(50,100,500);
console.log(output);




 
