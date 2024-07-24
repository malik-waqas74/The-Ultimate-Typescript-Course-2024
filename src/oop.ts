//                    OOP
//In object oriente programming the objects are the building blocks of the applications.
// A class is the blue print of the object that uses the class.
// An object is unit that contains data by the properties and the operations by the methods/functions.

class Account { 
    id: number;
    //optional property either you are entring or not
    name? : string|null;
    
    constructor(id: number,name?:string) { 
    this.id = id; 
    this.name = name;
    }
}

let acc = new Account(1,"WAQAS");
console.log(`Accound Id ${acc.id}, Name :${acc.name}`);

// strict property of initialilzation : it check the class have must initializer i.e. constructor
// if we set it to false it does not chekc

class Car {
    plate_number : string ;
    car_company : string;
    Model : number;
}
//Accessing Properties
let c1 = new Car();
c1.plate_number = "ACT2345";
c1.car_company = "Honda",
c1.Model = 2021;
console.log(c1.car_company,c1.Model);

//------------------ Methods in the class ------------------------

class CricketTeam {
    team_name : string;
    captain_name :string;
    constructor (team_name:string,captain_name:string){
        this.team_name = team_name;
        this.captain_name = captain_name;
    }
    showData():void{


        console.log(`Team : ${this.team_name}\nCaptain : ${this.captain_name}`);
    }
}
let t1 = new CricketTeam("Panther Cricket Club","Malik Shoaib");
t1.showData();

//-------------------------------Read Only and optional properties-----------------------------
// We can only read not modify
class Bank {
    // make the code robust by readonly 
    readonly branch_Code : number;
    bankName : string;
    totalEmployees : number;
    //it is an optional property by the use of ?
    location ? : string;
    constructor(branch_Code :number,bankName:string,totalEmpmloyees:number,location?:string){ 
        this.bankName = bankName;
        this.branch_Code = branch_Code ;
        this.location = location;
        this.totalEmployees = totalEmpmloyees;
    }
    

}
let b1 = new Bank(11,"HBL",40);
// it gives error when modifying branch code coz it is read only 
//b1.branch_Code = 44
console.log(b1.totalEmployees);
console.log(b1.branch_Code);

let b2 = new Bank(50,"HBL",40,"Attock");
console.log(b2.totalEmployees);
console.log(b2.branch_Code);

//------------------- Access Modifiers -----------------------
/*
Modifiers or controling access to properties and method to make more robust code 
3 access modifiers in Typescript : 
 - public    can be accessalbe 
 - private    canot be accessable and inherited
 - protected   can be inherited only accessed in the parent child relationship // particular use in inheritance
*/
console.log("Access Modifiers");
class Acc {
    readonly id : number;
    owner : string ;
    private balance : number;
    nickName ? : string;

    constructor(id:number,owner:string,balance:number, nickName?:string){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickName = nickName;
    }

    deposit (amount:number):void {
        if(amount<=0){
            throw new Error("Invalid Ammount");
        }
        else{
            this.balance += amount;
        }
    }

    withDraw (amount:number):void{
        if(amount<=0){
            throw new Error ("Invalid Amount")
        }
        else{
            this.balance -=amount;
        }

    }

    getBalance():void{
        console.log(`Total Balance : ${this.balance}`);
    }
}

let cust1 = new Acc(1,"Hassan Raza",70000);

//cust1.balance  We can't use the balance property outside the class
cust1.deposit(80000);
cust1.getBalance();
cust1.withDraw(6000);
console.log("Amount After WithDrawl");
cust1.getBalance();

//----------------Parameter Properties------------------------------

// we are not defining the class members we only initialize the new values in the constructor of the class

class A {
    constructor(public id:number,public name:string){}

    setId (i:number){
        this.id = i;
    }
    setName(n:string){
        this.name =n;
    }


}

//------------------------------Getters and Setters-----------------------------------


class Account4 {
    nickname?: string;
  
    constructor(
      public id: number,
      public owner: string,
      private _balance: number
    ) {}
  
    deposit(amount: number): void {
      if (amount <= 0) throw new Error('Invalid amount');
      this._balance += amount;
    }

    // getters is a method inside class that we used for getting a value of property
    get balance(): number {
      return this._balance;
    }
    // for setting its value
    set balance(value: number) {
      if (value < 0) throw new Error('Invalid value');
         this._balance = value;
    }
}

