import axios from 'axios';
import createListLines from "./createListLines";
import fetchDetails from "./fetchDetails";


// intialize page message and number of lines on each page
const messageText = document.getElementById("message-text");
messageText.textContent = "";

// set the page number of lines on one page as constant
const pagenumberOfLines = 5;
let newPageSet = true;
let selectRecipe = [];

async function fetchRecipeByIngredients(inputIngredients, inputNumber) {

    try {

        const response = await axios.get("https://api.spoonacular.com/recipes/findByIngredients", {
            params: {
                // apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                ingredients: inputIngredients,
                number: inputNumber,
                ranking: 2,                                     /*---- maximize to be used ingredients -----*/
                ignorePantry: true

            },
            headers: {
                "Content-Type": "application/json"
            }

        });

        const foundRecipes = response.data;
        const recipesLength = foundRecipes.length;

        // create a list with maximum number of lines per page that uses array of all found
        let firstLine = 0;
        let lastLine = pagenumberOfLines;
        let arrayDisplay = foundRecipes.slice(firstLine, lastLine);

        newPageSet = true;


        createListLines(arrayDisplay);
        // reset the userInput
        inputIngredients.value = "";


        // listen to button id="buttonNext" to display next page
        const buttonNext = document.getElementById("buttonNext");

        buttonNext.addEventListener("click", (e) => {
            e.preventDefault();

                // check display next page possible
                if (lastLine < recipesLength) {

                    // add-up the slice cake and crate next page
                    firstLine += pagenumberOfLines;
                    lastLine += pagenumberOfLines;
                    arrayDisplay = foundRecipes.slice(firstLine, lastLine);
                    newPageSet = true;


                    createListLines(arrayDisplay);
                    // reset the userInput
                    inputIngredients.value = "";

                } else {
                    let firstLine = 0;
                    let lastLine = pagenumberOfLines;
                    messageText.textContent = `Last data found. Press Start to go to first page or enter a new comma-separated list of ingredients..`;
                }

            }
        )





// event listner select display detail
        const formSubmitDetail = document.getElementById('recipe-list');
        const buttonDetail = document.getElementById("buttonDetail");
        console.log('buttonDetail',buttonDetail);

        formSubmitDetail.addEventListener("submit", (e) => {

                e.preventDefault();
                console.log('e',e.target.value);

                const selRec = handleradio();
                newPageSet = false;
                if (selRec.checked) {
                    console.log(selRec.value);
                    fetchDetails(selRec.value).then();
                    selRec.checked = false;
                    return;
                }

            }
        )




    } catch
        (e) {
        console.error(e);
        // fill message text
        messageText.textContent = `For this input no data found. Enter a comma-separated list of ingredients.`;
    }
}

export default fetchRecipeByIngredients;


// If the checkbox is checked, display the output text

function handleradio() {


    if (newPageSet) {

        let selRec = 0;
        selectRecipe = [];
        for (let i = 0; i < pagenumberOfLines; i++) {
            // Get the checkbox
            selRec = `selRec${i}`;
            selectRecipe[i] = document.getElementById(selRec);
        }
    }
    const selectRecipeF = selectRecipe.find((selRecItem) => {
        console.log(selRecItem);
        return (selRecItem.checked === true);

    });
    console.log(selectRecipeF)
    return selectRecipeF;
}