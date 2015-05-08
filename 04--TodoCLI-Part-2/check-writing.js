/**
 * When you write a check, to validate the amount,
 * you have to write the English words for the amount
 * on a separate line. For example, a check for $123.45
 * has a line with:
 *
 *    one hundred twenty three and 45/100s dollars
 *
 * Given a function `toEnglish` that accepts a JavaScript
 * `Number` and returns a `String` formatted for use on a
 * check, as above.
 */
var expect = require('chai').expect;

function toWord(number){
    if (number === 0){
        return "zero";
    }
    if (number === 1){
        return "one";
    }
    if (number === 2){
        return "two";
    }
    if (number === 3){
        return "three";
    }
    if (number === 4){
        return "four";
    }
    if (number === 5){
        return "five";
    }
    // ????
}

// Test cases here...
expect(toWord).to.exist;
expect(toWord(0)).to.equal("zero");
expect(toWord(1)).to.equal("one");
expect(toWord(2)).to.equal("two");
expect(toWord(3)).to.equal("three");
expect(toWord(4)).to.equal("four");
expect(toWord(5)).to.equal("five");
expect(toWord(6)).to.equal("six");
