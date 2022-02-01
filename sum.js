function arrayTotal(number){
    let sum = 0;
    for(i=0;i<number.length; i++){
        const element=number[i];
        sum=sum+element;
    }
    return sum;
}
const total=arrayTotal([33,44,55])
console.log("sum is",total)