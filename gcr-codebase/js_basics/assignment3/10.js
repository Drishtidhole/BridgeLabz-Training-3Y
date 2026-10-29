
"use strict";

function outer() {
    console.log(count);

    var count = 5;

    function inner() {
        console.log(count);
        var count = 10;
        console.log(count);
    }

    inner();
}

outer();

function outerArrow() {
    let count = 5;

    const innerArrow = () => {
        console.log(count);
    };

    innerArrow();
}

outerArrow();
