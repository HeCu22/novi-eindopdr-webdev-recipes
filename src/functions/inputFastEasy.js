import fetchFastRecipes from './fetchFastRecipes';
import createMealTypeList from "./createMealTypeList";

//array with cuisines;
const mealTypes = ["main course","side dish","dessert","appetizer","salad","bread","breakfast","soup","beverage","sauce","marinde","fingerfood","snack","drink","lunch","brunch"];

createMealTypeList(mealTypes);

// reference save of user input
let inputtimeR = document.getElementById('time-ready');
let inputNumber = document.getElementById("numberMax");
let inputMealTypeString = '';

// buttonStart for start (new) search
const formSubmit = document.getElementById('on-submit-fast');
const buttonStart = document.getElementById("buttonStart");


// initialize input search field value in message text.
let inputSearching = "";
// event listner user input
formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    // put input of mealtypes marked in string
    handleCheckbox();

    // keep input search field value in message text
    if (inputtimeR.value) {} else {inputtimeR.value = 45};
    inputSearching = `${inputtimeR.value} ${inputNumber.value}
        ${inputMealTypeString}`;
    console.log(inputSearching);

     if (inputSearching > "") {

         // buttonDisplay for nextPage display
         let buttonDisp = document.getElementById("button-place");
         buttonDisp.replaceChildren();
         let buttonTag = document.createElement("button");
         buttonTag.setAttribute("id", "buttonNext");
         buttonTag.textContent = "+";
         buttonDisp.appendChild(buttonTag);

        fetchFastRecipes(inputtimeR.value, inputNumber.value, inputMealTypeString).then();
    }
})



function handleCheckbox() {

    // If the checkbox is checked, display the output text
    let selMeal = 0;
    let selectMeal = [];
    for (let i = 0; i < mealTypes.length; i++) {
        // Get the checkbox
        selMeal = `sel-meal-${i}`;
        selectMeal[i] = document.getElementById(selMeal);
    }

    const selectMealF = selectMeal.filter((selMealItem) => {
        return (selMealItem.checked === true);
    });

    // initialize new search string
    inputMealTypeString = ","

    // fill searchstring with new input values
    for (let i = 0; i < selectMealF.length; i++) {
        inputMealTypeString += selectMealF[i].value;
        inputMealTypeString += ",";
    }

}
