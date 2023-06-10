/* array of details for each picture, includes the file path,used to locate the picture when populating the gallery,the placename of where the picture was taken, 
the "ident" which will be used as a unique key to set the class id of the picture
and for searching the array and to pull in the 'blurb' and the location of the picture into a panel overlaid on the picture, in the image gallery. */
const pictures=[
{
path:'gallery/danger01.jpg',
place:'Danger & Paulette Island, Antarctica',
ident:'danger01',
blurb:'Penguins relaxing on an iceberg',
},

{
path:'gallery/danger02.jpg',
place:'Danger & Paulette Island, Antarctica',
ident:'danger02',
blurb:'Porpoising penguins',
    },
 {
path:'gallery/danger03.jpg',
place:'Danger & Paulette Island, Antarctica',
ident:'danger03',
blurb:'Penguins porpoising by an iceberg',
},

{
path:'gallery/danger04.jpg',
place:'Danger & Paulette Island, Antarctica',
ident:'danger04',
blurb:'due to the extreme number of penguins, we could not land at Paulette island.',
},

{
path:'gallery/elephantisland01.jpg',
place:'Elephant Island, Antarctica',
ident:'elephantisland01',
blurb:'',
},

{
path:'gallery/elephantisland02.jpg',
place:'Elephant Island, Antarctica',
ident:'elephantisland02',
blurb:'',
},

{
path:'gallery/elephantisland03.jpg',
place:'Elephant Island, Antarctica',
ident:'elephantisland03',
blurb:'',
},
                        
{
path:'gallery/elephantisland04.jpg',
place:'Elephant Island, Antarctica',
ident:'elephantisland04',
blurb:'',
},

{
path:'gallery/petermann01.jpg',
place:'Petermann Island, Antarctica',
ident:'petermann01',
blurb:'Gentoo Penguin Colony',
},

{
path:'gallery/petermann02.jpg',
place:'Petermann Island, Antarctica',
ident:'petermann02',
blurb:'Gentoo Penguin Colony',
},

{
path:'gallery/petermann03.jpg',
place:'Petermann Island, Antarctica',
ident:'petermann03',
blurb:'Ice field',
},

{
path:'gallery/petermann04.jpg',
place:'Petermann Island, Antarctica',
ident:'petermann04',
blurb:'note the Argentine refuge hut',
},

{
path:'gallery/portalpoint01.jpg',
place:'Portal Point, Antarctica',
ident:'portalpoint01',
blurb:'',
},

{
path:'gallery/portalpoint02.jpg',
place:'Portal Point, Antarctica',
ident:'portalpoint02',
blurb:'Zodiac boats, wiating to taxi guests',
},

{
path:'gallery/portalpoint03.jpg',
place:'Portal Point, Antarctica',
ident:'portalpoint03',
blurb:'the texture of this iceberg denotes that is has been turned over in the water after breaking off a larger piece of ice.',
},

{
path:'gallery/portstanley01.jpg',
place:'Port Stanley, Falklands',
ident:'portstanley01',
blurb:'Gypsy Cove',
},

{
path:'gallery/portstanley02.jpg',
place:'Port Stanley, Falklands',
ident:'portalstanley02',
blurb:'Gypsy Cove: penguins on a beach',
},
                                                                    
{
path:'gallery/portstanley03.jpg',
place:'Port Stanley, Falklands',
ident:'portalstanley03',
blurb:'Shipwreck of the Lady Elizabeth, shipwrecked in 1936',
},

{
path:'gallery/portstanley04.jpg',
place:'Port Stanley, Falklands',
ident:'portalstanley04',
blurb:'',
},

{
path:'gallery/westpoint01.jpg',
place:'Westpoint Island,Falklands',
ident:'westpoint01',
blurb:'Walk to the cliff side Albatross sanctuary',
},

{
path:'gallery/westpoint02.jpg',
place:'Westpoint Island,Falklands',
ident:'westpoint02',
blurb:'Blackbrow Albatross',
},

{
path:'gallery/westpoint03.jpg',
place:'Westpoint Island,Falklands',
ident:'westpoint03',
blurb:'Blackbrow Albatross nesting with Rockhopper Penguins',
},

{
path:'gallery/westpoint04.jpg',
place:'Westpoint Island,Falklands',
ident:'westpoint04',
blurb:'Blackbrow Albatross nesting with Rockhopper Penguins',
},
                                                                                                
{
path:'gallery/whihelminabay01.jpg',
place:'Whihelmina Bay,Antarctica',
ident:'whihelminabay01',
blurb:'',
},

{
path:'gallery/whihelminabay02.jpg',
place:'Whihelmina Bay,Antarctica',
ident:'whihelminabay02',
blurb:'Zodiac cruise in action',
},

{
path:'gallery/whihelminabay03.jpg',
place:'Whihelmina Bay,Antarctica',
ident:'whihelminabay03',
blurb:'note the hole in the iceberg,carved by the wind.',
},

{
path:'gallery/whihelminabay04.jpg',
place:'Whihelmina Bay,Antarctica',
ident:'whihelminabay04',
blurb:'note the bright torquise colour at the waterline of the iceberg. ',
},

{
path:'gallery/nekoharbour01.jpg',
place:'Neko Harbour,Antarctica',
ident:'nekoharbour01',
blurb:'Humpback whale, rising to the surface for air',
},

{
path:'gallery/nekoharbour02.jpg',
place:'Neko Harbour,Antarctica',
ident:'nekoharbour02',
blurb:'Humpback whale, descedning, look at the tail!',
},

{
path:'gallery/nekoharbour03.jpg',
place:'Neko Harbour,Antarctica',
ident:'nekoharbour03',
blurb:'icebergs',
},

{
path:'gallery/nekoharbour04.jpg',
place:'Neko Harbour,Antarctica',
ident:'nekoharbour04',
blurb:'Some more penguins relaxing on an iceberg.',
},

{
path:'gallery/deception01.jpg',
place:'Deception Island,Antarctica',
ident:'deception01',
blurb:'Neptunes Bellows:  channel on the southeast side of Deception Island forming the entrance to Port Foster, in the South Shetland Islands.',
},
                                                                                                                               
{
path:'gallery/deception02.jpg',
place:'Deception Island,Antarctica',
ident:'deception02',
blurb:'Decpetion Island,Neptune\'s \Window note the black volcanic sand on the beach.',
},

{
path:'gallery/deception03.jpg',
place:'Deception Island,Antarctica',
ident:'deception03',
blurb:'remnants of oil storage tanks, Decpetion Island house the remains of a whaling station and a Britsh expedition base.',
},

{
path:'gallery/deception04.jpg',
place:'Deception Island,Antarctica',
ident:'deception04',
blurb:'',
},

];


