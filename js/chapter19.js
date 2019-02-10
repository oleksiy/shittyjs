window.onload = () => {
  console.log("ready");
  let string = "A quick brown fox jumps over the lazy dog!"

  let regex = /!/;
  let find = regex.test(string); // Do we have a non word character - yes "!"
  if (find) {
    let match = regex.exec(string);
    console.log(match);
    console.log(match.length);
    console.log(
        `
        First value: match[0] -> ${match[0]}
        Second value: match[1] -> ${match[1]}
        Key: index -> ${match["index"]}
        Key: input -> ${match["input"]}
        Key: groups -> ${match["groups"]} 
        `
    );
  }
  console.log(find);


};