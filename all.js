// / problem number 1
function anaToVori(ana) {
    if (ana <= -1) {
        console.log('plese input possitive number');
    }
    else {
        const oneVori = 16;
        let result = ana / oneVori;
        return result;
    }

}
const myAna = anaToVori(100);
console.log(myAna);



// problem number 2
function pandaCost(food1, food2, food3) {
    if (food1 <= -1) {
        console.log('plese input possitive number');
    }
    else if (food2 <= -1) {
        console.log('plese input possitive number');
    }
    else if (food3 <= -1) {
        console.log('plese input possitive number');
    }
    else {
        const singara = 7;
        const somucha = 10;
        const jilapi = 15;
        let result1 = singara * food1;
        let result2 = somucha * food2;
        let result3 = jilapi * food3;
        let total = result1 + result2 + result3;
        return total;
    }
}
let myOrderCost = pandaCost(12, 12, 12);
console.log(myOrderCost);


// problem number 3
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


// Problem number 4
function oddFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        if (friends.length == 10000000000000) {
            console.log('plese input your friend name');
            break;
        }
        else if (friends[i].length % 2 != 0) {
            return friends[i];
        }
    }
}
const friends = ['Shahriar', 'Habibura', 'Tarek', 'Munna', 'Rubel'];
const oddFriendName = oddFriend(friends);
console.log(oddFriendName);