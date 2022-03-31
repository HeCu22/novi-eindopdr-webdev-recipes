import axios from 'axios';
import createListLines from "./createListLines";

// intialize page message and number of lines on each page
const messageText = document.getElementById("message-text");
messageText.textContent = "";

// set the number of lines on one page as constant
const numberOfLines = 5;

async function fetchFastRecipes(inputtimeR, inputNumber, inputMenuTypeString) {

    try {
        const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
            params: {
                // apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                type: inputMenuTypeString,
                maxReadyTime: inputtimeR,
                number: inputNumber
            },
            headers: {
                "Content-Type": "application/json"
            }

        });

        const foundRecipes = response.data.results;
        const recipesLength = foundRecipes.length;


        // create a list with maximum number of lines that uses array of all found
        let firstLine = 0;
        let lastLine = numberOfLines;
        let arrayDisplay = foundRecipes.slice(firstLine, lastLine);

        createListLines(arrayDisplay);
        // reset the userInput


        // listen to button id="buttonNext" to display next page
        const button = document.getElementById("buttonNext");
        button.addEventListener("click", (e) => {

                // check display next page possible
                if (lastLine < recipesLength) {

                    // add-up the slice cake and crate next page
                    firstLine += numberOfLines;
                    lastLine += numberOfLines;
                    arrayDisplay = foundRecipes.slice(firstLine, lastLine);

                    createListLines(arrayDisplay);
                    // reset the userInput

                } else {
                    let firstLine = 0;
                    let lastLine = numberOfLines;
                    messageText.textContent = `For this input no data found.`;
                }

            }
        )

    } catch
        (e) {
        console.error(e);
        // fill message text
        messageText.textContent = `For this input no data found.`;

    }
}

export default fetchFastRecipes;