const account4 = new Account4(1, 'Nami', 12000000);
console.log(account4.balance);
account4.balance = 1;

//--------------------------------Index Signatures----------------------------------------

// Index Signatures for creating object properties dinamically
// dynamically means without defining the name of the properties in the class
// without losing the type safety
console.log("Index Signatures");

class SeatAssignment {
    // The Below code creates te objecst with the values
    [seatNumber: string]: string;

}

const seats = new SeatAssignment();
seats.A1 = "Nami";
seats.A2 = "Pika";
seats.A3 = "Mulk";
seats.A4 = "Khan";
seats.b6 = "Ali Khan";
console.log(seats);


class Cric{
    [teamName : string] : string;
}
const team = new Cric();
team.n1 = "Aus";
team.n2 = "Eng";
team.n3 = "Ind";
team.n4 = "Pak";
team.n5 = "SA";
team.a1 = "Afg";
team.u9 = "Uae"
console.log(team);

//----------------------------- Static Member --------------------------------
// These members are accessed using the class name. we declare them if we need one peroperty of the class or one method in the memory...

console.log("/////////Static Members");
class stopwatch{
    // property can be used by the class name accessor
    private static currentSeconds:number = 0;

    start(){
        stopwatch.currentSeconds++;
    }
    stop(){
        stopwatch.currentSeconds;
    }
    reset(){
        stopwatch.currentSeconds = 0;
    }

    // static method can be accessed with the class name
    static getTime():number{
        return stopwatch.currentSeconds;
    }

}

let s1 = new stopwatch();
s1.start();
s1.start();
let s2 = new stopwatch();
s2.start();
s2.start();
// the final outcome can be effected byt the both objects having the impact on the result
console.log(stopwatch.getTime());

//-----------------------------Inheritance--------------------------------
// Parent child relationship... super construcutor can be used 
// extends keyword is used in the class names.....
class Cars{

    constructor(protected company:string){

    }
    drive(){
        console.log("Driving the car..........")
    }


}
class Honda extends Cars{
    model : number;
    price : number;
    owner : string;
    constructor(company:string,model:number,price:number,owner :string){

        super(company);
        this.model = model;
        this.owner = owner;
        this.price = price;
    }
}

let h1 = new Honda("Honda",2022,12000090,"Malik Abdullah");
h1.drive();


//---------------------Method Overriding-------------
// modifying the implementation of the implemented method....

class Person{
    constructor(protected firstName:string,protected lastName :string){}

    // method for returning the full name
     fullName(){
        return `First name : ${this.firstName} ${this.lastName}`;
    }
}

class teacher extends Person{
    constructor (f:string,l:string){
        super(f,l);
    }
    override fullName() {
        return 'Professor ' + this.firstName;
      }

  
}
let t = new teacher("Shahzad","Faisal");
console.log(t.fullName())
// Polymorphism--------------------Many forms

// ----- Abstract Classes.... It is only the dashboard type we have to use with our own benifit in each form

abstract class Shape{
    constructor(protected color : string){

    }

    // by using abstract it only appers in the particular class or its code ;;
    abstract render():void;
}
class Circle extends Shape{
    constructor(color:string){
        super(color);
    }

    override render(): void {
        console.log(`Rendering ${this.color} color Circle`)
    }
}

class square extends Shape{
    constructor(color:string){
        super(color);
    }

    override render(): void {
        console.log(`Rendering ${this.color} color Square`)
    }
}

let cir = new Circle("red")
let sq = new square("blue");
cir.render();
sq.render();



// --------------------------------- Interfaces----------------------------
// there are other building blocks in OOP besides 'Class' and it called 'Interfaces'
// usage of Interfaces is to define the interface or shape of an objects

interface Calender{
    name :string,
    addEvent() : void;
    removeEvent():void;


}

interface cloudCalender extends Calender{
    sync():void;
}


class GoogleCalender implements cloudCalender{
    constructor(public name:string){
        
    }

    addEvent(): void {
        console.log("ADD")
    }
    removeEvent(): void {
        console.log("REMOVE")
        
    }
    sync(): void {
        console.log("Sync")
        
    }
}


let g = new GoogleCalender("MEEEEEEEEEEEEE");
g.addEvent();
g.removeEvent();
g.sync();
