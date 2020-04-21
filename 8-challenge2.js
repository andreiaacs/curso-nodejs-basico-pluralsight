// Print "Hello World"
// Every second
// And stop after 5 times
// After 5 times. Print "Done" and let Node exit.
let i = 0;
const interval = setInterval(printHello, 1000);

function printHello() {
    console.log('Hello World!');
    i++;
    if (i === 5) {
        console.log('Done');
        clearInterval(interval);
    }
}