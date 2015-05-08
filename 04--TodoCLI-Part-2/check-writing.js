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

function toEnglish(number){
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
    // ????
}

// Test cases here...
expect(toEnglish).to.exist;
expect(toEnglish(0)).to.equal("zero");
expect(toEnglish(1)).to.equal("one");
expect(toEnglish(2)).to.equal("two");
expect(toEnglish(3)).to.equal("three");
expect(toEnglish(4)).to.equal("four");
expect(toEnglish(5)).to.equal("five");
