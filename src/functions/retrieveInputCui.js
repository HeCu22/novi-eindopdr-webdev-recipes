import fetchCuiRecipes from './fetchCuiRecipes';
import createCuisineList from "./createCuisineList";


//array with cuisines;
const cuisineList = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean",
    "Latin American", "Mediterranean", "Mexican", `Middle Eastern`, "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];

createCuisineList(cuisineList);

// reference save of user input
let inputAuthor = document.getElementById('author');
let inputTags = document.getElementById('tags');
let inputTitle = document.getElementById('title');
let inputNumber = document.getElementById("numberMax");
let inputCuiString = '';


const formSubmit = document.getElementById('on-submit-cuisine');
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
    console.log('submit', e.target);

    // put input of cuisines marked in string
     handleCheckbox();

    // keep input search field value in message text
    inputSearching = `${inputAuthor.value} ${inputTags.value}  ${inputTitle.value} ${inputNumber.value}
        ${inputCuiString}`;

    if (inputSearching > "") {
        // if (inputNumber = 0) {inputNumber = 5 };
        console.log('string', inputSearching);
        fetchCuiRecipes(inputAuthor.value, inputTags.value, inputTitle.value, inputNumber.value, inputCuiString).then();

    }
})


function handleCheckbox() {


    // If the checkbox is checked, display the output text


    let selCui = 0;
    let selectCui = [];
    for (let i = 0; i < cuisineList.length; i++) {
        // Get the checkbox
        selCui = `sel-cui-${i}`;
        selectCui[i] = document.getElementById(selCui);
    }

    const selectCuiF = selectCui.filter((selcuiItem) => {
        return (selcuiItem.checked === true);
    });
    inputCuiString = ","
    for (let i = 0; i < selectCuiF.length; i++) {
        inputCuiString += selectCuiF[i].value;
        inputCuiString += ",";
    }
    console.log('inputcuistring', inputCuiString)

}
