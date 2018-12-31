id = 33432.22;
id2 = "33432.22";
//Triple equals will also check type equality
if(id === id2) {
  console.log("These values are equal.");
} else {
  console.log("NOPE!");
}

console.log(id + id2); // adds two strings;

console.log(id + id); // adds two floats

var x = 0;
for(i = 0; i < 10; i++){
  console.log(x++);
}




function hello(event){
  alert("call from submit button.");
  return false;
}

document.write("Conversion");
