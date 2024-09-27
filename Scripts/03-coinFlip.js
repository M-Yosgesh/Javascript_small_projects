// let guess = prompt("Enter head or tails");

    
let score = JSON.parse(localStorage.getItem('score'));
if (!score){
  score={'won':0 , 'loss':0}
}
document.querySelector('.js-result').innerHTML = (`Results Description `);
document.querySelector('.js-result2').innerHTML = (`Results  `)
document.querySelector('.js-result3').innerHTML = (` Won  ${score.won}  Losses ${score.loss}`);


  
 
  function gamePlay(guess){
  let randomNumber = Math.random();
  let result = "";
  randomNumber <= 0.5 ? result='head' :
   result='tails';
  //console.log(randomNumber);
  document.querySelector('.js-result2').innerHTML = (`It is ${result}`);
  

  if (guess === result   ){
    score.won += 1;
    document.querySelector('.js-result').innerHTML = (`Yeah!! You guessed it right,It is Heads. `);
    document.querySelector('.js-result3').innerHTML = (` Won  ${score.won}  Losses ${score.loss}`);
    localStorage.setItem('score',JSON.stringify(score));
    //document.querySelector('.js-result').innerHTML=`You Have Chosen : ${guess} `;
    
  }
  else if (guess ===  result){
    score.won += 1;
    document.querySelector('.js-result').innerHTML = (`Yeah!! You guessed it right,It is Tails. `);
    document.querySelector('.js-result3').innerHTML = (` Won  ${score.won}  Losses ${score.loss}`);
    localStorage.setItem('score',JSON.stringify(score));
   // document.querySelector('.js-result').innerHTML=`You Have Chosen : ${guess} `;
  }
  else {
    score.loss += 1;
    document.querySelector('.js-result').innerHTML = (`Sorry!! You have guessed wrong. `);
     document.querySelector('.js-result3').innerHTML = (` Won  ${score.won}  Losses ${score.loss}`);
    localStorage.setItem('score',JSON.stringify(score));

  }
  
}
