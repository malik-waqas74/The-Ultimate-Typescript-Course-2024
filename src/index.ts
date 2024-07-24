// Core Types
// 1 -----   String   =  "12342344"
// 2 -----   Number   = 1234234234 or 40_444_33
// 3 -----   boolean  = true or false

// tsconfig.json configs
// change the path of root directory in src folder that includes typescript files that are under Modules Section
// change the path of out  directory that includes the js files for typescript that are under Emit section dist folder/distributed folder
// remove Comments ----> it removes comments from js file shorter.
// noEmitError ---> Remove errors from ts files
// now execute only using tsc that run all ts files

// TypeScript Debug Apps
// enable sourceMap    map the each line of ts file with js file and the map file is created
// then execute the run debug it create json file
// the launch.json file is created it tells the compiler to execute the js code for ts applications
// the add the setting             "preLaunchTask": "tsc: build - tsconfig.json", under program it 
// tells the vs code to use typescript compiler to build the ts apps using the configuration file of ts



//------------------PERMITIVES------------------------/
//
//Any : this is used as u can define any type of value bool,num etc

function render(d:any){

    console.log(d);
}

render("112341234");

// Arrays : In ts arrays re predefined type

let names : string[] = ["A","B","C"];
names.forEach(element => {
    console.log(element);
    
});

//Tuples : We can define different types in a single variables. these are useful for key value pairs..



let user : [number,string] = [1,"Ali"];
user.push(33);
user.push(1);
console.log(user);

//Enums : these are useful for the group of constants.by default enums assign values to constants starting from zero till end.
///          but we explicitly define the values of constants


enum teams {Pak="PAK",SA="SA",Ind="IND",Eng="IND"};
let myTeam : teams = teams.Pak;
console.log("My Team : ",myTeam)

//now we can also define enum as constant

const enum rateBySize {Small =1000,Medium = 2000, Large =5000};
let mySize :rateBySize = rateBySize.Medium;
console.log("My Shirt price : ",mySize);


// FUNCTIONS : for specific types
// function name (paras:types) return values{code of the function}
// for not implicit returns we can add the setting in configuration.....
// if we add an extra argument it can give compilation error
// if we want to optional parameter we can add ? next to the parameter name

function electricityBill(units:number):number{
    let bill:number;
    if(units>200){
        bill = units*27
        
    }
    bill = units*13;
    


    return bill;

}

console.log(electricityBill(20_750));


//OBJECTS ::::::   An object in TypeScript is an instance that contains a set of key-value pairs.
// These pairs can hold various data types, including scalar values, functions, or even arrays of other objects.

let FB_user :{
    readonly userName :  string,
    Name : string,

    
} = {
    userName:"malikwaqas_74",
    Name : "WAQAS",
  
};

console.log(FB_user);

// Type Alias : These are used for write the code for the custom usage on defining your own type....
///             These are created once and used in many instances in the single program..


type employee = {
    readonly id : number,
    name : string,
    dob :number
}

//now create emp number 1 

let e1:employee ={
    id : 1,
    name:"Waqsa",
    dob :2000

}
//now creating emp number 2
let e2:employee ={
    id : 2,
    name:"Ahmed",
    dob :2002

}
let e3:employee ={
    id : 3,
    name:"Ali",
    dob :1989

}
let allEmployees : object[] = [e1,e2,e3];
console.log(allEmployees);

// UNIONS : these are used for the choose among the choices. means one variable have type of more than one
//   we entter weight in number or as a string it cn accepte it
// it is with | sign


function kgToLbs(weight:number | string) : number{
    if(typeof(weight)==='number'){
        return weight *2.2;
    }
    else{
        return parseInt(weight) *2.2;
    }

}

console.log(kgToLbs('220kg'),'lbs');

// INTERSECTION : when u must have to choose the both types. It is with & sign

type CEO = {
    name: string,
    boardToReportTo: string
  };
  
type Employee = {
    name: string,
    manager: string
};
  
type Both = CEO & Employee;

let worker : Both ={
    name : "Waqas",
    boardToReportTo: "Owner",
    manager : "yes"

}
console.log(worker);

// Literls : Literal Types in TypeScript allow you to specify exact values for variables or properties.

// literal (exact,choose)
//the following example covers that it choose 50 or 40 
let age: 50|40 = 50;

// now let me explain the example of a Men who is either going to italy or dubai

type dest ="Italy"|"Dubai";
let myDest :dest = "Dubai";
console.log("I am going to ",myDest);

