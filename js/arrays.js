// arrays are here 
let a = [1,2,3,4,"saket",false];
console.log(a);


// it will give array of length 5 but it is empty 
let a1 = new Array(5);
console.log(a1)

// arrays methods are here---------------------------------

//11111111111111111111111 to add the element we use pust method

let b = [1,2,3,4,"shivam"];
console.log(b);
// here it will add one elemnt ar last 
b.push(6);
console.log(b);
// here it will add more than 1 element at last in the given array
b.push(6,7,9,0)
console.log(b);

// 2222222222222222 to delete an elemnt
// it will only delete elemt from last only one and one

b.pop();
console.log(b);
b.pop()
console.log(b);


// 33333333333 to delete  elemt from the first we use shift

b.shift()
console.log(b)

// 4444444444444444 used to add at first elemt unshift

b.unshift(9)
console.log(b)


//555555555555 concate is used to add arrays

let x= [1,2,3,4,5]
let y= [9,8,7,6]
let w = x.concat(y);
console.log(x,y,w);


// 666666666666 join it  is generally used to convert the given array into string

let m = w.join("");
console.log(m);

// what ever we will write inside join tht will print btw all character in the string

let n = w.join("@");
console.log(n);

