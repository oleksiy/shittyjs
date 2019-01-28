window.onload = () =>{
    console.log('loaded up.');
    /*change style by applying a class property*/
    function toggleClassForBody() {
        let allBodyElements = document.getElementsByTagName("body");
        let body = allBodyElements[0];
        if(body.getAttribute("class") === "modified"){
            body.removeAttribute("class");
        } else {
            body.setAttribute("class", "modified");
        }
    }


    let intervalFunc = setInterval(toggleClassForBody,250);

    setTimeout(()=>{clearInterval(intervalFunc)}, 5000);
    for(let i = 0; i < document.styleSheets.length; i++){
        console.log(`At index ${i}: ${document.styleSheets[i]}\nIs it disabled? ${document.styleSheets[i].disabled}\nTitle of the StyleSheet: ${document.styleSheets[i].title}`);
    }

    let textbox = document.getElementById("email");
    let audio = document.getElementById("mouse_click");
    console.log(audio);


    /**
     * Play a sound every time there's a keyboard interaction
     */
    /**
    textbox.addEventListener("keydown", (e) => {
        console.log("keydown detected");
        audio.playbackRate=1.1;
        audio.play();
    });

    textbox.addEventListener("keyup", (e) => {
        console.log("keyup detected");
        console.log(audio.currentTime);
    });
     **/

    /**
     * Play a sound every time a button is clicked
     */

    let button = document.getElementById("submit_button");
    let body = document.getElementsByTagName("body");


    function playClickSound(e){
        if(e.type === 'click' || e.key === 'Enter'){
            audio.play();
        }
    }

    button.addEventListener("click",playClickSound);
    body[0].addEventListener("keydown", playClickSound);
};