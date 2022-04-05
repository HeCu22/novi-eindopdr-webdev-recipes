import axios from 'axios';
import createListLines from "./createListLines";
import fetchDetails from "./fetchDetails";

// intialize page message and number of lines on each page
const messageText = document.getElementById("message-text");
messageText.textContent = "";

const pagenumberOfLines = 5;
let newPageSet = true;
let selectRecipe = [];

// function to fetch data
async function fetchCuiRecipes(inputAuthor, inputTags, inputTitle, inputNumber, inputCuisine) {

    try {

        //  receive the fetched data in response
        const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
            params: {
                apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                // apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                cuisine: inputCuisine,
                author: inputAuthor,
                tags: inputTags,
                titleMatch: inputTitle,
                number: inputNumber
            },
            headers: {
                "Content-Type": "application/json"
            }
        });

        // save result constant
        const {results: foundRecipes} = response.data;
        const recipesLength = foundRecipes.length;


        // create a list with maximum number of lines that uses array of all found
        let firstLine = 0;
        let lastLine = pagenumberOfLines;
        let arrayDisplay = foundRecipes.slice(firstLine, lastLine);

        // initialize first page
        newPageSet = true;

        createListLines(arrayDisplay);
        // reset the userInput
        inputAuthor.value = '';
        inputTags.value = '';
        inputTitle.value = '';

        // inputNumber.value = 15;

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

                    // initialize first page
                    newPageSet = true;

                    createListLines(arrayDisplay);
                    // reset the userInput
                    inputAuthor.value = '';
                    inputTags.value = '';
                    inputTitle.value = '';
                    // inputNumber.value = 15;


                } else {
                    let firstLine = 0;
                    let lastLine = pagenumberOfLines;
                }

            }
        )

// event listner select display detail
        const formSubmitDetail = document.getElementById('recipe-list');
        const buttonDetail = document.getElementById("buttonDetail");

        formSubmitDetail.addEventListener("submit", (e) => {
                e.preventDefault();
                console.log('submitdetail', e.target)

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


export default fetchCuiRecipes;


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
    console.log('sel', selectRecipeF);
    return selectRecipeF;
}