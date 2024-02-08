// creating an objec first method

let obj = {id:101 , name:"shivam"}
console.log(obj);

// second method to form an object 
 let emp = new Object
 console.log(emp);
//  so it is empty object but if want eo give any key value pair

let emp2 = new Object
emp2.id = 101;
emp2.name = "shivam";
console.log(emp2)


// third method with help of functions

function fun(i,n,r)
{
    this.id = i;
    this.name = n;
    this.rollno = r;
}

let obj1 = new fun(103 , "shiva" , 120010)
console.log(obj1)

let keys = object.keys(obj1)
console.log(keys)


