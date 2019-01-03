console.log("ready");

var name = "Agent Smith";
var suspect = "Roger the Alien";
var repeated = "Pete & Repeat";
var longstring = "thecatthedogthecanaltheplantheplanethepanamathecat";

var templated_string = `Hi, I am ${name}, and you
  must
      be
          ${suspect}`;
console.log(templated_string);
console.log(repeated.concat(" ").concat(repeated));
console.log(repeated.repeat(3));
console.log(`Substring of "Roget the Alien" from index 5 to 10: `+suspect.substring(5, 10));
console.log(`${longstring}.lastIndexOf("thecat") returns: ` + longstring.lastIndexOf("thecat"));
console.log(`${longstring}.indexOf("thecat") returns: ` + longstring.indexOf("thecat"));
