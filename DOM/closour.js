function one()
{
    let score = 0;
    console.log(score);
}

one();
// console.log(score);


let var2 = "this is the second one";
function innerfun()
{
    let var1 = "this is the var one";
    console.log(var1);
}
innerfun();


// closour means inner function can excess the outer value
// but outer fun cannot access the inner values

// ex

function outerfun()
{
    let one = "this is to excess the outer  var";
    function two()
    {
        console.log(one);
    }
    two();
}
outerfun();