function buttonTransition(className){
 removeAllButtonTransition();
 let buttonElementTransition = document.querySelector(className) ;
  buttonElementTransition.classList.add('js-button-off');
}
function removeAllButtonTransition(){
  let techButton = document.querySelector('.js-tech-button-on');
  techButton.classList.remove('js-button-off');
  let musicButton = document.querySelector('.js-music-button-on');
  musicButton.classList.remove('js-button-off');
  let gamingButton = document.querySelector('.js-gaming-button-on');
  gamingButton.classList.remove('js-button-off');
}
/*button1 = document.querySelector('.js-gaming-button-on');
console.log(button1.classList.contains('js-gaming-button-on'));*/

console.log(document.querySelector('.gaming-button-on').innerText);