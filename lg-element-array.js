function largestElement(number){
    let largest = number[0];
    for (let i=0; i<number.length;i++){
        const element=number[i];
        if (element>largest){
            largest=element;
        }
    }
    return largest;
}
const oldest= largestElement([-2,-5,-12]);
console.log(oldest);