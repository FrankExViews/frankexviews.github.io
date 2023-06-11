/* enable the accordian style FAQ expanding/hiding  answer DIV sections on the FAQ page*/

const faqExpand = document.querySelectorAll('.question')

/* add the event listeners to the Question elements to trgger the expander function */
for (i=0;i<faqExpand.length; i++)
{
faqExpand[i].addEventListener('click', expander)

}


/* Expander function: toggle the active class in CSS to expand/retract FAQ question and answer sections  */
function expander()
{
/*target the "this" element, which is the question div visible to the user. */    
this.classList.toggle('active');
elements=this.children;

/* 
after toggling the 'question' div, look for the child elements that are DIVs and toggle the CSS active class on those also. 
Not specifying a type of item and trying to interrogate the classlist of each child item led to a lot of "undefined" errors (not all child items have a class...).
Looking for the the DIV elements specifcally and then applying the toggle of the active calls worked out easiest for me.
*/

for (const items in elements)
{

    if(elements[items].nodeName==='DIV')
    {
    elements[items].classList.toggle('active');
    }

}


}
