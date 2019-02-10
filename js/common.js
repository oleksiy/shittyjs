const date = new Date();

function get(stringId) {
    return document.getElementById(stringId);
}

function setup(){
    let counter = 0;
    get("counter").innerText = `${counter}`;
    return () => {
        counter +=1;
        get("counter").innerText=`${counter}`;
    };
}

export {get, date, setup};