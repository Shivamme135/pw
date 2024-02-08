let pattern ='pw';

// to make pattrn we use regexp
let regExone = new RegExp(pattern);

let flag = 'gi';
let regExtwo = new RegExp(flag);

// one more ways to make regex

let regExthree = /pw/gi

const strToCheck = "here is the pw skills programm for full stack which is used to take part in fullstack programm";

// this will help to check that the particular exp is present over in string or not
// 1)test()-----------------------------------
let result = regExthree.test(strToCheck);
console.log(result);
// 2) match----------------------------
let resulttwo = strToCheck.match(regExthree);
console.log(resulttwo)
// 3) relace-----------------------------
let resultthree = strToCheck.replace(regExthree,'p-w');
console.log(resultthree);
