import fetchFastRecipes from './fetchFastRecipes';
import createMenuTypeList from "./createMenuTypeList";

//array with cuisines;
const menuTypes = ["main course","side dish","dessert","appetizer","salad","bread","breakfast","soup","beverage","sauce","marinde","fingerfood","snack","drink"];

createMenuTypeList(menuTypes);

// reference save of user input
let inputtimeR = document.getElementById('time-ready');
let inputNumber = document.getElementById("numberMax");
let inputMenuTypeString = '';

// buttonStart for start (new) search
const formSubmit = document.getElementById('on-submit-fast');
const buttonStart = document.getElementById("buttonStart");

// buttonDisplay for nextPage display
const buttonDisp = document.getElementById("button-place");
let buttonTag = document.createElement("button");
buttonTag.setAttribute("id", "buttonNext");
buttonTag.textContent = "+";
buttonDisp.appendChild(buttonTag);

// initialize input search field value in message text.
let inputSearching = "";
// event listner user input
formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    // put input of menutypes marked in string
    handleCheckbox();

    // keep input search field value in message text
    if (inputtimeR.value) {} else {inputtimeR.value = 45};
    inputSearching = `${inputtimeR.value} ${inputNumber.value}
        ${inputMenuTypeString}`;
    console.log(inputSearching);
     if (inputSearching > "") {
        fetchFastRecipes(inputtimeR.value, inputNumber.value, inputMenuTypeString).then();
    }
})



function handleCheckbox() {

    // If the checkbox is checked, display the output text
    let selMenu = 0;
    let selectMenu = [];
    for (let i = 0; i < menuTypes.length; i++) {
        // Get the checkbox
        selMenu = `sel-menu-${i}`;
        selectMenu[i] = document.getElementById(selMenu);
    }

    const selectMenuF = selectMenu.filter((selMenuItem) => {
        return (selMenuItem.checked === true);
    });

    // initialize new search string
    inputMenuTypeString = ","

    // fill searchstring with new input values
    for (let i = 0; i < selectMenuF.length; i++) {
        inputMenuTypeString += selectMenuF[i].value;
        inputMenuTypeString += ",";
    }

}
