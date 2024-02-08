// in this project while clicking on the button it will change its color daily


let dom = document.getElementById("button");


document.addEventListener("click",changerandomcolor)

const randomcolor = () => {
    
    let val = "0123456789ABCDEF";
    let cons = "#"

    for(let i=0 ; i<6 ; i++)
    {
        // math.floor will give only integer value
        // math.random used to give value from 0 to 0.99 so to change it we multiply it by 16
        cons = cons + val[(Math.floor(Math.random() * 16))];
    }
    return cons;

}

function changerandomcolor()
{
    document.body.style.backgroundColor = randomcolor();
}