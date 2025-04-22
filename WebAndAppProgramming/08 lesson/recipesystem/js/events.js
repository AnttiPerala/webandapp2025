document.getElementById("addRecipe").addEventListener("click", addNewRecipeInputs); //add an event listener to the button to call the addNewRecipeInputs function when clicked);


document.getElementById("listRecipes").addEventListener("click", function() {

    recipeSystem.writeAllRecipesToPage();

}) //add an event listener to the button to call the viewRecipes function when clicked

document.getElementById("ingredientFilter").addEventListener("input", function() {

  const filterValue = this.value.toLowerCase();

  ingredientsContainer.innerHTML = ""; // Clear the ingredients container before filtering

  recipeSystem.ingredients.filter((ing) => ing.name.toLowerCase().includes(filterValue)).forEach((ing) => ing.writeIngredientToPage());


}) //add an event listener to the button to call the viewIngredients function when clicked


document.getElementById("filterIngredients").addEventListener("click", function(){
    const searchValue = document.getElementById("ingredientFilter").value;

    getFoodFromDB(searchValue).then((result) => {
      console.log(result);

      //loop through the result array
      result.forEach((food) => {
        //create a new food object
        const newFood = new Food(food.name, 100, food.energy_calculated_kJ/4.184, food.sugars_total_g, food.protein_total_g, food.fat_total_g, food.
          fibre_total_g, food.salt_mg * 1000, false, false, false, false, false);
        //write the ingredient to the page
        newFood.writeIngredientToPage();
      })
    })
})


