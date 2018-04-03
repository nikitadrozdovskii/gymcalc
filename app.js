//get DOM elements
const sub = document.getElementById('1RMform');
const exe = document.getElementById('exercise');
const reps = document.getElementById('reps');
const weight = document.getElementById('weight');

const outExe = document.getElementById('outputExercise');
const out1RM = document.getElementById('output1RM');
const out = document.getElementById('output');
//Add Event Listeners
sub.addEventListener('submit',calculate1RM);

//Calculate 1 RM
function calculate1RM(e){
    outExe.innerText = "Exercise: ".concat(exe.value);
    let tempResult;
    switch (parseInt(reps.value)) {
        case 1:
            tempResult = weight.value;
            break;
        case 2:
            tempResult = weight.value/0.95;
            break;
        case 3:
            tempResult = weight.value/0.93;
            break;
        case 4:
            tempResult = weight.value/0.90;
            break;
        case 5:
            tempResult = weight.value/0.87;
            break;
        case 6:
            tempResult = weight.value/0.85;
            break;
        case 7:
            tempResult = weight.value/0.83;
            break;
        case 8:
            tempResult = weight.value/0.80;
            break;
        case 9:
            tempResult = weight.value/0.77;
            break;
        case 10:
            tempResult = weight.value/0.75;
            break;
        case 11:
            tempResult = weight.value/0.73;
            break;
        case 12:
            tempResult = weight.value/0.70;
            break;
    }
    tempResult = Math.round(tempResult);

    out1RM.innerText = "1RM: ".concat(tempResult);
    out.style.display = "block";


e.preventDefault();
}