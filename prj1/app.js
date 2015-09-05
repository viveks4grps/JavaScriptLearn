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
document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished execution');