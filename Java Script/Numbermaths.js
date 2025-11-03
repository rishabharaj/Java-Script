// order- first * / 
//        then + -
//        if both are together then left to right calculate
let a = 10 + 20 * 30 - 40 / 50;
let b = 0.1 + 0.2;
console.log(a); // 609.2
console.log(b); // 0.30000000000000004

// how to fix floating point precision issue
// remove decimal points
// for example for adding 20.95 + 7.99 gives 28.93999999999998
// so multiply both by 100 and then add 2095 + 799 = 2894
// then divide by 100 to get 28.94
let c = (20.95 * 100 + 7.99 * 100) / 100;
console.log(c); // 28.94

//rounding off numbers
 let d = Math.round(2.8);
 console.log(d);
 let e = (2095 + 799 + 1899 + 499) / 100 + Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100;
    console.log(e); // 57.92
