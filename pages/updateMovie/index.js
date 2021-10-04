const nameMovie = document.querySelector('#nameMovie')
const durationMovie =  document.querySelector('#durationMovie')
const IdMovieToEdit = window.localStorage.getItem('#gvdasaFlix:idMovieToEdit');
const allMovies  = JSON.parse(localStorage.getItem('#gvdasaFlix'));
const btnUpdate = document.querySelector('#updateButton')

const indexMovieToEdit = allMovies.findIndex(movie => movie.idMovie==IdMovieToEdit)
const movieToEdit = allMovies[indexMovieToEdit]
nameMovie.value=movieToEdit.nameMovie
durationMovie.value=movieToEdit.durationMovie

console.log({movieToEdit})

btnUpdate.addEventListener('click',(e)=>{
  e.preventDefault();

  const newAllMovies = [...allMovies];
  newAllMovies[indexMovieToEdit] = {
    idMovie:movieToEdit.idMovie,
    nameMovie:nameMovie.value,
    durationMovie:durationMovie.value
  }
  window.localStorage.setItem('#gvdasaFlix',JSON.stringify(newAllMovies))
  location.href = '../readMovie/index.html'

})