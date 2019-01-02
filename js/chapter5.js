var startTime;
var endTime;
with(Date){ // Discouraged, do not use
  startTime = new Date();
  console.log("Starting ms: " + startTime.getMilliseconds());
}

console.log("ready");


var refreshPage = (bool) => {
  location.reload(bool);
  //this code will not execute, because reload forces restart of the script,
  //when the page is reloaded, it's like you've never hit the reload button
  window.onload = function() {
    let div = document.getElementById("datetime");
    let date = new Date();
    console.log("You are inside the onload of refreshPage()");
    div.innerHTML = div.innerHTML + "<h1>"+ date +"</h1>";
  }
}


var dateSection = document.getElementById("datetime");
console.log(dateSection);
//dateSection.innerHTML = "<h1>You've reloaded the page using a button</h1>";

window.onload = function() {
  with (Date) {
    endTime = new Date();
    console.log("Ending ms: " + endTime.getMilliseconds());
    let loadtime = endTime.getMilliseconds() - startTime.getMilliseconds();
    console.log("Time it took to load the script: " + loadtime + "ms.");
  }

  with(Math) { //this is bad, don't use with
    let rando = random() * 5; //times upper limit 0 - 4.9999 is generated, with rounding you can get 5
    let randoRounded = round(rando);
    console.log("Demo of math functions - random and round: " + rando + " rounded: " + randoRounded);

  }

  let div = document.getElementById("datetime");
  let date = new Date();
  console.log("You are inside the onload");
  var renderTime = () => {
    div.innerHTML = "<h1>"+ new Date().getTime() +"</h1>";
    div.innerHTML = div.innerHTML + "<h2>"+location.toString()+"</h2>";
    div.innerHTML = div.innerHTML + "<h2>"+navigator.appCodeName+"</h2>";
    div.innerHTML = div.innerHTML + "<h2> You've visited "+history.length+" pages during this browser session.</h2>";
    div.innerHTML = div.innerHTML + "<h3> What does Date(0) do: " + new Date(0) + "</h3>";
  };
  setInterval(renderTime, 1); //every 1 ms, update the time epoch


}
