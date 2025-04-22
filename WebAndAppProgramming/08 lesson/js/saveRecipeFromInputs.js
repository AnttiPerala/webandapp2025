function saveRecipeFromInputs(){
    
    const recipeName = document.querySelector('#recipeNameInput').value; //clear the recipe name input field

    const instructions = document.querySelector('#instructionsTextArea').value; //clear the instructions input field

    const ingredients = document.querySelectorAll('#ingredientDropArea .ingredient'); //get all the ingredients in the ingredient drop area

    const recipeIngredients = []; //create an array to hold the recipe ingredients

    for (const individualIngredient of ingredients){

        const ingredientName = individualIngredient.querySelector('h3').innerText; //get the name of the ingredient from the h3 element

        

        const ingredientQuantity = individualIngredient.querySelector('.quantity').innerText; //get the quantity of the ingredient from the input element

        const ingredientUnit = individualIngredient.querySelector('.unit').innerText; //get the unit of the ingredient from the input element
    
        console.log(ingredientName + ingredientQuantity + ingredientUnit); //log the name of the ingredient to the console

        const foodObject = recipeSystem.ingredients.find(food => food.name === ingredientName); //find the food object in the recipeSystem object that matches the name of the ingredient
    
        recipeIngredients.push({ ingredient: foodObject, quantity: ingredientQuantity, unit: ingredientUnit });
    
    }

    const recipe = new Recipe(recipeName, recipeIngredients, instructions); //create a new recipe object with the name, ingredients and instructions

    recipe.writeRecipe(); //call the writeRecipe method to display the recipe on the page

    localStorage.setItem('recipeSystem', JSON.stringify(recipeSystem)); //save the recipes to local storage

}