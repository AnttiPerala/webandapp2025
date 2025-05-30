    
     //constructor for recipes
     function Recipe(name, ingredients, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;

        recipeSystem.recipes.push(this); //add the recipe to the recipeSystem object

        //lets create a method that will calculate the total calories of the recipe
        this.calculateCalories = function() {
            let totalCalories = 0; //we start the count with zero
            for (let i = 0; i < ingredients.length; i++) { //we loop through the ingredients array
                const grams = convertToGrams(ingredients[i].ingredient, ingredients[i].quantity, ingredients[i].unit); //we convert the quantity of the ingredient to grams using the convertToGrams function
                totalCalories += ingredients[i].ingredient.caloriesPer100g * (grams / 100); //we add the calories of each ingredient to the total calories
            }
            return totalCalories;
        };

        //calculate the carbs
        this.calculateCarbs = function() {
            let totalCarbs = 0;
            for (let i = 0; i < ingredients.length; i++) {
                const grams = convertToGrams(ingredients[i].ingredient, ingredients[i].quantity, ingredients[i].unit);
                totalCarbs += ingredients[i].ingredient.carbsPer100g * (grams / 100);
            }
            return totalCarbs;
        };

        //calculate the sugar
        this.calculateSugars = function() {
            let totalSugar = 0;
            for (let i = 0; i < ingredients.length; i++) {
                const grams = convertToGrams(ingredients[i].ingredient, ingredients[i].quantity, ingredients[i].unit);
                totalSugar += ingredients[i].ingredient.sugarPer100g * (grams / 100);
            }
            return totalSugar;
        };

        //calculate the protein
        this.calculateProtein = function() {
            let totalProtein = 0;
            for (let i = 0; i < ingredients.length; i++) {
                const grams = convertToGrams(ingredients[i].ingredient, ingredients[i].quantity, ingredients[i].unit);
                totalProtein += ingredients[i].ingredient.proteinPer100g * (grams / 100);
            }
            return totalProtein;
        };

        //calculate the fat
        this.calculateFat = function() {
            let totalFat = 0;
            for (let i = 0; i < ingredients.length; i++) {
                const grams = convertToGrams(ingredients[i].ingredient, ingredients[i].quantity, ingredients[i].unit);
                totalFat += ingredients[i].ingredient.fatPer100g * (grams / 100);
            }
            return totalFat;
        };

        //lets create a method that will calculate the estimated weight of the resulting recipe
        this.calculateWeight = function() {
            let totalWeight = 0; //we start the count with zero
            for (let i = 0; i < ingredients.length; i++) {
              //we loop through the ingredients array
              const grams = convertToGrams(
                ingredients[i].ingredient,
                ingredients[i].quantity,
                ingredients[i].unit
              ); //we convert the quantity of the ingredient to grams using the convertToGrams function
              totalWeight += grams; //we add the weight of each ingredient to the total weight
            }
            return totalWeight;
        };
        //lets create a method for checking if its vegan
        this.isVegan = function() {
            for (let i = 0; i < ingredients.length; i++) { //we loop through the ingredients array
                if (!ingredients[i].vegan) { //if any of the ingredients is not vegan, we return false
                    return false;
                }
            }
            return true; //if all ingredients are vegan, we return true
        };

        //lets create a method that will write the recipe to the page
        this.writeRecipe = function() {
          const recipeDiv = document.createElement("div"); //create a new div element
          recipeDiv.classList.add("recipe"); //add a class to the div for styling

          const recipeNameH3 = document.createElement("h3"); //create a new h3 element
          recipeNameH3.classList.add("recipeHeading"); //add a class to the h3 for styling
          recipeNameH3.innerText = this.name; //set the inner text of the h3 to the name of the recipe
          recipeDiv.appendChild(recipeNameH3); //append the h3 to the div

          const recipeInstructionsP = document.createElement("p"); //create a new p element

          const ingredientsList = document.createElement("ul"); //create a new ul element
          for (let i = 0; i < this.ingredients.length; i++) {
            //we loop through the ingredients array
            const ingredientLi = document.createElement("li"); //create a new li element
            ingredientLi.innerText = `${this.ingredients[i].quantity} ${this.ingredients[i].unit} of ${this.ingredients[i].ingredient.name}`; //set the inner text of the li to the quantity, unit and name of the ingredient

            let imageSource = '';
            if (this.ingredients[i].customImageName !== undefined){
              imageSource = this.ingredients[i].ingredient.customImageName;
            } else {
              console.log(this.ingredients[i].ingredient.name + '.png');
              imageSource = this.ingredients[i].ingredient.name + '.png';
            }

            const ingredientImage = document.createElement("img"); //create a new img element

            ingredientImage.src = info.imagesUri + imageSource; //set the src of the img to the name of the ingredient

            ingredientImage.onerror = function () {
              this.src = info.imagesUri + 'missing.png'; // 'this' now correctly refers to the img element
            };

            ingredientLi.prepend(ingredientImage); //prepend the img to the li

            ingredientsList.appendChild(ingredientLi); //append the li to the ul
          }
          recipeDiv.appendChild(ingredientsList); //append the ul to the div

          recipeInstructionsP.innerText = this.instructions; //set the inner text of the p to the instructions of the recipe
          recipeDiv.appendChild(recipeInstructionsP); //append the p to the div'
          

        const recipeCaloriesP = document.createElement("p"); //create a new p element
        recipeCaloriesP.innerText = `Total Calories: ${this.calculateCalories()} kcal`; //set the inner text of the p to the total calories of the recipe
        recipeDiv.appendChild(recipeCaloriesP); //append the p to the div

        //displya recipe sugars
        const recipeSugarsP = document.createElement("p"); //create a new p element
        recipeSugarsP.innerText = `Total Sugars: ${this.calculateSugars()} g`; //set the inner text of the p to the total carbs of the recipe
        recipeDiv.appendChild(recipeSugarsP); //append the p to the div

        //displya recipe protein
        const recipeProteinP = document.createElement("p"); //create a new p element
        recipeProteinP.innerText = `Total Protein: ${this.calculateProtein()} g`; //set the inner text of the p to the total protein of the recipe
        recipeDiv.appendChild(recipeProteinP); //append the p to the div

        //displya recipe fat
        const recipeFatP = document.createElement("p"); //create a new p element
        recipeFatP.innerText = `Total Fat: ${this.calculateFat()} g`; //set the inner text of the p to the total fat of the recipe
        recipeDiv.appendChild(recipeFatP); //append the p to the div

        //displya recipe weight
        const recipeWeightP = document.createElement("p"); //create a new p element
        recipeWeightP.innerText = `Estimated Weight: ${this.calculateWeight()} g`; //set the inner text of the p to the estimated weight of the recipe
        recipeDiv.appendChild(recipeWeightP); //append the p to the div
        
        
        //check if recipesContainer exists
        if (!recipeColumn.querySelector("#recipesContainer")) {
          console.log("recipesContainer not found. Make sure the element exists in the HTML.");
          recipeColumn.innerHTML = "<h2>RECIPES</h2>"; //clear the recipe column
          recipesContainer = document.createElement("div");
          recipesContainer.id = "recipesContainer";

          recipeColumn.appendChild(recipesContainer); //append the div to the recipe column
        }

        recipesContainer.appendChild(recipeDiv); //append the div to the recipes container
        };

    }

    //lets create a recipe object using the constructor function
    const spanishOmelette = new Recipe(
        'Spanish Omelette', 
        [
            {ingredient: egg, quantity: 4, unit: 'pc'}, 
            {ingredient: potato, quantity: 2, unit: 'pc'},
            {ingredient: butter, quantity: 1, unit: 'tbsp'}, 
            
        ], 
        '1. Peel and chop the potatoes. 2. Fry the potatoes in a pan with butter until golden brown. 3. Beat the eggs in a bowl and add the fried potatoes. 4. Pour the mixture back into the pan and cook until set. 5. Flip the omelette and cook the other side until golden brown.'
      );

    const tomatoPotatoSalad = new Recipe(
      "Tomato Potato Salad",
      [
        { ingredient: tomato, quantity: 2, unit: "pc" },
        { ingredient: potato, quantity: 2, unit: "pc" }
      ],
      "1. Boil the potatoes until tender. 2. Chop the tomatoes. 3. Mix the potatoes, tomatoes in a bowl. 4. Add salt and pepper to taste."
    );

        //now ask for the spanishOmelette.writeRecipe() method in the console