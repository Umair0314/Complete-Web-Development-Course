console.log("This is Tutorial 53");

function greet(name, greettext = "Greeting from JavaScript") {
    let name1 = "This";
    console.log(name + "is a good boy")
    console.log(greettext + " " + name)
}
function sum(a,b,c){
    let d = a + b + c;
    return d;
    // console.log("function is returned");
}

let name1 = "Umair"
let name2 = "Haris"
let name3 = "Saghir"
let name4 = "Ikram"
let greettext = "Good Morning"
greet(name1, greettext)
greet(name2, greettext)
greet(name3, greettext)
// let returnval = greet(name4)
// console.log(returnval)

let returnval = sum(1,2,3)
console.log(returnval)
// console.log(name1 + "is a good boy");
// console.log(name2 + "is a good boy");
// console.log(name3 + "is a good boy");
// console.log(name4 + "is a good boy");