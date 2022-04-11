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

        // create container element for recipe line in article
        let recArt = document.createElement('article');
        recArt.setAttribute('id', 'rec-art');
        recArt.setAttribute('class', 'column');

        // create h4 element with span for title
        let recTitle = document.createElement('h4');
        recTitle.setAttribute("class", "row")
        recTitle.textContent = "Description:";
        let recSpan = document.createElement('span');
        recSpan.setAttribute('class', 'rec-description');
        recSpan.textContent = detailsRecipe.data.title;
        recTitle.appendChild(recSpan);
        recArt.appendChild(recTitle);

//                 Create IMG element
        let recImg = document.createElement('img');
        recImg.setAttribute('id', 'rec-img');

        tempImg = `https://spoonacular.com/recipeImages/` + inputId + `-556x370.jpg`;
        recImg.setAttribute('src', `${tempImg}`);
        recImg.setAttribute('alt', `recipeImage`);

        // put elements in container article
        recArt.appendChild(recImg);
        // put elements in container div
        recDiv.appendChild(recArt);


        // create container element for recipe line in article
        recArt = document.createElement('article');
        recArt.setAttribute('id', 'rec-art');
        recArt.setAttribute('class', 'column');

// create div element for cooking-time and servings

        // create h4 element with span for cooking-time
        let recTime = document.createElement('h4');
        recTime.setAttribute("class", "row")
        recTime.textContent = "Cooking time:";

        let recSpan1 = document.createElement('span');
        recSpan1.setAttribute('class', 'rec-description');
        recSpan1.textContent = detailsRecipe.data.readyInMinutes;
        // put elements in container article
        recTime.appendChild(recSpan1);
        recArt.appendChild(recTime);

        // create h4 element with span for servings
        let recServ = document.createElement('h4');
        recServ.setAttribute("class", "row")
        recServ.textContent = "Servings:";

        let recSpan2 = document.createElement('span');
        recSpan2.setAttribute('class', 'rec-description');
        recSpan2.textContent = detailsRecipe.data.servings;

        // put elements in container article
        recServ.appendChild(recSpan2);
        recArt.appendChild(recServ);

        // create h4 element with span for Author
        let recAuth = document.createElement('h4');
        recAuth.setAttribute("class", "row")
        recAuth.textContent = "Author:";

        let recAut1 = document.createElement('span');
        recAut1.setAttribute('class', 'rec-description');
        recAut1.textContent = detailsRecipe.data.author;
        // put elements in container article
        recAuth.appendChild(recAut1);
        recArt.appendChild(recAuth);


        // create element with span for ingredients
        let recIngr = document.createElement('h4');
        recIngr.textContent = "Ingredients:";
        let recIngrUl = document.createElement('ul');

        let ingrediT = "";
        for (let i = 0; i < detailsRecipe.data.extendedIngredients.length; i++) {
            let recIngrLi = document.createElement('li');
            recIngrLi.setAttribute('class', 'rec-text');
            ingrediT = detailsRecipe.data.extendedIngredients[i].original;
            recIngrLi.textContent = ingrediT;
            // put elements in container ul
            recIngrUl.appendChild(recIngrLi);
        }
        // put elements in container article
        recArt.appendChild(recIngr)
        // put elements in container div
        recDiv.appendChild(recArt);

        recArt.appendChild(recIngrUl);
        // put elements in container div
        recDiv.appendChild(recArt);


// create container element for detail recipe item line in article
        recArt = document.createElement('article');
        recArt.setAttribute('id', 'rec-art');
        recArt.setAttribute('class', 'column');

        // create p element with span for instructions
        let recInstr = document.createElement('h4');
        recInstr.textContent = "Instructions:";
        let recSpan3 = document.createElement('span');
        recSpan3.setAttribute('class', 'rec-text');
        recSpan3.innerHTML = detailsRecipe.data.instructions;

        // put elements in container p
        recInstr.appendChild(recSpan3);

        // put elements in container article
        recArt.appendChild(recInstr);
        recDiv.appendChild(recArt);

        // create container element for detail recipe item article
        recArt = document.createElement('article');
        recArt.setAttribute('id', 'rec-art');
        recArt.setAttribute('class', 'column');

        // create h4 element with span for summary
        let recSumm = document.createElement('h4');
        recSumm.textContent = "Summary:";
        let recSum1 = document.createElement('span');
        recSum1.setAttribute('class', 'rec-text');
        recSum1.innerHTML = detailsRecipe.data.summary;
        // put elements in container article
        recSumm.appendChild(recSum1);

        // put elements in container article
        recArt.appendChild(recSumm);
        recDiv.appendChild(recArt);


        detailList.appendChild(recDiv)

        document.getElementById('rec-item').scrollIntoView();


    } catch (e) {
        console.error(e);
    }
}

export default fetchDetails;





