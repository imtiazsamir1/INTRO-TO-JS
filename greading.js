function marks(number){
    if (number>=80){
        return("A+")
    }
    else if(number>=70){
        return("A")
    }
    else if(number>=60){
        return("A-")
    }
    else if(number>=50){
        return("B")
    }
    else if(number>=40){
        return("C")
    }
    else if (number>=33){
        return("D")
    }
    else {
        return("F")
    }

    
}
const myNum=77;
const isMyNumExam=marks(myNum);
console.log('my grade is',isMyNumExam)
