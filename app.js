//Conversions
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

//Function Dollar to Yen
const fromDollarToYen = (number) => {
    return number * oneEuroIs.JPY;
}


const fromYentoPound = (number) => {
    return number * oneEuroIs.GBP;
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar ,fromDollarToYen, fromYentoPound }