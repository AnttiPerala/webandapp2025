document.getElementById("addRecipe").addEventListener("click", addNewRecipeInputs); //add an event listener to the button to call the addNewRecipeInputs function when clicked);


document.getElementById("listRecipes").addEventListener("click", function() {

    recipeSystem.writeAllRecipesToPage();

}) //add an event listener to the button to call the viewRecipes function when clicked

document.getElementById("ingredientFilter").addEventListener("input", function() {

  const filterValue = this.value.toLowerCase();

  ingredientsContainer.innerHTML = ""; // Clear the ingredients container before filtering

  recipeSystem.ingredients.filter((ing) => ing.name.toLowerCase().includes(filterValue)).forEach((ing) => ing.writeIngredientToPage());


}) //add an event listener to the button to call the viewIngredients function when clicked
