//get DOM elements
const sub = document.getElementById('1RMform');
const exe = document.getElementById('exercise');
const reps = document.getElementById('reps');
const weight = document.getElementById('weight');
const card = document.getElementById('coreCard');

// const outExe = document.getElementById('outputExercise');
// const out1RM = document.getElementById('output1RM');
// const out = document.getElementById('output');
//Add Event Listeners
sub.addEventListener('submit',calculate1RM);

//Calculate 1 RM
function calculate1RM(e){
    //Validate inputs
    let ok = checkInputs();
    if (!ok){
        displayError();
    }
    else{
    clearError();

    let output = document.createElement('div');
    let ul = document.createElement('ul');
    let liName = document.createElement('li');
    let liExe = document.createElement('li');
    //add bootstrap classes
    output.className='card';
    output.style.color='black';
    ul.className = 'list-group list-group-flush';
    liName.className="list-group-item";
    liExe.className="list-group-item";
    //build output div
    ul.appendChild(liName);
    ul.appendChild(liExe);
    output.appendChild(ul);


    liName.innerText = "Exercise: ".concat(exe.value);
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

    liExe.innerText = "1RM: ".concat(tempResult);
    output.style.marginBottom='10px';
    output.style.marginTop='10px';
    card.appendChild(output);

    clearInput();
    }


e.preventDefault();
}
//Clears input fields
function clearInput(){
    exe.value='';
    weight.value='';
    reps.value=1;
}

//Check inputs
function checkInputs(){
    if (exe.value=='' || weight.value==''){
        return 0;
    }
    else{
        return 1;
    }
}

//create error li and add it above inputs
function displayError(){
    //check if error is already displayed
    if (document.querySelector('.list-group-item-danger')){
        return 0;
    }
    let errorMes = document.createElement('div');
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    errorMes.className="card";
    errorMes.style.color = "black";
    ul.className = "list-group list-group-flush";
    li.className =  "list-group-item list-group-item-danger";
    li.innerText = "Please correct input error";
    errorMes.appendChild(ul);
    errorMes.firstChild.appendChild(li);

    //console.log(errorMes);
    card.appendChild(errorMes);
    card.insertBefore(errorMes,sub);

}

function clearError(){
    let errorMess = document.querySelectorAll('.list-group-item-danger');
    errorMess.forEach(function(err){
        console.log(err);
        err.remove();
    })
}