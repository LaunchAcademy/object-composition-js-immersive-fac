import Person from './Person.js'
import Movie from "./Movie.js"

const actorOne = new Person('Daniel', 'Radcliffe')
const actorTwo = new Person('Emma', 'Watson')

const movie = new Movie("Harry Potter and the Sorcerer's Stone")

movie.hireActor(actorOne)
movie.hireActor(actorTwo)

debugger

console.log(`${movie.getDescription()}`)

