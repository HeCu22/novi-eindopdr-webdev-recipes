function createMealTypeList(mealTypes) {

    const mealTypeList = document.getElementById('meal-type-list');

    // Zorg ervoor dat na elke zoekopdracht en dat er altijd het gewenste zoekresultaat op de pagina staat;
    mealTypeList.replaceChildren();

    // one or more recipe lines are possible
    // mealTypes.map((mealType) => {

    /* ------------------------------------ */
    //   use create element method to fill the DOM tree
    /* ------------------------------------ */
    let selMeal = "sel-meal-0";
    for (let i = 0; i < mealTypes.length; i++) {


        // create container element for recipe line in div
        let mealTypeLabel = document.createElement('label');
        selMeal = `sel-meal-${i}`;
        mealTypeLabel.setAttribute('for', selMeal);

        // Create input element
        let mealTypeInput = document.createElement('input');
        mealTypeInput.setAttribute('type', 'checkbox');
        mealTypeInput.setAttribute("id", selMeal);
        mealTypeInput.setAttribute("value", `${mealTypes[i]}`);
        mealTypeInput.setAttribute("text", `${mealTypes[i]}`);


        // mealTypeLabel.textContent = `${mealTypes[i]}`;

        // put elements in container input
        mealTypeLabel.appendChild(mealTypeInput);
        mealTypeInput.after(`${mealTypes[i]}`);

        // put elements in container label
        mealTypeList.appendChild(mealTypeLabel);
    }
    console.log(mealTypeList);

}

export default createMealTypeList;