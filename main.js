/* conveção de usar main.js para arquivo principal */
/*
function playPom(){ //tocar audio
    document.querySelector('#som_tecla_pom').play();
}
//document.querySelector('.tecla_pom').onclick = playPom;

function playClap(){
    document.querySelector('#som_tecla_clap').play();

}
//document.querySelector('.tecla_clap').onclick = playClap;

function playTim(){ //tocar audio
    document.querySelector('#som_tecla_tim').play();
}
//document.querySelector('.tecla_tim').onclick = playTim;

function playPuff(){
    document.querySelector('#som_tecla_puff').play();
}
//document.querySelector('.tecla_puff').onclick = playPuff;

function playSplash(){ //tocar audio
    document.querySelector('#som_tecla_splash').play();
}
//document.querySelector('.tecla_splash').onclick = playSplash;

function playToim(){
    document.querySelector('#som_tecla_toim').play();
}
//document.querySelector('.tecla_toim').onclick = playToim;

function playPsh(){ //tocar audio
    document.querySelector('#som_tecla_psh').play();
}
//document.querySelector('.tecla_psh').onclick = playPsh;

function playTic(){
    document.querySelector('#som_tecla_tic').play();
}
//document.querySelector('.tecla_tic').onclick = playTic;

function playTom(){ //tocar audio
    document.querySelector('#som_tecla_tom').play();
}
//document.querySelector('.tecla_tom').onclick = playTom;
*/
function playSong(idAudio){

   const elemento = document.querySelector(idAudio);

   if (elemento && elemento.localName === "audio"){ //js é inteligente e checa se n é null, nan, undefined, etc.
    elemento.play();
   }else{
    console.log('nope');
   }
}

 //se queremos guardar a função e não executá-la de vez, precisamos declará-la sem ().

 const seletorDeTeclas = document.querySelectorAll('.tecla');

 
 for (let i = 0; i < seletorDeTeclas.length; i++){
    
    const tecla = seletorDeTeclas[i] //button
    const som = tecla.classList[1]; //classe específica àquele button e.g: tecla_pom
    //funcao anonima
    tecla.onclick = function() {
        playSong(`#som_${som}`)
    };
    tecla.onkeydown = function(evento){ //funcao anonima com parametro
        if (evento.code==="Enter"||evento.code==="Space"){ //se parametro estiver na condição
            tecla.classList.add('ativa'); //faça
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
 }