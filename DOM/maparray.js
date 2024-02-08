// make an array--------------------------------------------
 let arr = [1,2,3,"m"];

//  this means it will directly tell the index and also print array
 arr.forEach(function(element , index , arr){
    console.log(index ,element, arr)
 })

//  here we are using function inside the loop so we can easy print all the value----------------------------

let heroes = ["shivam" , "ravi" , "vivek" , "bikku"];

heroes.forEach( (element) => {
  console.log(element.toUpperCase());
}

)
// we can also use map instead of foreach method in the given progrsmm

// -----------------------------------------------------------------------------------------------------------------------------

// filter 
// here we have provide some condition that you want

console.log(heroes);
const heroeswithi = heroes.filter((n) => {
   return n.endsWith("i");
})
console.log(heroeswithi);

