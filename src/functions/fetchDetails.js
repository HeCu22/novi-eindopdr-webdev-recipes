import axios from 'axios';

const listItems = [];

let inputId = "639606";
let tempImg = "";

async function fetchDetails($inputId) {
    // let idRecipex = Number(inputId);
    console.log(inputId)
    // inputId = 639606;

    try {
        const detailsRecipe = await axios.get(`https://api.spoonacular.com/recipes/${inputId}/information?includeNutrition=false`, {
            params: {
                // apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                id: inputId

            },
            headers: {
                "Content-Type": "application/json"
            }
        });

        // make array from object detailsRecipe to pass it to createListLines

        console.log('listItems', detailsRecipe.data);

        const getDescription = document.getElementById("rec-description");
        const getImg = document.getElementById("rec-img");
        const getTime = document.getElementById('rec-time');
        const getInstr = document.getElementById('rec-instr')
        const getServ = document.getElementById('rec-serv');
        const getIngr = document.getElementById('rec-ingr');

// create container element for recipe line in div
        let recDiv = document.createElement('div');
        recDiv.setAttribute('class', 'rec-item');

//                 Create IMG element
        let recImg = document.createElement('img');
        recImg.setAttribute('class', 'img-det');
        console.log('append', inputId);
        tempImg = `https://spoonacular.com/recipeImages/`+inputId+`-556x370.jpg`;
        console.log('temp', tempImg);
        recImg.setAttribute('src', `${tempImg}`);
        // put elements in container div
        recDiv.appendChild(recImg);

        // put elements in container List
        getImg.appendChild(recDiv);


        getInstr.innerHTML = detailsRecipe.data.instructions;
        getTime.textContent = detailsRecipe.data.readyInMinutes;
        getServ.textContent = detailsRecipe.data.servings;
        getDescription.textContent = detailsRecipe.data.title;

        let instrucT = detailsRecipe.data.extendedIngredients[0].aisle;
        for (let i = 1; i < detailsRecipe.data.extendedIngredients.length; i++) {
            instrucT += ', ' + detailsRecipe.data.extendedIngredients[i].aisle;
        }
        getIngr.textContent = instrucT;

        selRecipe0.value = "";
        selRecipe1.value = "";
        selRecipe2.value = "";
        selRecipe3.value = "";

    } catch (e) {
        console.error(e);
    }
}




export default fetchDetails();