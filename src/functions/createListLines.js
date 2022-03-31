function createListLines(recipes,) {

    const recipeList = document.getElementById('recipe-list');

    // intialize page message and number of lines on each page
    const messageText = document.getElementById("message-text");
    messageText.textContent = "";
    const numberOfLines = 5;

    // Zorg ervoor dat na elke zoekopdracht en dat er altijd het gewenste zoekresultaat op de pagina staat;
    recipeList.replaceChildren();

    if (recipes.length < numberOfLines) {
        messageText.textContent = `Last data found. Press Start to go to first page.`;
    } else {
        messageText.textContent = ` `;
        `Searching for recipes with input specified`;
    }

    // reference save of user input
    const inputAuthor = document.getElementById('author');
    const inputTags = document.getElementById('tags');
    const inputTitle = document.getElementById('title');
    const inputNumber = document.getElementById('numberMax');
    const inputIngredients = document.getElementById('ingredients');


    // one or more recipe lines are possible
    recipes.map((recipe) => {

        /* ------------------------------------ */
        //   use create element method to fill the DOM tree
        /* ------------------------------------ */

        // create container element for recipe line in div
        let recipeDivLine = document.createElement('div');
        recipeDivLine.setAttribute('class', 'recipe-line');

        // Create IMG element
        let recipeImg = document.createElement('img');
        recipeImg.setAttribute('class', 'img-p');
        recipeImg.setAttribute('src', `${recipe.image}`);

        // create container element for recipe line in div
        let recipeDivText = document.createElement('div');
        recipeDivText.setAttribute('class', 'column');

        // Create het titel-element
        const recipeTitle = document.createElement('p');
        //  fill titel-element
        recipeTitle.textContent = recipe.title;
        recipeTitle.setAttribute('class', 'font-p');

// Create extra-element to show ingredients when searching on ingredients
        const recipeExtra = document.createElement('p');
        if (inputIngredients) {
            //  fill extra elemenent
            let extra = "Ingredients:";
            recipe.usedIngredients.map((ingredient) => {
                extra += ingredient.name;
            });
            recipeExtra.textContent = extra;
            recipeExtra.setAttribute('class', 'font-p');
        } else {
        }
        ;

        const recipeId = document.createElement("p");
        recipeId.textContent = recipe.id;

        // put elements in container div
        recipeDivLine.appendChild(recipeImg);
        recipeDivText.appendChild(recipeTitle);
        recipeDivText.appendChild(recipeExtra);
        recipeDivLine.appendChild(recipeDivText);
        // put elements in container List
        recipeList.appendChild(recipeDivLine);
        recipeList.appendChild(recipeId);



    });


}


export default createListLines;