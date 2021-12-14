
# Node, JavaScript Classes & Composition Basics 

<img src="https://stackify.com/wp-content/uploads/2017/08/Javascript-vs-Typescript-793x397.jpg" width="500" />


---

## Today's Objectives

- Learn about `npm` and how to use it in our projects
- Review class syntax in JS 
- Understand how objects can interact and reference one another
- Explore method chaining 
- Discuss the basics of object inheritance
- Make brief mention of inheritance 

---

## A Note on how the curriculum is delivered 

* contrived for beginners
* not every assignment will be a reflection of the very best practices, but instead organized to help learn essentials
* focus on full-stack integration essentials 
* domain-knowledge depth *as-needed*

---

## Node Projects - Basics

- Node projects will have a project root
- Usually there will be a `package.json`
- The `package.json` defines `dependencies` and `devDependencies`
- Also has other important setup options, such as `"type": "module"`

---

## The Node Package Manager

- **N**ode **P**ackage **M**anagement
- Open source libraries - we can integrate into our node projects
- Made available via [https://www.npmjs.com/](https://www.npmjs.com/)
- We want to be thoughtful about which packages we choose to include in our projects

---

## Using `yarn`

- The `npm` client (installed when you installed node) is prone to bugs and issues
- `yarn` is faster and more reliable
- You should `yarn install` when you are working with a new node project that has a `package.json` present
- If there is a `package-lock.json`, you should instead use `npm` to manage dependencies and delete the `package-lock.json`
- Launch will uniformly use `yarn`

---

## Understanding `package.json` - Dependencies

- These libraries are **required** to run our project
- If we didn't have the listed dependencies installed, running the program in production would break

---

## Understanding `package.json` - devDependencies

- These libraries are **required** to develop our project
- If we didn't have the dependencies, we may be missing out on required or useful tools that help us to improve the project

---

## Import and Export

Let's switch gears to the node directory now

Notice in, `main.js`, we added (to the top):

```javascript
import Person from './Person.js'
```

And in, `Person.js`, we added (to the bottom):

```javascript
export default Person
```

---

## `export default` Exports a Constant for Other Files to Use

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName() {
    return `${this.firstName} ${this.lastName}, Actor`
  }
}

export default Person
```

---

## so that we can utilize the constant/class in another file

```javascript
import Person from './Person.js'
// import Movie from "./Movie.js"

const actorOne = new Person('Daniel', 'Radcliffe')
```

---

## We can `export default` Any Constant

Check out `node/movieGenres.js`

```js
const movieGenres = ['Action', 'Comedy', 'Romance', 'Sci Fi', 'Thriller']

export default movieGenres
```

We can load this array in `node/main.js` like so:

```javascript
import genres from './movieGenres.js'

genres.forEach(genre => {
  console.log(`${genre} is a movie genre`)
})
```

---

## `import` Loads the Default Export from Another File

*Optional alias of the import*

```js
import Person as Nick from '/modules/my-module.js';
```

- We can assign the constant to any variable name as we import  
- Convention wise, we try to mirror what the export name is, if any, or the class name

---

## Making a Movie - Class Composition

- A movie requires the work and energy of many people.
- We might **couple** a `Movie` object to a list of actors.

Let's create `node/Movie.js`

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F4QJA4YLKWns%2Fmaxresdefault.jpg&f=1&nofb=1" width="400" />
---

```javascript
class Movie {
  constructor(title) {
    this.title = title
    this.cast = []
  }

  hireActor(person) {
    this.cast.push(person)
  }

  getDescription() {
    const castList = this.cast.map(person => person.fullName()).join(', ')
    return `${this.title}\n` + `===\n` + `Starring: ${castList}`
  }
}

export default Movie
```

---

## Importing the Movie Class

In `node/main.js`, we can now use this new class.

```javascript
import Movie from './Movie.js'

const movie = new Movie("Harry Potter and the Sorcerer's Stone")
movie.hireActor(actorOne)
movie.hireActor(actorTwo)
console.log(`${movie.getDescription()}`)
```

```
Harry Potter and the Sorcerer's Stone
===
Starring: Daniel Radcliffe, Actor, Emma Watson, Actor
```

---

## A Look Closer at the `node/Movie.js` `getDescription`

```javascript
const castList = this.cast.map(person => person.fullName()).join(', ')
```

- _Wait_: `fullName` is a method defined on the `Person` object
- Because we pass `Person` instances into `hireActor`, we can use that instance method on every item in the `cast` array
- `Movie` is **coupled** to `Actor` because it depends on the class to function.

---

## Let's Change Our Person class to include more functionality

- Though the implementation of our `Person` `fullName` has changed, the way in which we call it hasn't.
- The behavior of the coupled method changes, but we don't have to make any code changes there

--- 


---

## Our Vocabulary Grows Richer

- We can _compose_ objects, and have them run as a larger program with other objects
- Having our custom objects interact with one another allows us to improve our metaphor and abstraction
- This is the *beginning* of the basics of "Object Composition
- Skill improves the more depth of logic you have in your apps
---
--- 

## Object Composition

Composition is about building complex objects from simple components to make it our code easier to use, rather than storing more logic in a class, or relying on inheritance.

--- 
---
## Inheritance

Inheritance is when a class is based on another using the same implementation. 

A Lamborghini (subclass) would gain methods and properties from a vehicle (superclass) like brake and accelerate. The Lambo will include its own properties like colour. This creates a relationship of a Lamborghini is a vehicle. 

We'll talk about this more later, but due to the size of our applications, will have fewer opportunities to use inheritance right away. 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lamborghini_Huracan_LP_610-4_Spyder_IMG_2644.jpg/440px-Lamborghini_Huracan_LP_610-4_Spyder_IMG_2644.jpg" width="200" height="100"/>

---

## Inheritance with a Person

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName() {
    return `${this.firstName} ${this.lastName}, Actor`
  }
}

export default Person
```
---

## Inheritance with a Person

```js
import Person from "./Person.js"

class Patron extends Person {
    constructor(firstName, lastName, favoriteMovie) {
    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
        super(firstName, lastName)
        this.favoriteMovie = favoriteMovie
    }

    interruptMovie(){
        return "THIS ACTING ISN'T BELIEVABLE!! Also I love my loud cell phone!"
    }

    // fullName() method should work fine on this class!
}

export default Patron
```

--- 

## Composition

Composition is about taking simple objects and combining them to build more complex ones. 

Lamborghini you might define a function for constructing essential features like engine, design and brakes. This creates a relationship of a Lamborghini has a engine, brakes and design.

---

## Beyond 

* At the moment, our applications are still small. 
* The need to do things like make factories, decorators, mixins and even use prototypcal inheritance is pretty low. 
* As our applications evolve, we will start to talk about these concepts more
* focus on procedural knowledge needed in order to run our web apps first and foremost. 

--- 

# Review
- `npm` and `yarn` are used together to help us install and run our dependencies
- `export default X` designates what from a file we wish to make available to other files
- We can load constants in from other files using `import`
- Objects can point to, or be coupled with, other objects in memory
- Data structures, variables and object properties can point to other objects, allowing us to access objects deeper in the structure, or call on methods defined on those objects