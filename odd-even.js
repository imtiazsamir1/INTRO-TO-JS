// const number=15;
// const remainder=(number%2 );
// console.log(remainder==0)

function isEven(number){
    if (number%2==0){
        return true;
    }
    return false;
}
const myNum=1123;
const isMyNumEven=isEven(myNum);
console.log('my number',isMyNumEven)
const herNum=144;
const isHerNum=isEven(herNum);
console.log('her number',isHerNum)