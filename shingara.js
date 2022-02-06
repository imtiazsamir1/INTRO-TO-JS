function pandaCost(shingaraQuantity, somuchaQuantity, jilapiQuantity) {
    if (shingaraQuantity <= -1) {
        console.log('plese input possitive number');
    }
    else if (somuchaQuantity <= -1) {
        console.log('plese input possitive number');
    }
    else if (jilapiQuantity <= -1) {
        console.log('plese input possitive number');
    }
    else {
        const singara = 7;
        const somucha = 10;
        const jilapi = 15;
        let result1 = singara * shingaraQuantity;
        let result2 = somucha * somuchaQuantity;
        let result3 = jilapi * jilapiQuantity;
        let total = result1 + result2 + result3;
        return total;
    }
}
let myOrderCost = pandaCost(14, 13, 12);
console.log(myOrderCost);

