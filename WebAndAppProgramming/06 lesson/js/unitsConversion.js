const conversionFactors = {
    g: 1,
    kg: 1000,
    ml: 1,
    dl: 100,
    l: 1000,
    tsp: 5,
    tbsp: 15,
    cup: 240,
}

function convertToGrams(ingredient, quantity, unit){

    if (['pc', 'piece', 'pcs', 'pieces'].includes(unit)) {
        return ingredient.weightSuggestion * quantity;
    }

    //if the unit is not a piece, we will convert it to grams using the conversion factors
    if (conversionFactors[unit]) { //if the unit is in the conversion factors object, we will convert it to grams
        return quantity * conversionFactors[unit]; //multiply the quantity by the conversion factor to get the grams
    } else {
        console.error(`Unit ${unit} is not supported for conversion.`); //if the unit is not in the conversion factors object, we will log an error message to the console
        return null;
    }


}