function createMenuTypeList(menuTypes) {

    const menuTypeList = document.getElementById('menu-type-list');

    // Zorg ervoor dat na elke zoekopdracht en dat er altijd het gewenste zoekresultaat op de pagina staat;
    menuTypeList.replaceChildren();

    // one or more recipe lines are possible
    // menuTypes.map((menuType) => {

    /* ------------------------------------ */
    //   use create element method to fill the DOM tree
    /* ------------------------------------ */
    let selMenu = "sel-menu-0";
    for (let i = 0; i < menuTypes.length; i++) {


        // create container element for recipe line in div
        let menuTypeLabel = document.createElement('label');
        selMenu = `sel-menu-${i}`;
        menuTypeLabel.setAttribute('for', selMenu);

        // Create input element
        let menuTypeInput = document.createElement('input');
        menuTypeInput.setAttribute('type', 'checkbox');
        menuTypeInput.setAttribute("id", selMenu);
        menuTypeInput.setAttribute("value", `${menuTypes[i]}`);
        menuTypeInput.setAttribute("text", `${menuTypes[i]}`)

        // menuTypeLabel.textContent = `${menuTypes[i]}`;

        // put elements in container input
        menuTypeLabel.appendChild(menuTypeInput);
        menuTypeInput.after(`${menuTypes[i]}`);

        // put elements in container label
        menuTypeList.appendChild(menuTypeLabel);
    }
    console.log(menuTypeList);

}

export default createMenuTypeList;