import Person from "./Person.js"

class Patron extends Person {
    constructor(firstName, lastName, favoriteMovie) {
        // Here, it calls the parent class's constructor with names
        // provided for the Person's firstName and lastName
        super(firstName, lastName)
        this.favoriteMovie = favoriteMovie
    }

    // unique to the Patron
    interruptMovie(){
        return "Ring ring ring! Woops, forgot about my phone!"
    }

    // fullName() method from Person should work fine on this class!
}

export default Patron

