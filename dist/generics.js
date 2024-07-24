"use strict";
var _a, _b;
function loger(arg) {
    console.log(arg);
}
function loger2(arg) {
    console.log(arg);
}
function LoggingDetails(arg) {
    return arg;
}
console.log(LoggingDetails(11));
console.log(LoggingDetails("Waqas"));
console.log(LoggingDetails([1, 2, 3, 4, 5, 6]));
console.log(LoggingDetails([1, 'Malik']));
class keys {
    constructor(k, p) {
        this.k = k;
        this.p = p;
    }
}
let k1 = new keys(1, 'Khan');
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let p1 = new KeyValuePair('22', 'Animal');
let p2 = new KeyValuePair('1', 'Ahmed');
class VK_Pair {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let vk1 = new VK_Pair(1, 'Ahmed Ali');
class IdCardTemplate {
    constructor(id, Name) {
        this.id = id;
        this.Name = Name;
    }
}
let er1 = new IdCardTemplate('37109-0984567-9', 'Ahmed Khan');
let er2 = new IdCardTemplate(3475923456789, 'Wahid Ali');
class UtillsArray {
    static retArr(value) {
        return [value];
    }
}
let a = UtillsArray.retArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 90]);
console.log(a);
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
(_a = fetch('https://www.google.com/it').data) === null || _a === void 0 ? void 0 : _a.username;
(_b = fetch('https:?/asdjflaksfj').data) === null || _b === void 0 ? void 0 : _b.title;
function echo(value) {
    return value;
}
console.log(echo('alsdk;fjaksdfj'));
function echo2(value) {
    return value;
}
console.log(echo2({ name: "Ahmed Raza" }));
function echo3(value) {
    return value;
}
let cu = { Id: 1, Name: "Ahmed khan" };
console.log(echo3(cu));
class Pers {
    constructor(name) {
        this.name = name;
    }
}
function echo4(value) {
    return value;
}
let pb = new Pers("Ahmed Raza");
console.log(echo4(pb));
class Store {
    constructor() {
        this.objects = [];
    }
    add(obj) {
        this.objects.push(obj);
    }
    GetItems() {
        return this.objects.map((i) => {
            return i;
        });
    }
    find(property, value) {
        return this.objects.find(obj => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: "GG", price: 10000, category: "electronics" });
store.add({ name: "Motor", price: 1222000, category: "electronics" });
store.add({ name: "Piple", price: 1000, category: "Food" });
store.add({ name: "bata", price: 14000, category: "FootWear/Clothing" });
store.add({ name: "AirCooler", price: 100330, category: "electronics" });
console.log(store.GetItems());
console.log(store.find("name", "GG"));
class CompressableStore extends Store {
    compress() {
    }
}
class SearchableStore extends Store {
    findData(name) {
        return this.objects.find((obj) => { return obj.name === name; });
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return this.objects.filter((ob) => {
            return ob.category === category;
        });
    }
}
let Pr = new ProductStore();
Pr.filterByCategory("Food");
function Echo(arg) {
    return arg;
}
function printName(obj) {
    console.log(obj.name);
}
printName({ name: "printer" });
//# sourceMappingURL=generics.js.map