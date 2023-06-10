const burger=document.querySelector("#burger");
const menu=document.querySelector("#menu");
menu.style.display="none";

console.log(burger);
burger.addEventListener('click',displayMenu);


function displayMenu(){
    console.log("start")
    

    console.log(menu.style.display);
    
    if(menu.style.display==="none")
    {
        console.log("set flex");
        menu.style.display="flex";
    }

    else
    {
        menu.style.display="none";
    }

    
    console.log("end");
};