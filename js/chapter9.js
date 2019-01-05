console.log(Number(new Date().getMilliseconds()));
//execute only when page is fully ready
window.onload = () => {
    console.log("ready");
    console.log(Number(new Date().getMilliseconds()));

    //inner most element has handler associated with it
    let heading3Element = document.getElementById("heading3");
    heading3Element.addEventListener('click', (e) => {
        if(heading3Element.innerText.toLocaleLowerCase().includes("console")){
            heading3Element.innerText = "You've clicked on me, and now an anonymous function is changing the content inside the tag!";
        } else {
            heading3Element.innerText = "Check console log.";
        }
        console.log("Where event originated from:");
        console.log(e.target);
        e.stopPropagation(); // with stop propagation, you will not see a message from headingOuterElement, because we've stopped the bubbling here
    } ,false);

    //outer most element event handler
    let holder = document.getElementById("headingOuterElement");
    function logInteraction(e){
        console.log("Test bubbling up of the event, event detected in the outer most div holding the heading, and this is its target:");
        console.log(e.target);
    }
    holder.addEventListener("click", logInteraction);


}