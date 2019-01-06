window.onload = () => {
    console.log("ready.");
    //Symbols - unique always
    let mysymbol = Symbol('test');
    console.log(mysymbol);

    //classes
    class Vehicle {
        constructor(make='', model=''){
            this.make = make;
            this.model = model;
        }

        setMake(newMake) {
            this.make = newMake;
        }

        setModel(newModel) {
            this.model = newModel;
        }

        /** getters **/
        get make(){
            return this._make;
        }

        get model(){
            return this._model;
        }

        /** setters **/
        set make(ma) {
            this._make = ma;
        }

        set model(mo) {
            this._model = mo;
        }
    }

    class Truck extends Vehicle{
        constructor(type = 'Truck', make, model){
            super(make, model);
            this.type = type;
        }
    }


    let x = new Truck(undefined, "Toyota", "Tacoma");


    console.log(x);
    console.log(x.make + " " + x.model);
};