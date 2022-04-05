import axios from 'axios';

// initialize help variable to determine the img src string
let tempImg = "";

async function fetchDetails(inputId) {

    try {
        const detailsRecipe = await axios.get(`https://api.spoonacular.com/recipes/${inputId}/information?includeNutrition=false`, {
            params: {
                apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                // apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                id: inputId

            },
            headers: {
                "Content-Type": "application/json"
            }
        });

  // get detail information from data
       const detailList = document.getElementById("detail-list")


// create container element for recipe line in div
        let recDiv = document.createElement('div');
        recDiv.setAttribute('id', 'rec-item');
        recDiv.setAttribute('class', 'row');

        // create p element with span for img
        let recP = document.createElement('p');
        let recSpan = document.createElement('span');
        recP.textContent = "Description:";
        recSpan.setAttribute('id', 'rec-description');
        recSpan.textContent = detailsRecipe.data.description;

//                 Create IMG element
        let recImg = document.createElement('img');
        recImg.setAttribute('id', 'rec-img');
        recImg.setAttribute('class', 'img-det');

        tempImg = `https://spoonacular.com/recipeImages/` + inputId + `-556x370.jpg`;
        recImg.setAttribute('src', `${tempImg}`);

        // put elements in container p
        recP.appendChild(recSpan);
        recP.appendChild(recImg);
        recDiv.appendChild(recP);


        // create p element with span for cooking-time
        let recP2 = document.createElement('p');
        recP2.textContent = "Cooking time:";
        let recSpan2 = document.createElement('span');
        recSpan2.setAttribute('id', 'rec-time');
        recSpan2.textContent = detailsRecipe.data.readyInMinutes;
        // recSpan2.textContent = detailsRecipe.data.servings;
        // put elements in container p
        recP2.appendChild(recSpan2);
        recDiv.appendChild(recP2);

        // create p element with span for instructions
        let recP3 = document.createElement('p');
        recP3.textContent = "Instructions:";
        let recSpan3 = document.createElement('span');
        recSpan3.innerHTML = detailsRecipe.data.instructions;

// put elements in container p
        recP3.appendChild(recSpan3);
        recDiv.appendChild(recP3);



        // create p element with span for ingredients
        let recP4 = document.createElement('p');
        recP4.textContent = "Instructions:";
        let recSpan4 = document.createElement('span');
        let instrucT = detailsRecipe.data.extendedIngredients[0].aisle;
        for (let i = 1; i < detailsRecipe.data.extendedIngredients.length; i++) {
            instrucT += ', ' + detailsRecipe.data.extendedIngredients[i].aisle;
        }
        recSpan4.textContent = instrucT;
        // put elements in container p
        recP4.appendChild(recSpan4);
        recDiv.appendChild(recP4);

        detailList.appendChild(recDiv)

        document.getElementById('rec-item').scrollIntoView();




    } catch (e) {
        console.error(e);
    }
}

export default fetchDetails;





