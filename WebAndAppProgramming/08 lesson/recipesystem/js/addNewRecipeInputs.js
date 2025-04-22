function addNewRecipeInputs(){
    
    recipeColumn.innerHTML = '<h2>ADD NEW RECIPE</h2>'; //clear the recipe column

    const recipeNameInput = document.createElement('input'); //create a new input element for the recipe name
    recipeNameInput.type = 'text'; //set the type to text
    recipeNameInput.placeholder = 'Type the recipe Name'; //set the placeholder to Recipe Name
    recipeNameInput.id = 'recipeNameInput'; //set the id to recipeName
    recipeNameInput.addEventListener('input', function() {console.log(this.value)}) //add an event listener to the input to update the recipe name in the recipeSystem object

    recipeColumn.appendChild(recipeNameInput); //append the input to the recipe column

    const ingredientDropArea = document.createElement('div'); //create a new div element for the ingredient drop area
    ingredientDropArea.id = 'ingredientDropArea'; //set the id to ingredientDropArea
    recipeColumn.appendChild(ingredientDropArea); //append the div to the recipe column

    const instructionsTextArea = document.createElement('textarea'); //create a new textarea element for the instructions
    instructionsTextArea.placeholder = 'Type the instructions here'; //set the placeholder to Instructions
    instructionsTextArea.id = 'instructionsTextArea'; //set the id to instructionsTextArea
    recipeColumn.appendChild(instructionsTextArea); //append the textarea to the recipe column

    const saveRecipeButton = document.createElement('button'); //create a new button element for saving the recipe
    saveRecipeButton.innerText = 'Save Recipe'; //set the inner text to Save Recipe
    saveRecipeButton.id = 'saveRecipeButton'; //set the id to saveRecipeButton
    saveRecipeButton.addEventListener('click', saveRecipeFromInputs); //add an event listener to the button to save the recipe
    recipeColumn.appendChild(saveRecipeButton); //append the button to the recipe column


    ingredientDropArea.addEventListener('dragover', function(e) { //add an event listener to the div to allow dropping of ingredients
        e.preventDefault(); //prevent the default behavior of the browser. This is necessary to allow dropping of elements
        this.style.backgroundColor = '#f8f6ff'; //change the background color of the div to light blue when dragging over it
    });

    ingredientDropArea.addEventListener("dragleave", function (e) {
      //add an event listener to the div to allow dropping of ingredients
      this.style.backgroundColor = "#fff"; //change the background color of the div to light blue when dragging over it
    });

    ingredientDropArea.addEventListener("drop", function (e) {
      //check first if elements exists and then remove
      document.querySelector("h3.blink")?.remove(); // Remove the heading if it exists

      ingredientDropArea.style.alignItems = "flex-start"; //align the items to the start of the div

      this.style.backgroundColor = "#fff";
      e.preventDefault(); //prevent the default behavior of the browser. This is necessary to allow dropping of elements

      const ingredientHTML = e.dataTransfer.getData("text/html"); //get the html of the dragged element
      const tempDiv = document.createElement("div"); //create a new div element
      tempDiv.innerHTML = ingredientHTML; //set the inner html of the div to the html of the dragged element
      const ingredientElement = tempDiv.querySelector(".ingredient"); //get the ingredient element from the div
      this.appendChild(ingredientElement); //append the ingredient element to the ingredient drop area
      
      const ingredientName = ingredientElement.querySelector('h3')?.innerText || "Unknown Ingredient"; //get the name of the ingredient from the h3 element in order to show it in the modal

      const modal = document.createElement("div"); //create a new div element for the modal
      modal.classList.add("modal"); //add a class to the div for styling
      modal.innerHTML = `
      <h2>Add ingredient</h2>
        <p>Enter the quantity of ${ingredientName}</p>
        <input type="number" id="ingredientQuantityInput" placeholder="Enter the quantity" required>
        <select id="unitSelect">
          <option value="g">g</option>
          <option value="kg">kg</option>
          <option value="ml">ml</option>
          <option value="dl">dl</option>
          <option value="l">l</option>
          <option value="tsp">tsp</option>
          <option value="tbsp">tbsp</option>
          <option value="cup">cup</option>
          <option value="pc">pc</option>
        </select>
        <button id="addIngredientButton">Add</button>

      `;

      modal.querySelector("#addIngredientButton").addEventListener("click", function () {
        const quantity = modal.querySelector("#ingredientQuantityInput").value; //get the value of the input element in the modal
        const unit = modal.querySelector("#unitSelect").value; //get the value of the select element in the modal

        const quantityElement = document.createElement("p"); //create a new p element for the quantity
        quantityElement.innerHTML = ` <span class="quantity">${quantity}</span> <span class="unit">${unit}</span>`; //set the inner html of the p element to the quantity and unit
        ingredientElement.querySelector('.ingredientInfoWrapper').appendChild(quantityElement); //append the p element to the ingredient element
        modal.remove(); //remove the modal
      });

      document.body.appendChild(modal); //append the div to the body
    }); //closes drop

    ingredientDropArea.innerHTML = '<h3 class="blink">Drag and drop ingredients here</h3>'; //set the inner html of the div to a heading



}
