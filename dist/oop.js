"use strict";
class Account {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let acc = new Account(1, "WAQAS");
console.log(`Accound Id ${acc.id}, Name :${acc.name}`);
class Car {
}
let c1 = new Car();
c1.plate_number = "ACT2345";
c1.car_company = "Honda",
    c1.Model = 2021;
console.log(c1.car_company, c1.Model);
class CricketTeam {
    constructor(team_name, captain_name) {
        this.team_name = team_name;
        this.captain_name = captain_name;
    }
    showData() {
        console.log(`Team : ${this.team_name}\nCaptain : ${this.captain_name}`);
    }
}
let t1 = new CricketTeam("Panther Cricket Club", "Malik Shoaib");
t1.showData();
class Bank {
    constructor(branch_Code, bankName, totalEmpmloyees, location) {
        this.bankName = bankName;
        this.branch_Code = branch_Code;
        this.location = location;
        this.totalEmployees = totalEmpmloyees;
    }
}
let b1 = new Bank(11, "HBL", 40);
console.log(b1.totalEmployees);
console.log(b1.branch_Code);
let b2 = new Bank(50, "HBL", 40, "Attock");
console.log(b2.totalEmployees);
console.log(b2.branch_Code);
console.log("Access Modifiers");
class Acc {
    constructor(id, owner, balance, nickName) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickName = nickName;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Ammount");
        }
        else {
            this.balance += amount;
        }
    }
    withDraw(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        else {
            this.balance -= amount;
        }
    }
    getBalance() {
        console.log(`Total Balance : ${this.balance}`);
    }
}
let cust1 = new Acc(1, "Hassan Raza", 70000);
cust1.deposit(80000);
cust1.getBalance();
cust1.withDraw(6000);
console.log("Amount After WithDrawl");
cust1.getBalance();
class A {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    setId(i) {
        this.id = i;
    }
    setName(n) {
        this.name = n;
    }
}
class Account4 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid value');
        this._balance = value;
    }
}
const account4 = new Account4(1, 'Nami', 12000000);
console.log(account4.balance);
account4.balance = 1;
console.log("Index Signatures");
class SeatAssignment {
}
const seats = new SeatAssignment();
seats.A1 = "Nami";
seats.A2 = "Pika";
seats.A3 = "Mulk";
seats.A4 = "Khan";
seats.b6 = "Ali Khan";
console.log(seats);
class Cric {
}
const team = new Cric();
team.n1 = "Aus";
team.n2 = "Eng";
team.n3 = "Ind";
team.n4 = "Pak";
team.n5 = "SA";
team.a1 = "Afg";
team.u9 = "Uae";
console.log(team);
console.log("/////////Static Members");
class stopwatch {
    start() {
        stopwatch.currentSeconds++;
    }
    stop() {
        stopwatch.currentSeconds;
    }
    reset() {
        stopwatch.currentSeconds = 0;
    }
    static getTime() {
        return stopwatch.currentSeconds;
    }
}
stopwatch.currentSeconds = 0;
let s1 = new stopwatch();
s1.start();
s1.start();
let s2 = new stopwatch();
s2.start();
s2.start();
console.log(stopwatch.getTime());
class Cars {
    constructor(company) {
        this.company = company;
    }
    drive() {
        console.log("Driving the car..........");
    }
}
class Honda extends Cars {
    constructor(company, model, price, owner) {
        super(company);
        this.model = model;
        this.owner = owner;
        this.price = price;
    }
}
let h1 = new Honda("Honda", 2022, 12000090, "Malik Abdullah");
h1.drive();
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `First name : ${this.firstName} ${this.lastName}`;
    }
}
class teacher extends Person {
    constructor(f, l) {
        super(f, l);
    }
    fullName() {
        return 'Professor ' + this.firstName;
    }
}
let t = new teacher("Shahzad", "Faisal");
console.log(t.fullName());
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        console.log(`Rendering ${this.color} color Circle`);
    }
}
class square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        console.log(`Rendering ${this.color} color Square`);
    }
}
let cir = new Circle("red");
let sq = new square("blue");
cir.render();
sq.render();
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        console.log("ADD");
    }
    removeEvent() {
        console.log("REMOVE");
    }
    sync() {
        console.log("Sync");
    }
}
let g = new GoogleCalender("MEEEEEEEEEEEEE");
g.addEvent();
g.removeEvent();
g.sync();
//# sourceMappingURL=oop.js.map
// I have completed till the OOP programming in this file