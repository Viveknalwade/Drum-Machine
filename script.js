const drumPads = document.querySelectorAll('.drum-pad');

const display = document.getElementById('display');

drumPads.forEach((pad)=>{

  pad.addEventListener("click",()=>{

    const audio = pad.querySelector('audio');

    audio.play()

    display.textContent = pad.id;

  })

})

document.addEventListener('keydown', (event) => {

  const key = event.key.toUpperCase();

  const audio = document.getElementById(key);

  if (audio) {

    audio.play();

    const pad = audio.parentElement;

    display.textContent = pad.id;

  }

});
