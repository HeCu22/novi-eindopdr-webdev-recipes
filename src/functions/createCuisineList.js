function createCuisineList(cuisines) {

    const cuisineList = document.getElementById('cuisine-list');

    // Zorg ervoor dat na elke zoekopdracht en dat er altijd het gewenste zoekresultaat op de pagina staat;
    cuisineList.replaceChildren();

    // one or more recipe lines are possible
    // cuisines.map((cuisine) => {

        /* ------------------------------------ */
        //   use create element method to fill the DOM tree
        /* ------------------------------------ */
        let selCui = "sel-cui-0";
        for (let i = 0; i < cuisines.length; i++) {


            // create container element for recipe line in div
            let cuisineLabel = document.createElement('label');
            selCui = `sel-cui-${i}`;
            cuisineLabel.setAttribute('for', selCui);

            // Create input element
            let cuisineInput = document.createElement('input');
            cuisineInput.setAttribute('type', 'checkbox');
            cuisineInput.setAttribute("id", selCui);
            cuisineInput.setAttribute("value", `${cuisines[i]}`);
            cuisineInput.setAttribute("text", `${cuisines[i]}`)

            // cuisineLabel.textContent = `${cuisines[i]}`;

            // put elements in container input
            cuisineLabel.appendChild(cuisineInput);
            cuisineInput.after(`${cuisines[i]}`);

            // put elements in container label
            cuisineList.appendChild(cuisineLabel);
        }
        console.log(cuisineList);
        // userInputfield.value = "";

}

export default createCuisineList;