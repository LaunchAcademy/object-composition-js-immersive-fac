class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName 
    this.lastName = lastName
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

export default Person
// const jason = new Person("Marlon", "Sanchez")
// const tracy = new Person("Nick", "deRis")
// console.log(jason)

const createPerson = (firstNameString, lastNameString) => {
  return {
    firstName: firstNameString, 
    lastName: lastNameString
  }
}
// createPerson("Jason", "Berk")

const me = { 
  firstName: "Nick", 
  lastName: "Alberts",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`
  } 
}











// If needed for considering object composition

// We might also say that a person could be composed of their Phone and their clothing

// class Person {
//   constructor(firstName, lastName, phone) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.phone = phone
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}, Actor`
//   }
// }

// class Phone {
//   constructor(make, model){
//     this.make = make 
//     this.model = model 
//   }

//   ring(){
//     return "Ring ring ring!"
//   }

// }