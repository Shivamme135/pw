// hew 1st methode to combine array

let arrayone = [1,2,3,4]
let arraytwo = [5,6,7,8]

// to combine these arrays we use the concate methood

let combineresult = arrayone.concat(arraytwo);
console.log(combineresult);


// 2nd method to combine an arrays --------------------------

let arrayresult = [arrayone,arraytwo];
console.log(arrayresult);
// but problem is that it will not give result as befor 

// here ... it also act as like a spread and rest operator 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SPREAD

let arrayresultis = [...arrayone,...arraytwo]
console.log(arrayresultis)

let arr = [1,22,52,,45]
console.log(...arr);









// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// REST

function manyargument()
{
    let gs = Array.from(arguments);
    let finalarr = gs.map( e => e )
    console.log(finalarr);
}

manyargument(1,2,3);
