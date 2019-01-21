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
        playback.innerText = audio.currentTime;
    }, 1000);


    console.log("Can this browser play mp4: " + video.canPlayType("video/mp4"));
    console.log("Can this browser play mp3: " + video.canPlayType("audio/mp3"));

    //get 2d context
    canvas.getContext('2d');
};