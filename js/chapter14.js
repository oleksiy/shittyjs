window.onload = () => {
    console.log("Ready");
    let exchanges = {
        1: "adtech",
        2: "doubleclick",
        3: "openx",
        4: "casale",
        5: {
            "name":"No Name"
        }
    };

    let stringified = JSON.stringify(exchanges);

    console.log(stringified);

    console.log(JSON.parse(stringified));

    let evaluatedString = eval("exchanges"); // creates a JS object

    console.log("here's what we've evaluated --> " + evaluatedString.toString());

    console.log(`
        Breaking down the JSON Access:
        Using brackets exchanges[1]: ${exchanges[1]}
        Using dot notation .5:       ${exchanges[5].name}
        Setting using dot notation   ${exchanges[5].name = "AdMeld"}...turns into...${exchanges[5].name}
    `);

};
