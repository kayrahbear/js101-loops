console.log("Hello Loops!");

for (var i = 0; i <100; i += 10) {
    // console.log("What is i", i);
}


for (var i=100; i > 1; i = i/2){
    // console.log("divide by 2", i);
}

var halfVals = [];
for (var i = 100; i > 1; i = i/2) {
    halfVals.push(i);
}

console.log("halfVals", halfVals);

var evenOdds = [];
for (var i = 100; i >= 0; i --){
    console.log("mod", i % 2);
    if (i % 2 === 0) {
        evenOdds.unshift(i);
    } else {
        evenOdds.push(i);
    }
}
console.log("evenOdds", evenOdds);
