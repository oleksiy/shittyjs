window.onload = () => {
    console.log("Ready Chapter 15");
    let video = document.getElementById("video_00");
    let audio = document.getElementsByTagName("audio")[0];
    let playback = document.getElementById("currentTimePlayback");
    let canvas = document.getElementById("canvas_00");

    console.log("video paused: " + video.paused);
    console.log("video ended: " + video.ended);
    console.log("is video on autoplay: " + video.autoplay);
    video.autoplay = true; // setting video to autoplay

    video.addEventListener("pause", (e) =>{
        console.log("Where did the call originate from: " + e.target.toString());
        e.preventDefault();
    });
    setInterval(() => {
        console.log("video paused after attribute modification: " + video.paused);
        console.log(`video stats: 
              PlayBackRate:         ${video.playbackRate}
              CurrentTime:          ${video.currentTime}
              Duration:             ${video.duration}
              Muted:                ${video.muted}`);
        console.log(`audio stats: 
              PlayBackRate:         ${audio.playbackRate}
              CurrentTime:          ${audio.currentTime}
              Duration:             ${audio.duration}
              Muted:                ${audio.muted}`);

        if(audio.currentTime > 8){
            audio.pause();
        }
        playback.innerText = audio.currentTime;
    }, 5000);


    console.log("Can this browser play mp4: " + video.canPlayType("video/mp4"));
    console.log("Can this browser play mp3: " + video.canPlayType("audio/mp3"));

    //get 2d context
    let context = canvas.getContext('2d');
    let context2 = canvas.getContext('2d');
    let rect1 = context.strokeRect(0, 0, 50, 50);
    context.strokeRect(50, 50, 50, 50);
    context.strokeRect(100, 100, 50, 50);
    context.strokeRect(150, 150, 50, 50);
    context.moveTo(100, 200); //moves the context to 100, 200 coordinate
    context.lineTo(5, 8); //draws a line from 100, 200 to 5, 8
    context.stroke();

    context.moveTo(30,0);
    context.fillStyle = "#016ade";
    context2.moveTo(0, 250);

    for (let y = 0; y < 500; y++) {
        setTimeout(()=>{
            context.lineTo(30, y);
            context.stroke();
            context2.lineTo(y, 250);
            context2.stroke();
        }, y * 10);
    }

    context2.beginPath();
    context2.closePath();

    let canvas01 = document.getElementById("canvas_01");
    let context01 = canvas01.getContext("2d");
    let counter = 0;

    function drawCircle(x,y){
        context01.beginPath();
        context01.fillStyle = "#016ade";
        context01.arc(x,y,15,0,Math.PI * 2, false);
        context01.closePath();
        context01.fill();
    }

    function animate(x,y){
        context01.clearRect(0,0, 500,500);
        counter++;
        x += 100 * Math.sin(counter);
        y += 100 * Math.cos(counter);
        drawCircle(x,y);

    }

    drawCircle(250,250);
    setInterval(() => {animate(250,250);}, 500);


    /***
     * DRAG N DROP
     *
     * Important Events:
     *
     *  dragstart
     *  drag
     *  dragenter
     *  dragleave
     *  dragover
     *  drop
     *  dragend
     *
     *
     * **/

    let drag = document.getElementById("drag");
    let drop = document.getElementById("drop");

    function allowDrop(e){
        console.log("You're at allowDrop.");
        e.preventDefault(); //default is to NOT allow drop
    }

    function dragAction(e) { //when drag action starts, set dragID key to be the target element ID
        console.log("You're at drag action.");
        e.dataTransfer.setData("Text", e.target.id);
    }

    function dropAction(e) {
        console.log("You're at dropAction.");
        let data = e.dataTransfer.getData("Text");
        e.target.appendChild(document.getElementById(data));
        e.preventDefault();
    }

    drag.ondragstart = dragAction;
    drop.ondragover = allowDrop;
    drop.ondrop = dropAction;


    console.log("LOCAL STORAGE = > : " + typeof(Storage));
    localStorage.setItem("name", "Heisenber Who Is Uncertain");
    sessionStorage.setItem("favorite_channel", "57");
    console.log("Local Storage: " + localStorage.getItem("name"));
    console.log("Session Storage: " + JSON.stringify(sessionStorage["favorite_channel"]));


    /*
    Local File Storage
     */

    function dropFile(e){
        let files = e.dataTransfer.files;
        for (let i =0; i < files.length; i++) {
            let f = files[i];
            let paragraphNode = document.createElement("p");
            let textNode = document.createTextNode(`${f.name} - Type: ${f.type} --> ${f.size} bytes.`);
            paragraphNode.appendChild(textNode);
            e.target.appendChild(paragraphNode);
        }
        e.preventDefault();
    }

    let fileDropDiv = document.getElementById("local_files_demo");
    fileDropDiv.ondragover = allowDrop;
    fileDropDiv.ondrop = dropFile;


};