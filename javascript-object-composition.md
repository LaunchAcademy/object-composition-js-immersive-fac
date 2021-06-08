
# Class Composition

<img src="https://stackify.com/wp-content/uploads/2017/08/Javascript-vs-Typescript-793x397.jpg" width="500" />


---

## Today's Objectives

- Learn about `npm` and how to use it in our projects
- Review class syntax in JS 
- Understand how objects can interact and reference one another
- Explore method chaining 

---

## Node Projects - Basics

- Node projects will have a project root
- Usually there will be a `package.json`
- The `package.json` defines `dependencies` and `devDependencies`
- Also has important setup options, such as `"type": "module"`

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
- If there is a `package-lock.json`, you should instead use `npm` to manage dependencies
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
    return [this.firstName, this.lastName].join(' ')
  }
}

export default Person
```

---

## We can `export default` Any Constant

Check out `node/movieGenres.js`

We can load this array in `node/main.js` like so:

```javascript
import genres from './movieGenres.js'

genres.forEach(genre => {
  console.log(`${genre} is a movie genre`)
})
```

---

## `import` Loads the Default Export from Another File

- We can assign the constant to any variable name
- Convention wise, we try to mirror what the export is

---

## Making a Movie - Class Composition

- A movie requires the work and energy of many people.
- We can **couple** a `Movie` object to a list of actors.

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

---

## A Look Closer at the `node/Movie.js` `getDescription`

```javascript
const castList = this.cast.map(person => person.fullName()).join(', ')
```

- _Wait_: `fullName` is a method defined on the `Person` object
- Because we pass `Person` instances into `hireActor`, we can use that instance method on every item in the `cast` array
- `Movie` is **coupled** to `Actor` because it depends on the class to function.

---

## Let's Change Our `Person` class to include more functionality

- Though the implementation of our `Person` `fullName` has changed, the way in which we call it hasn't.
- The behavior of the coupled method changes, but we don't have to make any code changes there

---

## Our Vocabulary Grows Richer

- We can _compose_ objects with other objects
- Having our custom objects interact with one another allows us to improve our metaphor and abstraction

---

# Review
- `npm` and `yarn` are used together to help us install and run our dependencies
- `export default X` designates what from a file we wish to make available to other files
- We can load constants in from other files using `import`
- Objects can point to, or be coupled with, other objects in memory
- Data structures, variables and object properties can point to other objects, allowing us to access objects deeper in the structure, or call on methods defined on those objects