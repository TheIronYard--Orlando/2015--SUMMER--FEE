/**
 * Normal mode: `addition` for `"zero"` to `"nine"`
 * BEAST MODE: `addition`, `subtraction`, `multiplication`, and `division`
 * NIGHTMARE MODE: Five lines or less?
 */
var expect = require('chai').expect;

/**
 * @param {String} word an English number word, e.g. "one", "five"
 * @return {Number} the numeric value of `word`
 */
function toNumber(word){
    // This might help with NIGHTMARE MODE...
    var numbers = [ "zero", "one", "two" ];

    if ( word === "zero" ){
        // NIGHTMARE MODE: How could I search for "zero" inside of `number`...?
        return 0;
    }

    if ( word === "one" ){
        return 1;
    }

    if ( word === "two" ){
        return 2;
    }

    if ( word === "three"){
        return 3;
    }

    if ( word === "four"){
         return 4;
    }

    if ( word === "five"){
         return 5;
    }
}

expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);
expect(toNumber("two")).to.equal(2);
expect(toNumber("three")).to.equal(3);
expect(toNumber("four")).to.equal(4);
expect(toNumber("five")).to.equal(5);
// expect(toNumber("six")).to.equal(6);
// expect(toNumber("seven")).to.equal(7);
// expect(toNumber("eight")).to.equal(8);
// expect(toNumber("nine")).to.equal(9);

/**
 * @param {String} A
 * @param {String} B
 * @return {Number} Inifinity or 0
 */
function divide(A, B){
    if (B === "zero"){
      return Infinity;
    }

    if (A === "one"){
      if (B === "zero"){
        return Infinity;
      }

      return 1;
    }

    return 0;
}

expect(divide("zero", "zero")).to.equal(Infinity);
expect(divide("zero", "one")).to.equal(0);
expect(divide("zero", "two")).to.equal(0);
// . . .
expect(divide("one", "zero")).to.equal(Infinity);
expect(divide("one", "one")).to.equal(1);

/* // NIGHTMARE MODE: How can I write tests more efficiently?

var numbers = [ "zero", "one", "two" ];

var item, index = 0;
while ( index < numbers.length ){
  item = numbers[index];
  // do something
  index = index + 1;
}

for (var index = 1; index < numbers.length; index = index + 1){
  // do something
}

for (var iteration = 0; iteration < 4; iteration = iteration + 1){

}

for (var iteration = 0; iteration < 4; iteration++){
}

for (var index = 0; index < numbers.length; index++){
}

numbers.forEach(function(item, index, all){
    item // "zero", "one", "two"
    expect(toNumber(item)).to.equal(???);
});
*/
