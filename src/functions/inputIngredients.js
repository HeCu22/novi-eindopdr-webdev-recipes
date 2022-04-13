import fetchRecipeByIngredients from './fetchRecipeByIngredients';

// reference save of user input
let inputIngredients = document.getElementById('ingredients');
let inputNumber = document.getElementById("numberMax");

const formSubmit = document.getElementById('on-submit-ingredients');
const buttonStart = document.getElementById("buttonStart");


// initialize input search field value in message text.
let inputSearching = "";

// event listner user input
formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    // keep input search field value in message text
    inputSearching = `${inputIngredients.value} ${inputNumber.value}`;


    if (inputSearching > "") {

        // buttonDisplay for nextPage display
        const buttonDisp = document.getElementById("button-place-next");
        buttonDisp.replaceChildren();
        let buttonTag = document.createElement("button");
        buttonTag.setAttribute("id", "buttonNext");
        buttonTag.textContent = "+";
        buttonDisp.appendChild(buttonTag);

        fetchRecipeByIngredients(inputIngredients.value, inputNumber.value).then();
    }
})


