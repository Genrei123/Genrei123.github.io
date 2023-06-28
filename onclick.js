//I had a problem with event listener not registering. it seems like my DOM needs to be loaded first.
//https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
window.addEventListener("DOMContentLoaded", (event) => {

    //Get elements by classname returns an array of elements.
    const el = document.getElementsByClassName('project');
    if (el) 
    {
        
        const first = el[0];
        
        first.addEventListener('click', () => { 
            console.log("works?");
        });

            
        
    }

});
