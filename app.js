/*
1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 
    second after the page loads.
2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag 
    inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p 
    element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after 
    the page loads.
3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one 
    number at a time every second.
3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop 
    continuously running (HINT: Need to create a variable).
*/

const divFirst = document.querySelector('#first');

const pFirst = document.createElement('p');
pFirst.innerText = "Hi";

setTimeout(() => {
    divFirst.insertAdjacentElement('afterbegin', pFirst);
}, 1000);


const divTimeoutNesting = document.querySelector('#timeout-nesting');

const pOne = document.createElement('p');
pOne.innerText = "One";

const pTwo = document.createElement('p');
pTwo.innerText = "Two";

setTimeout(() => {
    divTimeoutNesting.insertAdjacentElement('afterbegin', pOne);
    setTimeout(() => {
        pOne.insertAdjacentElement('afterend', pTwo);
    }, 1000);
}, 2000);


let c = 0; // initialize (c)ounter variable

const counter = setInterval(() => {
    c++; // ha, like the programming language. C++. ha. anyway...
    console.log(c);
}, 1000);


const stopBtn = document.querySelector('button');

stopBtn.addEventListener('click', () => {
    clearInterval(counter);
});


// BONUS
/*
4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". 
    Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the 
    following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have 
    it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).
*/

