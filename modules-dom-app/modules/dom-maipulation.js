/*
    Creating a function for dynamically manipulating the web page
*/

function createElement(tag, text = "") {
    const element = document.createElement(tag);
    if (text) {
        element.textContent = text;
    }
    document.body.appendChild(element);
}

createElement("h1", "Welcome to Collections in Java Script");

createElement("p", "Lorem hundred charachters are al least");

createElement("div", "somethign is not necessary");