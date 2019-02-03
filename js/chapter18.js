window.onload = () => {
    function setCookies(){
        let date = new Date();
        let cookieDateEncoded = encodeURI(date.toUTCString());
        let tomorrow = new Date(date.setDate(date.getDate()+1));
        document.cookie=`name=${cookieDateEncoded};expires=${tomorrow}`.toString();
        console.log(date.toUTCString());
        console.log(tomorrow.toUTCString());
    }
    setCookies();
    console.log(`Cookies: ${document.cookie}`);
};