const gallery=document.querySelector("#galleryWrapper");
const imageControls=document.querySelector("#imageControls");


/* call load gallery images, to populate gallery with pictures */
loadGalleryImages();

/* populate the gallery page with the preview pictures */
function loadGalleryImages(){
for(const item in pictures )
{

var newPic = new Image();

newPic.src=pictures[item].path;
newPic.id=pictures[item].ident;
newPic.height="200";
newPic.width="200";
gallery.append(newPic);

};
};



/* variable and event listener for gallery section, selecting a picture will trigger picture change and load a picture into a div called "imageshowcase" */
 var allCurrentGallery = document.querySelector('#galleryWrapper');
 allCurrentGallery.addEventListener('click',displayImageShowcase,false);


 /* this function will put a picture centered on screen, based off the thumnail clicked on by the user from the image gallery */
function displayImageShowcase(event){

var showcase=document.querySelector('#imageShowcase');

/* check that I am clicking on a picture and not white space between pictures... if not clicking on the parent element itself (#galleryWrapper), I am clicking on a picture 
in the galleryWrapper DIV */

    if (event.target !== event.currentTarget)
    {
    var clickedItem=event.target.src;
    var imageID=event.target.id;
    var newImageShowcase = new Image();
    newImageShowcase.src=clickedItem;
    newImageShowcase.id=imageID;
    newImageShowcase.loading='eager';
    /*Set the ID of the picture in Gallery,will be used for searching later */

    newImageShowcase.className='galleryPic';
    /*Set the class of the new image,this will be used to select this picture later for cycling forwards and backwards */

    showcase.innerHTML="";
    /*delete any html/previous pictures in the showcase area.*/

    showcase.append(newImageShowcase);
    showcase.style.display='flex';

    let testPrevButton = document.querySelector('#imagePrevButton');
/*test if previous button exists*/

if (testPrevButton === null)
{
    var prevButton=document.createElement('button');
    prevButton.id='imagePrevButton';
    prevButton.innerHTML='<';
    imageControls.append(prevButton);
    prevButton.addEventListener('click',galleryPrevPicture);

};


    let testCloseBtnPresent = document.querySelector('#imageCloseButton');
    /*check if close button exists and create one if it is not present on page*/
    if (testCloseBtnPresent === null)
    {
    var imageCloseBtn=document.createElement('button');
    imageCloseBtn.id='imageCloseButton';
    imageCloseBtn.innerHTML='X';
    imageControls.append(imageCloseBtn);
    imageCloseBtn.addEventListener('click',closeImage);
    };

    /* check if the next button exists */
    let testNextButtonPresent=document.querySelector('#imageNextButton');

    if (testNextButtonPresent=== null)
    {
    var nextButton=document.createElement('button');
    nextButton.id='imageNextButton';
    nextButton.innerHTML='>';
    imageControls.append(nextButton);
    nextButton.addEventListener('click',galleryNextPicture);

    };
    /* get the details of the picture from the array and write to screen */
    var position=getCurrentPicture();
    writePicDetails(position);

 }};


