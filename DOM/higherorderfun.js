// it means we can take one fun as a argument of other function

let powerTwo = (n) =>
{
  return n**2;
}

function powerThree(powerTwo,n) {
    return powerTwo(n)*n;
}

console.log(powerThree(powerTwo,3));


// more complex higher order function

// this means we can make function ke ander function

let higherorder = m =>
{
    let gun = n => {
        let sun = o =>
        {
            return m+n+o;
        }
        return sun;
    }
    return gun;
}

console.log(higherorder(2)(3)(5))