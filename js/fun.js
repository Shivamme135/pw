// declare the funtion
function greet()
{
    console.log("hi there ");
    console.log("my name is this");
}

function sql(x)
{
    console.log(x*x);
}

// to call the function
greet();
sql(8)


// // default parameter

function defaltmessage(messageTobeDisplay = "i am proud of you") //this is defalult parameter
{
    console.log(messageTobeDisplay);
}
defaltmessage();  // so here when we call value  that will print what ever body is given under the funtion

defaltmessage("what is your name"); // but here we pass any argument so it will overwrite the the given statement and it will print what ever written over there


// Argument keyword

function hereIsArgument()
{
    let sum = 0;
    for(let i=0 ; arguments.length; i++)
    sum += arguments[i];
    return sum;
}
let answerr = hereIsArgument(1,2,3);
console.log(answerr)