function closeImage(){
    var showcase=document.querySelector('#imageShowcase');
    var imageCloseButton=document.querySelector('#imageCloseButton');
    var nextButton=document.querySelector('#imageNextButton');
    var prevButton=document.querySelector('#imagePrevButton');
    var notes=document.querySelector('#notes');
    imageCloseButton.remove();
    nextButton.remove();
    prevButton.remove();
    /* nuke the innerhtml and remove all buttons present and hide the imageShowcase div */ 
    showcase.style.display='none';
    notes.innerHTML="";

};

function getCurrentPicture(){

    var currentPic = document.querySelector('.galleryPic'); 
 /*select the current pic on screen of class gallerpic...*/   
    var currentPicID = currentPic.id;
/* get the ID of the current pic in the gallery */

var selectedPicture = pictures.findIndex((element)=>element.ident===currentPicID);
/* This returns the array index, from the array pictures, for the current picture on display
this uses the classID set on the picture to match the value in the array */

return selectedPicture;

};


function galleryNextPicture(){

var position = getCurrentPicture(); 
/* get the current pictures position in the pictures array */   

/* increment the postion number by one, if it is less that the number of pictures in the array */
if (position < (pictures.length-1))
{
position++;
}

/* draw the replacment picture on screen and the picture details */
replaceGalleryImage(position);
writePicDetails(position);

};   



function galleryPrevPicture(){

var position = getCurrentPicture();   
/* get the current pictures position in the pictures array */   

/* if the postion is great than zero, decrement the postion number ny one*/
if (position > 0)
{
position--;
}

/* draw the replacment picture on screen and the picture details */
replaceGalleryImage(position);
writePicDetails(position);

};


/* replace the current image in the showcase section of the site with with either a previous or next image */
function replaceGalleryImage(position)
{

var imageNum=position;

var showcase=document.querySelector('#imageShowcase');

replaceImage= new Image();

replaceImage.src=pictures[imageNum].path;
replaceImage.id=pictures[imageNum].ident;
replaceImage.className='galleryPic';
replaceImage.loading='eager';

showcase.innerHTML="";
showcase.append(replaceImage);

};


/* get the location and blurb details from the array for the picture and output to screen */
function writePicDetails(position)
{

var indexNum=position;    

var notes=document.querySelector('#notes');
notes.innerHTML="Location: "+ pictures[indexNum].place + "&nbsp; &nbsp Notes: " + pictures[indexNum].blurb;
};

