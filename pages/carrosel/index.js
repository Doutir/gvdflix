// document.querySelector('#items').addEventListener('wheel',e=>{
//   if(e.deltaY>0){
//     e.target.scrollBy(300,0)
//   }else{
//     e.target.scrollBy(-300,0)
//   }
// })

function avancarImg(){
  if(selectedImg===qtdImgs){
    console.log("cheguei no limite")
    itemsDiv.scrollBy(-(qtdImgs*600),0)
    selectedImg=1
  }else{
    itemsDiv.scrollBy(300,0)
    selectedImg++
    console.log("avancei mais um :",selectedImg)
  }
}

function voltarImg(){
  if(selectedImg===1){
    itemsDiv.scrollBy(qtdImgs*600,0)
    selectedImg=qtdImgs
    console.log("cheguei no primeiro ")
  }else{
    itemsDiv.scrollBy(-300,0)
    selectedImg--
    console.log("voltei mais um :",selectedImg)
  }
}
function autoPlay(){
autoPlayVar = setInterval(()=>avancarImg(),2000)
}
function removeAutoPlay(){
  clearInterval(autoPlayVar);
}
let autoPlayVar ;
const btnAvancar = document.querySelector('#nextBanner');
const btnVoltar = document.querySelector('#prevBanner');
const btnPausar = document.querySelector('#stopAnimation');
const btnStart = document.querySelector('#startAnimation');
const itemsDiv = document.querySelector('#items');
const qtdImgs = document.querySelectorAll('.item').length;
let selectedImg = 1;
btnAvancar.addEventListener('click',()=>{
  avancarImg()
})
btnVoltar.addEventListener('click',()=>{
  voltarImg()
})
btnPausar.addEventListener('click',()=>{
  removeAutoPlay()
  btnAvancar.style.display='initial'
  btnVoltar.style.display='initial'
  btnStart.style.display='initial'
  btnPausar.style.display='none'

})

btnStart.addEventListener('click',()=>{
  autoPlay()
  btnAvancar.style.display='none'
  btnVoltar.style.display='none'
  btnStart.style.display='none'
  btnPausar.style.display='initial'
})
autoPlay()