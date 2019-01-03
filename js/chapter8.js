console.log("ready.");

var array1 = [1,2,3,4,5];
console.log(array1.toString() + ` with a length of ${array1.length}`);
array1[58] = 2000;
console.log(`But now the length of array 1 has become ${array1.length}`);
//using map
function addOne(x) {
  if(x == 'undefined'){
    console.err("shit");
  }
  return ++x;
}

var array2 = array1.map(addOne);
for(var z of array2) {
  console.log(z);
}

//splicing
var insertedValue = [10, 10, 10, 10, 18];
console.log(`Before Splicing ${array1.toString()}`);
array1.splice(20, 20, insertedValue);
console.log(`After Splicing ${array1.toString()}`);
console.log(array1.length);
//calling funciton with a spread operator
console.log(`Calling Max on array with a spread argument gives -> ${Math.max(...insertedValue)}`);

console.log(`Adding insertedValue to array2 using ... -> ${array2.concat(...insertedValue)}`);

var lastNames = ['Johnson', 'McDermot', 'Erwin'];
var firstNames = ['Richard', 'Jerome', 'Charles'];
console.log(`Using join on array2 and array1 -> ${lastNames.join()} and has the type ${typeof lastNames.join()}`);

var combinedNames = lastNames.concat(firstNames);
var [a, b, ...c] = combinedNames;
console.log(`After append of First and Last names array -> ${combinedNames.toString()}`);
console.log("a -> " + a);
console.log("b -> " + b);
console.log("c -> " + c.toString());
