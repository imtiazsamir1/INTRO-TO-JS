function picnicBudget(picnicMember) {
    const first100Serial = 5000;
    const secound100Serial = 4000;
    const third100Serial = 3000;
    if (picnicMember <= -1) {
        console.log('plese input possitive number');
    }

    else if (picnicMember <= 100) {
        const moneyForFirst100 = picnicMember * first100Serial;
        return moneyForFirst100;
    }
    else if (picnicMember <= 200) {
        const first100 = first100Serial * 100;
        const restMember = picnicMember - 100;
        let moneyForsecound100 = restMember * secound100Serial;
        let moneyForSecound200 = first100 + moneyForsecound100;
        return moneyForSecound200;
    }
    else {
        const first100 = first100Serial * 100;
        let moneyForsecound100 = secound100Serial * 100;
        const restMembers = picnicMember - 200;
        let moneyForThired100 = restMembers * third100Serial;
        let totalMoney = first100 + moneyForsecound100 + moneyForThired100;
        return totalMoney

    }

}
const result = picnicBudget(300);
console.log(result);
