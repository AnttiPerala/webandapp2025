 //this is where constructor functions come in handy, we can create a function that will create objects for us

 function Food(name, weightSuggestion, caloriesPer100g, sugarPer100g, proteinPer100g, fatPer100g, fiberPer100g, saltPer100g, vegan, vegetarian, glutenFree, lactoseFree, carnivore, customImageName) {
    this.name = name;
    this.weightSuggestion = weightSuggestion;
    this.caloriesPer100g = caloriesPer100g;
    this.sugarPer100g = sugarPer100g;
    this.proteinPer100g = proteinPer100g;
    this.fatPer100g = fatPer100g;
    this.fiberPer100g = fiberPer100g;
    this.saltPer100g = saltPer100g;
    this.vegan = vegan;
    this.vegetarian = vegetarian;
    this.glutenFree = glutenFree;
    this.lactoseFree = lactoseFree;
    this.carnivore = carnivore;
    this.customImageName = customImageName;

    recipeSystem.ingredients.push(this); //add the food to the recipeSystem object

    this.writeIngredientToPage = function() {
        const ingredientDiv = document.createElement('div'); //create a new div element
        ingredientDiv.classList.add('ingredient'); //add a class to the div for styling


        const img = document.createElement('img'); //create a new img element
        //if the customImageName is set, use that as the src, otherwise use the default image name
        if (this.customImageName) {
            img.src = "img/" + this.customImageName; //set the src of the img to the custom image name
        } else {
            img.src = "img/" + this.name.toLowerCase() + '.png'; //set the src of the img to the file name
        }

        img.alt = "An image of a " + this.name; //set the alt text of the img to the name of the food  
        img.draggable = false; 
        ingredientDiv.appendChild(img); //append the img to the div
        const ingredientNameH3 = document.createElement('h3'); //create a new h3 element
        ingredientNameH3.innerText = this.name;
        ingredientDiv.draggable = true; //set the draggable attribute to true
        ingredientDiv.addEventListener("dragstart", function (e) {
          e.dataTransfer.setData("text/html", this.outerHTML); // Set the HTML of the dragged element. outerHTML is used to get the entire element including its children
        });
        ingredientDiv.appendChild(ingredientNameH3); //append the h3 to the div
        ingredientsContainer.appendChild(ingredientDiv); //append the div to the ingredients container

    }
 }

 const tomato = new Food('tomato', 150, 18, 3.9, 0.9, 0.2, 1.0, 0.1, true, true, true, true, false);
 const potato = new Food('potato', 200, 77, 0.8, 2.0, 0.1, 2.2, 0.01, true, true, true, true, false);
 const bacon = new Food('bacon', 100, 541, 0.1, 37.0, 42.0, 0.0, 2.0, false, false, true, true, true);
 const chicken = new Food('chicken', 100, 239, 0.0, 27.0, 14.0, 0.0, 0.1, false, false, true, true, true);
 const egg = new Food('egg', 50, 155, 0.7, 13.0, 11.0, 0.0, 1.0, false, false, true, true, true);
 const butter = new Food('butter', 10, 717, 0.1, 1.0, 81.0, 0.0, 1.0, false, false, true, true, true);
 const ham = new Food('ham', 100, 145, 0.1, 20.0, 5.0, 0.0, 1.0, false, false, true, true, true);
 const cornFlour = new Food('corn flour', 100, 365, 0.5, 6.0, 1.0, 7.0, 0.01, true, true, true, true, false, 'cornFlour.png');
