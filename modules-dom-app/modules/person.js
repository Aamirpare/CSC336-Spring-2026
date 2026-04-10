/*Modules in Java Script*/
/*
    1. Older way JS Common Module style
*/
export default class Person {

    fullName;
    email;
    isEligible;

    constructor(name, email, isEligible) {
        this.fullName = name;
        this.email = email;
        this.isEligible = isEligible
    }

    show() {
        console.log(`Name: ${this.fullName}, email: ${this.email}, Eligibilty: ${this.isEligible}`);
    }
}

//module.exports = Person;