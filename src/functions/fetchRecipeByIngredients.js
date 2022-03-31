import axios from 'axios';
import createListLines from "./createListLines";


// intialize page message and number of lines on each page
const messageText = document.getElementById("message-text");
messageText.textContent = "";

// set the page number of lines on one page as constant
const pagenumberOfLines = 5;


async function fetchRecipeByIngredients(inputIngredients, inputNumber) {
   if (inputNumber === 0) {
        inputNumber = 10
    }
    if (inputIngredients === 0) {
        inputIngredients = "salad"
    }

    try {

        const response = await axios.get("https://api.spoonacular.com/recipes/findByIngredients", {
            params: {
                apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                // apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
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

        createListLines(arrayDisplay);
        // reset the userInput
        inputIngredients.value = "";

        // listen to button id="buttonNext" to display next page
        const button = document.getElementById("buttonNext");
        button.addEventListener("click", (e) => {

                // check display next page possible
                if (lastLine < recipesLength) {

                    // add-up the slice cake and crate next page
                    firstLine += pagenumberOfLines;
                    lastLine += pagenumberOfLines;
                    arrayDisplay = foundRecipes.slice(firstLine, lastLine);

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

    } catch
        (e) {
        console.error(e);
        // fill message text
        messageText.textContent = `For this input no data found. Enter a comma-separated list of ingredients.`;
    }
}

export default fetchRecipeByIngredients;