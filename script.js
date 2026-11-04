// ===================================
// Part 1: Date Display
// ===================================

// Create current date object
const today = new Date();

// Get month, day, year
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

// Add leading zeros
month = String(month).padStart(2, "0");
day = String(day).padStart(2, "0");

// Final formatted date
const formattedDate = `Today is ${month}/${day}/${year}`;

// Display on page
document.getElementById("dateOutput").innerHTML = formattedDate;

// ===================================
// Part 2: Number Conversion Tests
// ===================================

// Original values
const valueOne = "72";
const valueTwo = "19.91";
const valueThree = "opossum";
const valueFour = "500";

// Convert values using Number()
const convertedOne = Number(valueOne);
const convertedTwo = Number(valueTwo);
const convertedThree = Number(valueThree);
const convertedFour = Number(valueFour);

// Create output for each value
const resultOne =
    `Original Value: "${valueOne}" → Converted: ${convertedOne}
    → isNaN: ${Number.isNaN(convertedOne)}
    → isInteger: ${Number.isInteger(convertedOne)}<br><br>`;

const resultTwo =
    `Original Value: "${valueTwo}" → Converted: ${convertedTwo}
    → isNaN: ${Number.isNaN(convertedTwo)}
    → isInteger: ${Number.isInteger(convertedTwo)}<br><br>`;

const resultThree =
    `Original Value: "${valueThree}" → Converted: ${convertedThree}
    → isNaN: ${Number.isNaN(convertedThree)}
    → isInteger: ${Number.isInteger(convertedThree)}<br><br>`;

const resultFour =
    `Original Value: "${valueFour}" → Converted: ${convertedFour}
    → isNaN: ${Number.isNaN(convertedFour)}
    → isInteger: ${Number.isInteger(convertedFour)}<br><br>`;

// ===================================
// Required if/else statements
// ===================================

let validationMessage;

if (Number.isNaN(convertedThree)) {
    validationMessage =
        "<p><strong>This value is not a valid number.</strong></p>";
} else {
    validationMessage =
        "<p>This value is a valid number.</p>";
}

let integerMessage;

if (Number.isInteger(convertedOne)) {
    integerMessage =
        "<p><strong>72 is an integer.</strong></p>";
} else {
    integerMessage =
        "<p>72 is not an integer.</p>";
}

// Display results
document.getElementById("numberConversionOutput").innerHTML =
    resultOne +
    resultTwo +
    resultThree +
    resultFour +
    validationMessage +
    integerMessage;

// ===================================
// Part 3: Math and Number Formatting
// ===================================

// Grade calculator
const examOne = 88;
const examTwo = 92;
const examThree = 79;

// Addition
const totalScore =
    examOne +
    examTwo +
    examThree;

// Division
const averageScore =
    totalScore / 3;

// Formatted average
const formattedAverage =
    averageScore.toFixed(2);

// Second if/else statement
let passMessage;

if (averageScore >= 70) {
    passMessage =
        "Passing";
} else {
    passMessage =
        "Not Passing";
}

// Large number formatting
const population = 39538223;
const formattedPopulation =
    population.toLocaleString();

// Display math section
document.getElementById("mathOutput").innerHTML =
    `<p>Exam 1 Score: ${examOne}</p>
     <p>Exam 2 Score: ${examTwo}</p>
     <p>Exam 3 Score: ${examThree}</p>
     <p>Total Score: ${totalScore}</p>
     <p>Average Score: ${formattedAverage}</p>
     <p>Status: ${passMessage}</p>
     <p>Formatted Population: ${formattedPopulation}</p>`;

// ===================================
// Extra Credit
// Option 1: typeof
// ===================================

const typeValueOne = 42;
const typeValueTwo = "COMP 484";
const typeValueThree = true;
const typeValueFour = null;
let typeValueFive;

document.getElementById("typeOutput").innerHTML =
    `<p>42 → ${typeof typeValueOne}</p>
     <p>"COMP 484" → ${typeof typeValueTwo}</p>
     <p>true → ${typeof typeValueThree}</p>
     <p>null → ${typeof typeValueFour}</p>
     <p>undefined variable → ${typeof typeValueFive}</p>`;