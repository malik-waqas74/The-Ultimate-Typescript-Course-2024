//        Generics   
// it is the generalized form of the functions
//Generics in TypeScript enable writing code that can work with a variety of data types while maintaining type safety.
// They allow the creation of reusable components, functions, and data structures without sacrificing type checking.

function loger (arg : string): void{

    console.log(arg);


}
function loger2 (arg : number): void{
    console.log(arg);
}
// We have to call the above functions one by one but the logics are the same....

// Now in the above example we need a genralized form of the function to console the things
// we assign the type variable in <> braces....


function LoggingDetails <T>(arg : T) : T{

    return arg;


}
console.log(LoggingDetails(11));//pasing a number
console.log(LoggingDetails("Waqas"));//passing a string
console.log(LoggingDetails([1,2,3,4,5,6]));// passing an array
console.log(LoggingDetails([1,'Malik']));// passing a tupple

// Now we work with a generic class
// Most common name is template classes

class keys{
    constructor(public k:number,public p : string){}
}

let k1 = new keys(1,'Khan');

class KeyValuePair<T> {

    constructor(public key: T,public value : T){


    }
}
// now we can define the type of parameters of the generic variables
let p1 = new KeyValuePair<string>('22','Animal');
let p2 = new KeyValuePair<string>('1','Ahmed');
//p2.key.now we can access the methods of the strings

// Creation of another class with more than 1 variable
// we can give many types of parameters....
class VK_Pair<U,V>{
    constructor(public id:U,public name:V){}
}

let vk1 = new VK_Pair<number,string> (1,'Ahmed Ali');

// For Example we have ID Card number example 
// with dashes or without dashes entering in the fields

class IdCardTemplate <I,N>{
    constructor(public id : I,public Name : N){}
}
/// lets enter id card with dashes

let er1 = new IdCardTemplate<string,string>('37109-0984567-9','Ahmed Khan');
// enter id without dashes
let er2 = new IdCardTemplate <number,string>(3475923456789,'Wahid Ali');

// we can put the function is the class als


class UtillsArray {

    static retArr<T>(value:T){
        return [value];

    }
}

let a = UtillsArray.retArr<Number[]>([1,2,3,4,5,6,7,8,9,90])
console.log(a);

// Generic Interfaces

interface Result <T>{
    data : T |null,
    error : string|null
}

function fetch <T>(url:string):Result<T>{
    console.log(url);

 
    return {data:null , error :null}

}

interface User {
    username : string
}
interface Product {
    title : string,
    quantity : number
}

fetch <User>('https://www.google.com/it').data?.username;
fetch <Product>('https:?/asdjflaksfj').data?.title;


// Generic Constraints

/// Constraints are the boundries/ or rules for an object to pass the values to function or class etc....
// The words extends is used to appyly the rules on the generic variable...

// building an interface who only recives id as number and name as string

interface Customers {   
    Id : number,
    Name : string
}
function echo<T extends number | string>(value :T){
    return value;
}
console.log(echo('alsdk;fjaksdfj'));
function echo2 <T extends {name:string}>(value : T){
    return value;
}
console.log(echo2({name:"Ahmed Raza"}))

// we can also extends the classess and interfaces
function echo3 <T extends Customers>(value : T){
    return value;

}

let cu : Customers = {Id:1,Name : "Ahmed khan"};

console.log(echo3(cu));

class Pers {

    constructor (public name:string){}

}

function echo4 <T extends Pers>(value : T){
    return value;

}

let pb = new Pers("Ahmed Raza");

console.log(echo4(pb));

// Now Apply constraints on the generic classes

interface Products_cart{
    name : string,
    price : number,
    category : string
}

class Store <T>{
    protected objects : T[]= []; //initializae the array

    add (obj : T) : void{
        this.objects.push(obj);
    }
    GetItems () {
        return this.objects.map((i)=>{
            return i;
        })
    }

    find (property : keyof T,value : unknown): T|undefined{

        return this.objects.find(obj=>obj[property]===value);

    }
}
let store = new Store<Products_cart>();
store.add({name:"GG",price :10000,category : "electronics"});
store.add({name:"Motor",price :1222000,category : "electronics"});
store.add({name:"Piple",price :1000,category : "Food"});
store.add({name:"bata",price :14000,category : "FootWear/Clothing"});
store.add({name:"AirCooler",price :100330,category : "electronics"});
console.log(store.GetItems());
console.log(store.find("name","GG"));
//only passing the generic type of parameter
class CompressableStore <T> extends Store<T> {
    
    compress () {
    


    }
}

// Applying restrictions on the methods of the child class

class SearchableStore <T extends {name:string}> extends Store<T> {
    
    
    findData (name : string) : T |undefined{
        return this.objects.find((obj)=>{return obj.name ===name})
    }
}
class ProductStore extends Store<Products_cart>{

    filterByCategory(category : string):Products_cart[]{
        return this.objects.filter((ob)=>{
            return ob.category === category
        })
    }
}

let Pr = new ProductStore();
Pr.filterByCategory("Food");

// The Key Of Operator is used to identify the which type key searched of loooknig for
// it is primarly used as when we want to search something....

// Exercises

// Convert the function into the generic function
function Echo<T>(arg:T):T{
    return arg;
}

// Remove the error to restrict the function
function printName<T extends {name :string}>(obj: T) {
    console.log(obj.name);}

printName({name:"printer"});

// In some cases the id should be tht number or string create a generic class for this case.

class Id_Accepter <T extends string|number>{
    id : T;
    constructor (id : T){
        this.id = id;
    }
}

// In the following case what does the key of user return...
interface User { 
    userId: number; 
    username: string;}
// It returns the Union of the properties userid | username