// this is a single parameter arrow function
const sum  = (x) => x*x; 
console.log(sum);
let sumIs =sum(5);
console.log(sumIs)

// double parameter 
const sumOfnum = (y,z) => y+z;
let second = sumOfnum(2,5)
console.log(second);

// multiple statement in the function is uded here 

const multi = (x,y) => {
    console.log('adding $(x) and $(y)')
    return x+y;
}
let third = multi(5,6);
console.log(third);

//returning an object and here we return direct object
const sumis = (x,y) => ({sum: x+y , difference:x-y});
let forth = sumis(7,9);
console.log(forth)