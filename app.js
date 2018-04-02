//get DOM elements
const sub = document.getElementById('1RMform');

//Add Event Listeners
sub.addEventListener('submit',calculate1RM);

//Calculate 1 RM
function calculate1RM(e){
    alert('Calculating');

e.preventDefault();
}