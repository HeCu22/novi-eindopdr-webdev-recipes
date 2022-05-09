function createListLines(recipes) {

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
        messageText.textContent = `Searching for recipes with input specified`;
    }

    // reference save of user input
    const inputAuthor = document.getElementById('author');
   const inputTitle = document.getElementById('title');
    const inputNumber = document.getElementById('numberMax');
    const inputIngredients = document.getElementById('ingredients');
    const inputDiet = document.getElementById('diet');

    let selRec = "selRec-0";
    let i = 0;

    let buttonDetail = document.getElementById("button-place-detail");
    buttonDetail.replaceChildren()
    let recipeButton = document.createElement('button');
    recipeButton.setAttribute('id', 'buttonDetail');
    recipeButton.setAttribute('type', 'submit');
    recipeButton.setAttribute('form', 'recipe-list');
    recipeButton.setAttribute("name",'buttonDetail');
    recipeButton.textContent = "Details";
    buttonDetail.appendChild(recipeButton);


    // one or more recipe lines are possible
    recipes.map((recipe, number) => {

        /* ------------------------------------ */
        //   use create element method to fill the DOM tree
        /* ------------------------------------ */
        i = number;


        let recipeLabel = document.createElement('label');
        selRec = `selRec${i}`;

        recipeLabel.setAttribute("for", selRec);

        // create container element for recipe line in input
        let recipeInput = document.createElement('input');
        recipeInput.setAttribute("id", selRec);
        recipeInput.setAttribute("type", "radio");
        recipeInput.setAttribute("name", "select");
        recipeInput.setAttribute("value", recipe.id);


        /* ------------------------------------ */
        //   use create element method to fill the DOM tree
        /* ------------------------------------ */
        // create container element for recipe line in label
        // Create IMG element


        // create container element for recipe line in div
        let recipeDivLine = document.createElement('div');
        recipeDivLine.setAttribute('class', 'recipe-line');

        // Create IMG element
        let recipeImg = document.createElement('img');
        recipeImg.setAttribute('class', 'img-p');
        recipeImg.setAttribute('src', `${recipe.image}`);
        recipeImg.setAttribute('alt', "recipeImage");


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
            let extra = "Ingredients: ";
            recipe.usedIngredients.map((ingredient) => {
                extra += ingredient.name;
            });
            recipeExtra.textContent = extra;
            recipeExtra.setAttribute('class', 'font-p');
        }

        const recipeId = document.createElement("p");

        recipeId.textContent = recipe.id;
        recipeId.setAttribute('class', 'hidden');

        // put elements in container div
        recipeDivLine.appendChild(recipeImg);
        recipeDivText.appendChild(recipeTitle);
        recipeDivText.appendChild(recipeExtra);
        recipeDivLine.appendChild(recipeDivText);
        recipeLabel.appendChild(recipeInput);

        // put elements in container List
        recipeList.appendChild(recipeLabel)
        recipeList.appendChild(recipeDivLine);
        recipeList.appendChild(recipeId);

        document.getElementById('recipe-list').scrollIntoView();


        i++

    });




}


export default createListLines;