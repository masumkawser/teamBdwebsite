
//  inputTaking function for inputfeild



function getInputValue(inputId){
    const inputFeild = document.getElementById(inputId);
    const inputString = inputFeild.value;
    const currentInput = parseFloat(inputString);
    // console.log(currentInput);

    return currentInput;
}

//  inputTaking function for Textelement 

function getTextValue(inputId){
    const textElement = document.getElementById(inputId);
    const textElementString = textElement.innerText;
    const currentElement = parseFloat(textElementString);
    // console.log(currentInput);

    return  currentElement ;
}

//setFunction 

function setElementValue(elementId, value){

const TestValue = document.getElementById(elementId);
TestValue.innerText =value;


}

//Event handler  part----

document.getElementById('Calculate').addEventListener('click',function (){
    


const newPlayer = getInputValue('player');

const perPlayerPrice = newPlayer * 5;

setElementValue('pexpense', perPlayerPrice);


})

//Total Calculate Part 

document.getElementById('Total-Calculate').addEventListener('click', function(){

const TotalplayerPrice = getTextValue('pexpense');

const manager = getInputValue('manager');

const coach = getInputValue('Coach');

const totalPrice = manager + coach + TotalplayerPrice  ;

setElementValue('Total', totalPrice);



})
