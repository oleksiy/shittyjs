console.log("ready");

console.log("global vs local scope");
var a = 100
//this is an anoynymous/arrow function created using a fat arrow
var exampleOfGlobalVsLocal = () => {
  var a = 5000;
  a = a + 3200;
  console.log("In exampleOfGlobalVsLocal, local variable a has the value of " + a);
  console.log("However, the caller (global object), which has the ownership of global variable a, shows the value of " + this.a);
}

var exampleOfDefaultVariables = (grade, message="...is ok.") => {
  if (typeof grade == 'number'){
    if (grade > 89){
      console.log("An A or " + grade + "%" + message);
      return true;
    }

    if(grade > 79) {
      console.log("A B or " + grade + "%" + message);
      return true;
    }

    if(grade > 69) {
      console.log("A C or " + grade + "%" + message);
      return true;
    }

    if(grade > 59) {
      console.log("A D or " + grade + "%" + message);
      return true;
    }

    if(grade > 49) {
      console.log("A E or " + grade + "%" + message);
      return true;
    }

    if(grade <= 49) {
      console.log("An F or " + grade + "%" + message);
      return true;
    }
  } else {
    console.error("Only Real numbers for grades please.");
  }
}
exampleOfGlobalVsLocal();
exampleOfDefaultVariables(58);
exampleOfDefaultVariables(30, " is shitty.");
exampleOfDefaultVariables(100, " is FANTASTIC, congrats!");
