
// it is syncronise 
function h (x,fn)
{
    //-> h is highr order function
    //-> fn is call back
    
    console.log(x*x);
    // fn();
}

h(3);

// example set timer 
// Asyncronize
console.log("start");
setTimeout(function time() {
    console.log("here is  the time")   // here it means  that this console will execute when time 3sec is finsished
},3000);
console.log("end");