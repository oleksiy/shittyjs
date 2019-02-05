window.onload = () => {
    function setCookies(){
        let date = new Date();
        let cookieDateEncoded = encodeURI(date.toUTCString());
        let tomorrow = new Date(date.setDate(date.getDate()+1));
        document.cookie=`name=${cookieDateEncoded};expires=${tomorrow}`.toString();
        document.cookie=`username=vapegod;expires=${tomorrow}`.toString();

        console.log(date.toUTCString());
        console.log(tomorrow.toUTCString());
    }
    setCookies();

    function getCookie(key){
        let keyEquals = key + "=";
        let splitCookie = document.cookie.split(';');
        for (let i = 0; i < splitCookie.length; i++){
            let cookie = splitCookie[i].trim();
            if (cookie.indexOf(keyEquals) == 0) {
                return decodeURIComponent(cookie.substring(keyEquals.length, cookie.length));
            }
        }
        return null;
    }
    function handleSubmit(e) {
        let date = new Date();
        date.setDate(date.getDate()+1);
        document.cookie="inputname=" + document.getElementById("name_input").value + ";expires=" + date.toString();
        let nameFromCookie = getCookie("inputname");
        let greeting = document.getElementById("greeting");
        greeting.textContent = "Hello, " + nameFromCookie;
    }

    let submitButton = document.getElementById("name_submit_button");
    submitButton.addEventListener('click', handleSubmit);
    console.log(`Cookies: ${document.cookie}`);
};