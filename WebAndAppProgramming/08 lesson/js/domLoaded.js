document.addEventListener("DOMContentLoaded", function() {

    const storedRecipeSystem = localStorage.getItem("recipeSystem"); //get the recipe system from local storage

    if (storedRecipeSystem){
        const parsedRecipeSystem = JSON.parse(storedRecipeSystem); //parse the recipe system from local storage
       recipeSystem = parsedRecipeSystem; //set the recipe system to the parsed recipe system
 


 // Reconstruct the recipeSystem object
 recipeSystem = {
    ...parsedRecipeSystem,
    writeAllIngredientsToPage: function () {
        this.ingredients.forEach(
            (ingredient) => ingredient.writeIngredientToPage()
        );
    },
    writeAllRecipesToPage: function () {
        console.log("writeAllRecipesToPage");
        this.recipes.forEach(
            (recipe) => recipe.writeRecipe()
        );
    }
};

// Reconstruct ingredients using the Food constructor
recipeSystem.ingredients = parsedRecipeSystem.ingredients.map((ingredient) => {
    return new Food(
        ingredient.name,
        ingredient.weightSuggestion,
        ingredient.caloriesPer100g,
        ingredient.sugarPer100g,
        ingredient.proteinPer100g,
        ingredient.fatPer100g,
        ingredient.fiberPer100g,
        ingredient.saltPer100g,
        ingredient.vegan,
        ingredient.vegetarian,
        ingredient.glutenFree,
        ingredient.lactoseFree,
        ingredient.carnivore,
        ingredient.customImageName
    );
});

// Reconstruct recipes using the Recipe constructor
recipeSystem.recipes = parsedRecipeSystem.recipes.map((recipe) => {
    const reconstructedIngredients = recipe.ingredients.map((ingredient) => {
        // Find the corresponding Food object by name
        const foodObject = recipeSystem.ingredients.find(
            (food) => food.name === ingredient.ingredient.name
        );

        return {
            ingredient: foodObject, // Use the reconstructed Food object
            quantity: ingredient.quantity,
            unit: ingredient.unit
        };
    });

    return new Recipe(
        recipe.name,
        reconstructedIngredients,
        recipe.instructions
    );
});


console.log(recipeSystem);

}

// Call the methods to write data to the page
recipeSystem.writeAllIngredientsToPage();
recipeSystem.writeAllRecipesToPage();



});

