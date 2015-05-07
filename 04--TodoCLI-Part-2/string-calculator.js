var expect = require('chai').expect;

function toEnglish(word){
    if ( word === "zero" ){
        return 0;
    }
    else if ( word === "one" ){
        return 1;
    }

    if ( word === "two" ){
        return 2;
    }

}

expect(toEnglish("zero")).to.equal(0);
expect(toEnglish("one")).to.equal(1);
expect(toEnglish("two")).to.equal(2);
