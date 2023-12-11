class Movie {
  constructor(title) {
    this.title = title
    this.cast = []
  }

  hireActor(personObject) {
    this.cast.push(personObject)
  }

  getDescription() {
    let summaryString = ""

    summaryString += this.title
    summaryString += "\n======"
    summaryString += "\nStarring:"

    this.cast.forEach((personObject) => {
      summaryString += `\n${personObject.fullName()}`
    })

    return summaryString

    // iterate over the cast members, and get their name strings
    
    // return a string with the title, and actors full names
  }

}

export default Movie