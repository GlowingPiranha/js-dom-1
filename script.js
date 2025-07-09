const button = document.getElementById(`button`);
const immagine1 = document.getElementById(`on-off`);
const immagine2 = document.getElementById(`off-on`);

button.addEventListener(`click`, function () {

  immagine1.classList.toggle(`hide`);
  immagine2.classList.toggle(`hide`);
});