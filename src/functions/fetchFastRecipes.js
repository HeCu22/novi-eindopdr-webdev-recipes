import axios from 'axios';
import createListLines from "./createListLines";

// intialize page message and number of lines on each page
const messageText = document.getElementById("message-text");
messageText.textContent = "";
const numberOfLines = 5;

async function fetchFastRecipes(inputtimeR, inputNumber, inputMenuTypeString) {
    console.log('input', inputtimeR);
    if (inputNumber === 0) {inputNumber = 10 };
    if (inputtimeR === 0) {inputtimeR = 45};
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
        console.log(foundRecipes);

        // create a list with maximum number of lines that uses array of all found
        let firstLine = 0;
        let lastLine = numberOfLines;
        let arrayDisplay = foundRecipes.slice(firstLine, lastLine);
        console.log('array', recipesLength, foundRecipes);
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

                    console.log('fetchMenuR', arrayDisplay);
                    createListLines(arrayDisplay);
                    // reset the userInput

                } else {
                    console.log('stop');
                    let firstLine = 0;
                    let lastLine = numberOfLines;
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



