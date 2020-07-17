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



 