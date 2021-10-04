const btnEnviar = document.querySelector('#submitButton');

btnEnviar.addEventListener('click',(e)=>{
  e.preventDefault()
  const nameMovie = document.querySelector('#nameMovie').value
  const durationMovie =  document.querySelector('#durationMovie').value
  if(!nameMovie||!durationMovie){
    return alert('preencha todos os campos por favor')
  }
  const idMovie = Date.now();

  const allMovies = JSON.parse(window.localStorage.getItem('#gvdasaFlix'));
  console.log({allMovies})
  const newMovie = allMovies ? [...allMovies,{nameMovie,durationMovie,idMovie}]:[{nameMovie,durationMovie,idMovie}]

  window.localStorage.setItem('#gvdasaFlix',JSON.stringify(newMovie))
  location.href= '../readMovie/index.html'
  document.querySelector('#nameMovie').value= ''
  document.querySelector('#durationMovie').value= ''
})