console.log("shivam");
console.log(this)

// to declare  variable we will use let or const

let pwSkillsPrice = 500
console.log(pwSkillsPrice);

pwSkillsPrice = 600
console.log(pwSkillsPrice);

// here = is the assignment operator

// just for practice
let pwcourse = 2500;
const gst = pwcourse/10;
let total = pwcourse + gst
console.log(total);

// ** is used for the variable to the power
const power = 3 ** 2;
console.log(power)

// = is asigning  and == comparisn(boolean) === it also check the types




// if else condition
let age = 18
if(age > 18)
{
    console.log("you are allowed to vote");
}
else if(age == 18){
   console.log("you are me");
}
else{
    console.log("you are not allowed");
}


// loop is here  
for(let i = 0; i<10 ; i++)
{
    console.log(i);
}

// while loop
// while(intializa, coondition , inc/dec)

let i = 0;  // initialization
while(i < 5) // condition
{
    console.log(i);
    i++; // inc/dec
}


// ternnnary operator is here
// condition ? true condition : false condition

let isLoggedIn = true;
isLoggedIn ? console.log("home page") : console.log("logged in");
