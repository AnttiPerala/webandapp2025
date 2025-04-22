document.getElementById("addRecipe").addEventListener("click", addNewRecipeInputs); //add an event listener to the button to call the addNewRecipeInputs function when clicked);


document.getElementById("listRecipes").addEventListener("click", function() {

    recipeSystem.writeAllRecipesToPage();

}) //add an event listener to the button to call the viewRecipes function when clicked