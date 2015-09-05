var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

//console.log(a);
b();
if(a === undefined) {
    console.log("a is undefined");
}
else {
    console.log("a is defined::"+a);
}

//Asynchronous Event Handling
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms) {
        //Do nothing
    }
    console.log('finished waiting');
}

function clickHandler() {
    console.log('click event!');
    console.log('In clickHandler I can see a::'+a);
}

//listen for the click event
/*document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished execution');*/

var arr = ["Burp!"];
console.log("arr Variable is of type array::"+(Object.getPrototypeOf(arr)==Object.getPrototypeOf([]))); //[] which denotes its an Array
//How to use Object.create using empty Object prototype
//Reference: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create
var trial1 = Object.create({}, { p: { value: 42 } });
var trial2 = {p:42};
var o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
console.log("trial1 == o2 " +(trial1 == o2) );//false
console.log("JSON.stringifytrial1 == trial2 " +(JSON.stringify(trial1) === JSON.stringify(trial2)) );//true
console.log("trial1 == trial2 " +(trial1 == trial2) ); //false
trial1 = {p:42};
console.log("trial1 == trial2 " +(trial1 == trial2) );//false
console.log("JSON.stringifytrial1 == trial2 " +(JSON.stringify(trial1) === JSON.stringify(trial2)) );//true

function testFunction(param1,param2) {
    console.log("param1::"+param1+" param2::"+param2);
    console.log("arguments length::"+arguments.length);
    for (i = 0; i<arguments.length; i++) {
        console.log("argument["+i + "]="+arguments[i]);
    }
}
testFunction(1,2,3,4);
    