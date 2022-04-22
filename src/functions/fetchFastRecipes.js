import axios from 'axios';
import createListLines from "./createListLines";
import fetchDetails from "./fetchDetails";

// intialize page message and number of lines on each page
const messageText = document.getElementById("message-text");
messageText.textContent = "";

// set the number of lines on one page as constant
const pagenumberOfLines = 5;

// variables used in handleradio
let newPageSet = true;
let selectRecipe = [];

// function to fetch data and make a get request to spoonacular api
async function fetchFastRecipes(inputtimeR, inputNumber, inputDiet ,inputMealTypeString) {
    try {
        //  receive the fetched data in response
        const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
            params: {
                // apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                type: inputMealTypeString,
                diet: inputDiet,
                maxReadyTime: inputtimeR,
                number: inputNumber
            },
            headers: {
                "Content-Type": "application/json"
            }

        });

        // save result constant
        const foundRecipes = response.data.results;
        const recipesLength = foundRecipes.length;
        console.log('length',recipesLength)

        // create a list with maximum number of lines that uses array of all found
        let firstLine = 0;
        let lastLine = pagenumberOfLines;
        let arrayDisplay = foundRecipes.slice(firstLine, lastLine);

        // initialize first page
        newPageSet = true;

        createListLines(arrayDisplay);
        // reset the userInput
        inputDiet.value = '';

        // listen to button id="buttonNext" to display next page
        const button = document.getElementById("buttonNext");
        button.addEventListener("click", (e) => {
            e.preventDefault();
                // check display next page possible
                if (lastLine < recipesLength) {

                    // add-up the slice cake and crate next page
                    firstLine += pagenumberOfLines;
                    lastLine += pagenumberOfLines;
                    arrayDisplay = foundRecipes.slice(firstLine, lastLine);

                    // initialize first page
                    newPageSet = true;

                    createListLines(arrayDisplay);
                    // reset the userInput
                    inputDiet.value = '';

                } else {
                    let firstLine = 0;
                    let lastLine = pagenumberOfLines;
                    messageText.textContent = `For this input no data found.`;
                }

            }
        )


        // event listner select display detail
        const formSubmitDetail = document.getElementById('recipe-list');
        const buttonDetail = document.getElementById("buttonDetail");

        formSubmitDetail.addEventListener("submit", (e) => {
                e.preventDefault();

                // check which radiobutton filled
                const selRec = handleradio();

                // if radio button checked and data then fetch the details via id found in function handle radio
                if (selRec) {

                    // new page actions are performed in handle radio
                    newPageSet = false;

                    fetchDetails(selRec.value).then();


                    //     initialize selRec.checked after display, to make sure details are only once displayed
                    selRec.checked = false;

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
        if (selRecItem) {
            return (selRecItem.checked === true);
        }

    });

    return selectRecipeF;
}




export default fetchFastRecipes;



