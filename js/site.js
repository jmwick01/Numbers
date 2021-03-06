// get the values from the page
// starts or controller function
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // we need to validate our input
    // parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }
}

// generate numbers from startValue to the endValue
// logic function(s)
function generateNumbers(startValue, endValue) {
    let numbers = [];

    // want to get all numbers from start to end
    for (let i = startValue; i <= endValue; i++){

        // this will execute in a loop until i = endValue
        numbers.push(i);
    }

    return numbers;
}

// display the numbers and mark even numbers bold
// display or view functions
function displayNumbers(numbers) {

    let templateRows = "";
    for (let i=0; i < numbers.length; i++) {
        
        let className = "even";
        let number = numbers[i];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}