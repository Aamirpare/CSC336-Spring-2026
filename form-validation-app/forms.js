/*
    Author      :  Aamir Pare
    Description :  Lecture on Form Validation
    Date        :  20th April 2026
    Mode        :  Online
    Location    :  G-11/4 Home, Islamabad
*/


//Global Declarations
const form = document.getElementById("user-registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const usernameError = document.getElementById("error-username");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const confirmPasswordError = document.getElementById("error-confirm-password");
//Submit button
//const submitButton = document.getElementById("submit");


//Validator Class where actual validation takes place
class FormValidator {

    isUsernameValid() {
        //username valdity check
        let isValid = false;
        if (username.value === "") {
            usernameError.innerText = "Username required!!";
            usernameError.style = "display:inline-block";
            isValid = false;
        }
        else if (username.value.length < 5) {
            usernameError.innerText = "Username must be at least 5 characters long!!";
            usernameError.style = "display:inline-block";
            isValid = false;
        }
        else {
            usernameError.style = "display:none";
            isValid = true;
        }
        return isValid;
    }

    isPasswordValid() {
        let isValid = false;
        if (password.value === "") {
            passwordError.innerText = "Empty passowrds are not allowed";
            passwordError.style = "display:inline-block";
            isValid = false;
        }
        else if (password.value.length < 6) {
            passwordError.innerText = "Password must be atleast 6 characters long";
            passwordError.style = "display:inline-block";
            isValid = false;
        }
        else {
            passwordError.style = "display:none";
            isValid = true;
        }
        return isValid;
    }

}

//Form Validator Module 
FormValidator.Handler = (function (validator) {

    //I discarded the button click and let the form submission work
    //submitButton.addEventListener("click", function (e) { ... }

    //Using form submit event 
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isFormValid = false;

        isFormValid = validator.isUsernameValid();

        isFormValid = validator.isPasswordValid();

        //Once the form becomes valid, submit it
        if (isFormValid) {
            alert("Form Submitted Successfully");
        }
    });

})(new FormValidator());
