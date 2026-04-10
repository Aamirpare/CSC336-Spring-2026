//const Person = require("./person.js");

import Database from "./database.js";

const container = document.getElementById("person-list");

export default class Profile {

    persons = {};

    constructor() {
        this.persons = new Database().getPersons();
        this.generateList();
    }

    generateList() {

        //const persons = this.persons;

        console.log(this.persons.length);

        let index = 0;
        for (let person of this.persons) {

            const ul = this.createElement("ul");

            index++;
            console.log("List-" + index);

            //new requirement is to display the title of the person list
            ul.appendChild(this.createElement("h1", "List-" + index));

            person.forEach(listPerson => {

                console.log(listPerson);

                for (let [key, value] of Object.entries(listPerson)) {
                    console.log(`key:${key}, value:${value}`);
                    const li = this.createElement("li", `${key} : ${value}`, "list-item");
                    ul.appendChild(li);
                }
            });

            container.appendChild(ul);
        }

    }

    //The element must have a class so that it can be given a style 
    createElement(tag, text = "", clas = "") {
        const element = document.createElement(tag);
        if (text) {
            element.textContent = text;
        }
        if (clas) {
            element.className = clas;
        }
        return element;
    }

    toString() {
        this.persons.forEach(person => console.log(person));
    }

}