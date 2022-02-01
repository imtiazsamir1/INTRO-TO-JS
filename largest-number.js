const num1 = 1000;
const num2  = 320;
const num3 = 130;

function maxNum(num1,num2,num3){
    if (num1>num2 && num1>num3 ){
        return('num1 is gretter then any others');

    }
    else if(num2>num1 && num2>num3){
        return('num2 is gretter then any others');

    }
    else{
        return('num3 is gretter then any others');
    }
    


}
var result = maxNum (num1,num2,num3);
 console.log('result value', result);
