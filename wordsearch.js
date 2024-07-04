const wordSearch = (letters, word) => { 
if (letters.length === 0) return false;

    const horizontalJoin = letters.map(ls => ls.join('')) // horizontal check
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    } 
    const verticalJoin = []; // vertical array creation
    for (let vert = 0; vert < letters[0].length; vert++) {
        let verticalWord = '';
        for (let hor = 0; hor < letters.length; hor++) {
            verticalWord += letters[hor][vert];
        }
        verticalJoin.push(verticalWord);
    }
    for (const v of verticalJoin) { // vertical check
        if (v.includes(word)) return true;
    }

    return false;
};


module.exports = wordSearch;
