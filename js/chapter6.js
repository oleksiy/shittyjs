console.log("ready");

var x = 300;
var y = "10 golden bitcoins 500";
var z = -2.989221;
var xx = Infinity;
var yy = Number.MAX_SAFE_INTEGER;
console.log(Number.isNaN(x) + " <- is 300 NOT a number");
console.log("Conversion of 300 to binary " + x.toString(2));
console.log("Can \"" + y + "\" be transformed into a number with parseInt? -> " + parseInt(y));
console.log("Is " + z + " finite? -> " + isFinite(z));
console.log("Is " + yy + " finite? -> " + isFinite(yy));
console.log("Add 1 to the Max Safe Integer, is it finite now? -> " + isFinite(yy+2000));
console.log("Is infinity finite -> " + isFinite(xx));
console.log("ParseFloat demonstration from \"-3.54677785345 gallons of fuel\" -> " + parseFloat("-3.54677785345 gallons of fuel"));
console.log("ParseFloat demonstration from \"a-3.54677785345 gallons of fuel\" -> " + parseFloat("a-3.54677785345 gallons of fuel"));
