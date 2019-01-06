window.onload = function() {
    const COLORS = {
        0: 'yellow',
        1: 'red',
        2: 'green',
        3: 'blue'
    };

    console.log("Ready. Control Structures.");
    let body = document.getElementById("content");

    function switchColors(colorID) {
        body.style.background = COLORS[colorID];
        return COLORS[colorID];
    }

    let counter = 0;

    setInterval(()=>{
        let randomColor = counter;
        switchColors(randomColor);
        counter++;
        if (counter == 4) {
            counter = 0;
        }
    }, 3000);
};