import Person from "./person.js";

export default class Database {

    getPersons() {
        const person1 = new Person("Aamir1", "aamir1@gmail.com", true);
        const person2 = new Person("Aamir2", "aamir2@gmail.com", false);
        const person3 = new Person("Aamir3", "aamir3@gmail.com", true);
        // console.log(person1);
        // console.log(person2);
        // console.log(person3);

        //person1.show();

        //const persons = [person1, person2, person3, new Person("x", "x.gmail.com", false)];

        const persons = new Array(
            [person1, person2, person3, new Person("x", "x.gmail.com", false)],
            [new Person("name", "name@gmail.com", true), person1, person3],
            [new Person("Sameel Ahmed", "sameel@gmail.com", false), person1, person3]
        );

        //const persons = new Array([person1, person2, person3, new Person("x", "x.gmail.com", false)]);

        // persons.forEach(function (person) {
        //     console.log(person[0].fullName);
        //     console.log(person[1].fullName);
        //     console.log(person[2].fullName);
        // });

        return persons;
    }
}