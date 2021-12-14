class Movie {
  constructor(title) {
    this.title = title
    this.cast = []
  }

  hireActor(person) {
    this.cast.push(person)
  }
  
  getDescription() {
    // debugger
    const castList = this.cast.map(person => person.fullName()).join(', ')
    
    return `${this.title}\n` + `===\n` + `Starring: ${castList}`
  }
}

export default Movie