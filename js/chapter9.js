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
        console.log(e.toString());
    }
    holder.addEventListener("click", logInteraction);

    const COLORS = {
        0: 'green',
        1: 'blue',
        2: 'brown',
        3: 'aquamarine',
        4: 'aqua',
        5: 'teal',
        6: 'red',
        7: 'palevioletred',
        8: 'olive',
        9: 'salmon',
        10: 'navy'
    };

    //keyboard events
    let textbox = document.getElementById("textbox");
    let mirror = document.getElementById("keyboardOutput"); //mirrors output from textbox

    function keyPresses(e){
        console.log(`Key Press Recorded -> Location: ${e.location} Key: ${e.key} ID: ${e.which}`);
        if(e.which == 32) {
            mirror.innerText += " ";
        } else if ((e.which > 47 && e.which < 91) || (e.which > 183 && e.which < 193)){
            mirror.innerText += e.key;
        } else if (e.key == 'Backspace') {
            mirror.innerText = mirror.innerText.slice(0, -1); // backspace
        } else if (e.key == 'Escape'){
            mirror.innerText = "";
        }
        let colorID = (Math.round(Math.random() * 10));
        mirror.style.color = COLORS[colorID];
    }

    textbox.addEventListener("keydown", keyPresses, true);

};