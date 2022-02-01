const num1 = 100;
const num2  = 320;
const num3 = 130;

function minNum(num1,num2,num3){
    if (num1<num2 && num1<num3 ){
        return('num1 is smallest then any others');

    }
    else if(num2<num1 && num2<num3){
        return('num2 is smallest then any others');

    }
    else{
        return('num3 is smallest then any others');
    }
    


}
var result = minNum (num1,num2,num3);
 console.log('result value', result);
