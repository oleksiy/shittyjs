window.onload = function () {
  console.log("Ready Chapter 11");

  let promptButton = document.getElementById("promptButton");
  let output = document.getElementById("promptOutput")

    promptButton.addEventListener('click', () =>{
      let result = prompt("Enter something...");
      output.innerText = result;
  });

  function Vehicle(make='', model=''){
      this.make = make;
      this.model = model;

      function setMake(make) {
          this.make = make;
      }

      function setModel(model){
          this.model = model;
      }

      function setId(){
          return Number(new Date());
      }

      this.vin = setId();


  }

  let toyotaCamry = new Vehicle("Toyota", "Camry");
  console.log(`created an object (vehicle) with VIN: ${toyotaCamry.vin} - ${toyotaCamry.make} - ${toyotaCamry.model}`);

  function Truck(make='', model='') {
      Vehicle.call(make, model);
      this.type = 'Truck';

      this.print = function() {
          return `${this.make}`;
      };
  }

  let toyotaTundra = new Truck("Toyota", "Tundra");
  console.log(toyotaTundra.print());
};