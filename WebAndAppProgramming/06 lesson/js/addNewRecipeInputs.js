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

      this.style.backgroundColor = "#fff";
      e.preventDefault(); //prevent the default behavior of the browser. This is necessary to allow dropping of elements

      const ingredientHTML = e.dataTransfer.getData("text/html"); //get the html of the dragged element
      const clone = document.createElement("div"); //create a new div element
      clone.innerHTML = ingredientHTML; //set the inner html of the div to the html of the dragged element
      clone.classList.add("ingredient"); //add a class to the div for styling
      this.appendChild(clone); //append the div to the ingredient drop area
      const ingredientName = clone.querySelector('h3').innerText; //get the name of the ingredient from the h3 element in order to show it in the modal

      const modal = document.createElement("div"); //create a new div element for the modal
      modal.classList.add("modal"); //add a class to the div for styling
      modal.innerHTML = `
      <h2>Add ingredient</h2>
        <p>Enter the quantity of ${ingredientName}</p>
        <input type="number" id="ingredientQuantityInput" placeholder="Enter the quantity" required>

        <button>Add</button>



      `;

      document.body.appendChild(modal); //append the div to the body
    }); //closes drop

    ingredientDropArea.innerHTML = '<h3 class="blink">Drag and drop ingredients here</h3>'; //set the inner html of the div to a heading



}
