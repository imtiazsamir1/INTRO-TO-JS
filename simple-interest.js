// simple interest
// i=Prt
function interestAmount(num1,num2,num3)
 {
var total = num1*num2*num3;

return total;
 } 
 var firstNum = 4500.00;
 var secondNum = 0.095;
 var thirdNum=7;
 var result = interestAmount(firstNum,secondNum,thirdNum);
 console.log('Interest Amount:', result. toFixed(2));