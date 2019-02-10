import * as common from './common.js'

window.onload = function () {
    console.log("Ready chapter 20_21");
    console.log(common.date);
    console.log(common.get("heading1"));

    //EXAMPLE OF A CLOSURE
    let add = common.setup();
    common.get("button").onclick = add;
    console.log("Event Listener has been added to button");
};