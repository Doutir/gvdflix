function addElementToTable({inputValue,nameMovie,durationMovie}){

  let tableBody = document.querySelector('#tableMoviesBody');
  // Insert a row at the end of table
  const newRow = tableBody.insertRow();


  // adicionar novo checkbox 
  const newCheckBoxRef = newRow.insertCell();
  const newCheckBox = document.createElement('input');
  newCheckBox.setAttribute('type','checkbox')
  newCheckBox.setAttribute('value',inputValue)
  newCheckBox.setAttribute('class','moviesCheckbox')
  newCheckBoxRef.appendChild(newCheckBox);
  
  // adicionar novo nome do filme
  const newCellNameRef = newRow.insertCell();
  const newCellName = document.createTextNode(nameMovie);
  newCellNameRef.appendChild(newCellName);
  
  // adicionar nova duracao do filme
  const newCellDurationRef = newRow.insertCell();
  const newCellDuration = document.createTextNode(durationMovie);
  newCellDurationRef.appendChild(newCellDuration);

  // adicionar botao editar 
  const newButtonRef = newRow.insertCell();
  const newButton = document.createElement('button');
  newButton.textContent= 'editar'
  newButton.setAttribute('type','button')
  newButton.setAttribute('value',inputValue)
  newButton.setAttribute('class','btn')
  newButton.setAttribute('onclick',`handleEditButton(${inputValue})`)
  newButtonRef.appendChild(newButton);
  
}

const btnRemoveMovie = document.querySelector('#deleteMovies')
const table = document.querySelector('tableMovies')
const allMovies  = JSON.parse(localStorage.getItem('#gvdasaFlix'));

btnRemoveMovie.addEventListener('click',()=>{
  const allCheckbox = document.querySelectorAll('.moviesCheckbox')
  const allMoviesCheckedIds = [];
  const newAllMovies = [...allMovies];

  allCheckbox.forEach(el=>{
    if(el.checked){
      allMoviesCheckedIds.push(el.value)
    }
  })

  for(let idMovie of allMoviesCheckedIds){
    const indexId = newAllMovies.findIndex(movie=>movie.idMovie==idMovie)
    newAllMovies.splice(indexId,1);
  }
  window.localStorage.setItem('#gvdasaFlix',JSON.stringify(newAllMovies))
  document.location.reload(true);
  
})


function handleEditButton(idMovie){
  window.localStorage.setItem('#gvdasaFlix:idMovieToEdit',JSON.stringify(idMovie));
  location.href = '../updateMovie/index.html';


}

for(const movie of allMovies){
  addElementToTable({
    durationMovie:movie.durationMovie,
    inputValue:movie.idMovie,
    nameMovie:movie.nameMovie
  })
}