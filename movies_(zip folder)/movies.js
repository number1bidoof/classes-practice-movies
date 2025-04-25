// Define the Movie class
let moviediv = document.getElementById("movie-info")
class Movie {
    #title = "10 Things I Hate About You"
    #cast = ["Heath Ledger", "Juilia Stills"]
    #description = "A romcom about a group of high schoolers and thier expiernce with teenage love"
    #rating = 7.6
  UpdateRatings(newRating){
    this.#rating = newRating
  }
  DisplayInfo(){
    moviediv.innerHTML += `<strong>Rating: </strong>${this.#rating}<br>
    <strong>Title: </strong> ${this.#title}<br>
    <strong>Description: </strong> ${this.#description}<br>
    <strong>Cast Members: </strong> ${this.#cast}`

  }
}
const movie = new Movie
movie.DisplayInfo()
function updateMovieRating(){
  movie.UpdateRatings(9.9)
  moviediv.innerHTML += `<br><br><strong>Updated Rating</strong><br>`
  movie.DisplayInfo()
}
updateMovieRating()
//movie.DisplayInfo()

