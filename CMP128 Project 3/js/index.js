document.getElementById("h1").innerHTML = "JavaScript Calculator";

var input = document.getElementById("input");
var numberButtons = document.querySelectorAll(".numbers div");
var operatorButtons = document.querySelectorAll("#operators div");
var clear = document.getElementById("clear");
var result = document.getElementById("equal");

var previousInput;
var inputString = ""; //""
var computedResult;


//adding event listeners to each of the buttons on the calculator
for(let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", function(){
        inputString = inputString.concat("", this.innerHTML);
        input.value = inputString;

        previousInput = this.innerHTML;
        //console.log(inputString);
    }); //clickTest, storeClickedValue
}

for(let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click", function(){
        if(inputString.length == 0 && this.innerHTML != "-"){
            //don't add operators other than - for negative numbers
            //console.log(this.innerHTML);
        }else{
            inputString = inputString.concat("", this.innerHTML);
            input.value = inputString;
            previousInput = this.innerHTML;
            //console.log(inputString);
        }

        // inputString = inputString.concat("", this.innerHTML);
        // input.value = inputString;
        // console.log(inputString);
        
    }); //clickTest, storeClickedValue
}

clear.addEventListener("click", function(){
    inputString = "";
    input.value = inputString;
}); //clickTest

result.addEventListener("click", function(){
    // Replaces times hex symbol with multiplication symbol
    inputString = inputString.replace(/\u00D7/g, "*");
    //Replaces division hex symbol with divide character
    inputString = inputString.replace(/\u00F7/g, "/");

    //console.log(inputString);
    computedResult = eval(inputString); //<-- I'm working here
    input.value = computedResult;
    //console.log(computedResult);

    // after the equal button is clicked the result stays as the input statement until the 
    // C button is pressed
    inputString = computedResult.toString();
}); //clickTest
