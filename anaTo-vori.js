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
const goldAna = anaToVori(32);
console.log(goldAna);