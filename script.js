/* Get the Dark/light mode button on page by ID */
const displayButton = document.getElementById('displayMode');
displayButton.addEventListener('click', lightDarkSetCss);

/* check if the flag "mode" is set in browser session storage */
/* if this is not preset, set the mode to "light" */

if(sessionStorage.getItem('mode')===null)
{
sessionStorage.setItem("mode","Light");
};

/* set toggle modes variable by checking value of "mode" in session storage */
/* we will use this value to set and toggle between dark and Loght modes. */ 
let toggleModes = sessionStorage.getItem("mode");

/* set the inital page CSS mode, based off the mode storage item being set to Light or Dark */
/* this ensures when moving to another page, the correct mode is set */
if( toggleModes ==='Dark')
{
    setToDark();
};

if( toggleModes ==='Light')
{setToLight()};

/* set mode of page to either light or dark and toggle the inter text value of the button */
function lightDarkSetCss()
{
        if (toggleModes==='Light')
        {
    setToDark();
}
        
    else if (toggleModes==='Dark')
        {
            setToLight();
    }
};


    function setToDark(){
    displayButton.innerText='Light Mode';
    document.documentElement.style.setProperty('--main-background', '#0C090A'); 
        document.documentElement.style.setProperty('--navbar-color', '#3C565B');
        document.documentElement.style.setProperty(' --navbar-li-color', 'black'); 
        document.documentElement.style.setProperty('--navbar-a-hover', 'skyblue');
        document.documentElement.style.setProperty('--navbar-a-hover-bg', 'black'); 
        document.documentElement.style.setProperty('--navbar-a-link', 'whitesmoke');
        document.documentElement.style.setProperty('--rankTable--th', '#625D5D'); 
        document.documentElement.style.setProperty('--rankTable--th-txt','white');
        document.documentElement.style.setProperty('--rankTable--border', '#B6B6B4');
        document.documentElement.style.setProperty('--rankTable--odd', '#36454F'); 
        document.documentElement.style.setProperty('--rankTable--even', '#657383');
        document.documentElement.style.setProperty('--rankTable--Irish', '#046307'); 
        document.documentElement.style.setProperty('--para-bg-color', '#2C3539');
        document.documentElement.style.setProperty('--para-txt-color', 'whitesmoke');
        document.documentElement.style.setProperty('--videoBox-bg-color', '#2C3539');
        document.documentElement.style.setProperty('--videoBox-bg-para-color', '#3C565B');
        document.documentElement.style.setProperty('--videoBox-txt-para-color', 'white');
    sessionStorage.setItem("mode","Dark");
    toggleModes = sessionStorage.getItem("mode");


};

    function setToLight(){
console.log('set to light');
        displayButton.innerText='Dark Mode';
        document.documentElement.style.setProperty('--main-background', 'radial-gradient(circle, rgb(236, 239, 245) 0%, rgb(119, 177, 243) 100%)'); 
        document.documentElement.style.setProperty('--navbar-color', 'hotpink');
        document.documentElement.style.setProperty(' --navbar-li-color', 'aqua'); 
        document.documentElement.style.setProperty('--navbar-a-hover', 'skyblue');
        document.documentElement.style.setProperty('--navbar-a-hover-bg', 'deeppink'); 
        document.documentElement.style.setProperty('--navbar-a-link', 'skyblue');
        document.documentElement.style.setProperty('--rankTable--th', 'hotpink'); 
        document.documentElement.style.setProperty('--rankTable--th-txt','black');
        document.documentElement.style.setProperty('--rankTable--border', 'hotpink');
        document.documentElement.style.setProperty('--rankTable--odd', 'whitesmoke'); 
        document.documentElement.style.setProperty('--rankTable--even', 'lightgrey');
        document.documentElement.style.setProperty('--rankTable--Irish', 'lightgreen'); 
        document.documentElement.style.setProperty('--para-bg-color', 'whitesmoke');
        document.documentElement.style.setProperty('--para-txt-color', 'black');
        document.documentElement.style.setProperty('--videoBox-bg-color', 'hotpink');
        document.documentElement.style.setProperty('--videoBox-bg-para-color', 'whitesmoke');
        document.documentElement.style.setProperty('--videoBox-txt-para-color', 'black');
        
        sessionStorage.setItem("mode","Light");
        toggleModes =sessionStorage.getItem("mode");
        };










/* default variables and colours set in css....

    --main-background:radial-gradient(circle, rgb(236, 239, 245) 0%, rgb(119, 177, 243) 100%);
    --navbar-color:hotpink;
    --navbar-li-color:aqua;
    --navbar-a-hover:skyblue;
    --navbar-a-hover-bg:deeppink;
    --navbar-a-link:skyblue;
    --rankTable--th:hotpink;
    --rankTable--border:hotpink;
    --rankTable--odd:whiteSmoke;
    --rankTable--even:lightgrey;
    --rankTable--Irish:lightgreen;
    --para-bg-color:whitesmoke;
    --para-txt-color:black;
    --videoBox-bg-color:hotpink;
    --videoBox-bg-para-color:whitesmoke;

    */