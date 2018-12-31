console.log("ready");
var text = new Date();

function printToConsole(){
  console.log(text);
  console.log(navigator.userAgent);
  console.log(navigator.plugins);
}

// function is already accessible at this point
var callBeforeDeclaration = multiply(80, 10);

function multiply(a, b) {
  if(a!=null && b !=null){
    if (typeof a === 'number' && typeof b === 'number' ) {
      console.log(a * b);
      var result = a * b;
      return result;
    } else {
      console.error("ERROR: multiply requires both arguments to be numeric!");
    }
  } else {
    console.error("ERROR: multiply requires both arguments to be present");
  }
}
