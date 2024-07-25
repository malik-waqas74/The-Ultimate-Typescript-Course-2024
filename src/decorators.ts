//-------------------DECORATORS--------------------------
// A Decorator is a special kind of declaration that can be attached to a class declaration, 
// method, accessor, property, or parameter.Decorators use the form @expression , 
// where expression must evaluate to a function that will be called at runtime with 
// information about the decorated declaration.
// To create decorators on the setting Experimental Decorators......
// A decorator is just a function it calls at runtime
function Component(constructor: Function ){
    console.log("Component Decorator Callled");
   
    console.log( constructor.prototype.uniqueId = Date.now());
    
    constructor.prototype.InsertIntoDom = ()=>{
        console.log("Inserting the Component into the DOM");
        
    }
    
}

@Component
class ProfileComponent {
    constructor(){
    }
}

let c = new ProfileComponent();

// Parameterized Decorators : Passing the parmaeters to the component function from the class
interface options {
    selector : string
}
function PComponent (value : options){

    return (constructor: Function )=>{
        console.log("Component Decorator Callled");
        console.log( constructor.prototype.uniqueId = Date.now());
        console.log(constructor.prototype.options = value.selector);
        
        constructor.prototype.InsertIntoDom = ()=>{
            console.log("Inserting the Component into the DOM");
            
        }
    
    }
}
@PComponent({selector : "#My-phase"})
class PComp {

}

let pc = new PComp();

// Decorators Composition : Calling the decorators up down the bottom of called first
// i.e f(g(x))   first g(x) calculated and the result is passed to f
function Computer (constructor : Function){
    constructor.prototype.Course_Name = "Computer Science"
    console.log("Computr Decorator called");
    
}

function Physics (constructor: Function){
    constructor.prototype.Course_Name = "Physics";
    console.log("Physics Decorator called");
    
}
// Now add the computer and physics decoraters to the calss
@Physics
@Computer
class Courses {

}
let ct = new Courses();
// in the aboce example the computer called first.....


// METHOD Decorators   Method decorators are accept the method and implement its own way....
// to achieve this we can optionaly set false to property noUnusedParameters coz we use some parameters some not....

function Logger (target : any, methodName : string,descriptor : PropertyDescriptor){
    // convert the funnction values into the new funciton
    const original = descriptor.value as Function;
    // Implementation of overriding function......
    // Accepting as many args its passed
    // Note : we cannot use Arrow functions in this case coz 
    // it prevents to use its own this for arrow funcitons.....
    descriptor.value = function ( ...args: any){

        console.log("Before");
        original.call(this, ...args);
        console.log("After");
        
        
        


    }
}

class MessageLogger {
    @Logger
    // Old Say Function only accepts one arg
    // say (message : string){
    //     console.log(message);
    // }

    // Updated function of say

    say(...message : any){
        console.log(...message);
        

    }
}
let ml = new MessageLogger();
ml.say("Ali\n","Irfan\n","Muhammad");
ml.say(["Ali","Irfan","Imran","Muhammmad","Ismael","Wahid","Bakir"]);


// Accessors Decorators use of setters and getters 

function Capitalize (target : any, methodName : string,descriptor : PropertyDescriptor){

    // gotten the description from the getter function
    let orginal_result = descriptor.value;
    console.log(orginal_result);
    

    descriptor.value = function(){

        // calling the function to got the data of the getter
        const result = orginal_result?.call(this);
        console.log(result);
        


        return (typeof result ==='string') ? result.toUpperCase() : result;
        

        }
        

    }

class Manager {
    constructor (public firstName : string, public lastName : string ){}
    @Capitalize
    get(){
        return `${this.firstName} ${this.lastName}`;
    }

}

let mn = new Manager("Malik","Waqas");
console.log((mn.get()));

// Property decorators

// syntax is similar to method 

function MinLength (length : number){
    return (target : any,propertyName : string) =>{
    
        let value : string;
        // defining the property description

        
    const descriptor : PropertyDescriptor = {
        get(){
            return value;
        },

        set(newValue : string){
            //min length is given in the function....
            if(newValue.length < length) 
                throw new Error (`Password Must be ${length} characters.....`)
            value = newValue;
            
        }

    }

    Object.defineProperty(target,propertyName,descriptor);

    }


}


class Member {
    
    @MinLength(4)
    password : string;
    constructor(password : string){
        this.password = password;


    }

}

let m1 = new Member('1116');


