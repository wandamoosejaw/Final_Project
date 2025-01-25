


// **********PATIENT MODULE ****************************************************************************************

//Autocomplete Search Box
// Autocomplete Search Box
let availableSearchKeys = [
    'name',
    'email',
    'phone',
    'address',
    'city',
    'state',
]; // list of keywords available

const resultBox = document.querySelector(".result-box"); // selects the class result-box
const inputBox = document.getElementById("input-box"); // selects the id input-box

inputBox.addEventListener("keyup", function () { // onkeyup event is fired when a key is released
    let result = []; // empty array to include the match keywords
    let input = inputBox.value; // input value is stored here
    if (input.length) { // if input length is greater than 0
        result = availableSearchKeys.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase()); // match input with keywords in lowercase
        });
        console.log(result); // prints the result in the console
    }
    display(result); // calls the display function

    if (!result.length) {
        resultBox.innerHTML = ""; // clear resultBox if there are no results
    }
});

function display(result) {
    if (!result.length) {
        resultBox.innerHTML = ""; // Clear resultBox if no results
        return;
    }
    const content = result.map((list) => {
        return '<li onclick="selectInput(this)">' + list + '</li>'; // creates a list item for each keyword
    });
    resultBox.innerHTML = "<ul>" + content.join("") + "</ul>"; // removes comma and includes the list items on the HTML file
}

function selectInput(list) {
    inputBox.value = list.innerHTML; // when a keyword is clicked, it is displayed in the input box
    resultBox.innerHTML = ""; // clears the result box
}

