"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    console.log("Component Decorator Callled");
    console.log(constructor.prototype.uniqueId = Date.now());
    constructor.prototype.InsertIntoDom = () => {
        console.log("Inserting the Component into the DOM");
    };
}
let ProfileComponent = class ProfileComponent {
    constructor() {
    }
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
let c = new ProfileComponent();
function PComponent(value) {
    return (constructor) => {
        console.log("Component Decorator Callled");
        console.log(constructor.prototype.uniqueId = Date.now());
        console.log(constructor.prototype.options = value.selector);
        constructor.prototype.InsertIntoDom = () => {
            console.log("Inserting the Component into the DOM");
        };
    };
}
let PComp = class PComp {
};
PComp = __decorate([
    PComponent({ selector: "#My-phase" })
], PComp);
let pc = new PComp();
function Computer(constructor) {
    constructor.prototype.Course_Name = "Computer Science";
    console.log("Computr Decorator called");
}
function Physics(constructor) {
    constructor.prototype.Course_Name = "Physics";
    console.log("Physics Decorator called");
}
let Courses = class Courses {
};
Courses = __decorate([
    Physics,
    Computer
], Courses);
let ct = new Courses();
function Logger(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class MessageLogger {
    say(...message) {
        console.log(...message);
    }
}
__decorate([
    Logger
], MessageLogger.prototype, "say", null);
let ml = new MessageLogger();
ml.say("Ali\n", "Irfan\n", "Muhammad");
ml.say(["Ali", "Irfan", "Imran", "Muhammmad", "Ismael", "Wahid", "Bakir"]);
function Capitalize(target, methodName, descriptor) {
    let orginal_result = descriptor.value;
    console.log(orginal_result);
    descriptor.value = function () {
        const result = orginal_result === null || orginal_result === void 0 ? void 0 : orginal_result.call(this);
        console.log(result);
        return (typeof result === 'string') ? result.toUpperCase() : result;
    };
}
class Manager {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Manager.prototype, "get", null);
let mn = new Manager("Malik", "Waqas");
console.log((mn.get()));
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`Password Must be ${length} characters.....`);
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Member {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], Member.prototype, "password", void 0);
let m1 = new Member('1116');
//# sourceMappingURL=decorators.js.map