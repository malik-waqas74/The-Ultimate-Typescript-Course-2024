"use strict";
function render(d) {
    console.log(d);
}
render("112341234");
let names = ["A", "B", "C"];
names.forEach(element => {
    console.log(element);
});
let user = [1, "Ali"];
user.push(33);
user.push(1);
console.log(user);
var teams;
(function (teams) {
    teams["Pak"] = "PAK";
    teams["SA"] = "SA";
    teams["Ind"] = "IND";
    teams["Eng"] = "IND";
})(teams || (teams = {}));
;
let myTeam = teams.Pak;
console.log("My Team : ", myTeam);
;
let mySize = 2000;
console.log("My Shirt price : ", mySize);
function electricityBill(units) {
    let bill;
    if (units > 200) {
        bill = units * 27;
    }
    bill = units * 13;
    return bill;
}
console.log(electricityBill(20750));
let FB_user = {
    userName: "malikwaqas_74",
    Name: "WAQAS",
};
console.log(FB_user);
let e1 = {
    id: 1,
    name: "Waqsa",
    dob: 2000
};
let e2 = {
    id: 2,
    name: "Ahmed",
    dob: 2002
};
let e3 = {
    id: 3,
    name: "Ali",
    dob: 1989
};
let allEmployees = [e1, e2, e3];
console.log(allEmployees);
function kgToLbs(weight) {
    if (typeof (weight) === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs('220kg'), 'lbs');
let worker = {
    name: "Waqas",
    boardToReportTo: "Owner",
    manager: "yes"
};
console.log(worker);
let age = 50;
let myDest = "Dubai";
console.log("I am going to ", myDest);
//# sourceMappingURL=index.js.map