let score = JSON.parse(localStorage.getItem('score'));
      if (score === null){
        score={'wins': 0, 'loses' : 0 , 'tie' : 0};

      }

      document.querySelector('.js-scoreboard')
      .innerText = `Total wins : ${score.wins} Total loses : ${score.loses}    Total tie : ${score.tie}`;

      /*document.querySelector('.js-result')
                  .innerHTML = `result`;

            document.querySelector('.js-moves')
                  .innerHTML =  `MOves `;*/

      


      function gamePlay (playerMove){
        let computerMove = pickComputerMove();
        let result='';
        

        if (playerMove === 'rock'){
          
          if (computerMove === 'rock'){
              result = 'Tie';
            } 
            else if (computerMove === 'paper'){
              result = 'You lose';
            }
            else if (computerMove === 'scissors'){
              result='You won';
            }
        }


           else if (playerMove === 'paper'){
              if (computerMove === 'rock'){
                result='You won'
              } 
              else if (computerMove === 'paper'){
                result = 'Tie';
              }
              else if (computerMove === 'scissors'){
                result='You lose';
              }
           }



           else if (playerMove === 'scissors'){
              if (computerMove === 'rock'){
                result = 'You lose';
              } 
              else if (computerMove === 'paper'){
                result = 'You won';
              }
              else if (computerMove === 'scissors'){
                result ='Tie';
              }
            }
          
            if (result === 'You won'){
              score.wins += 1;
              //return score.wins 
            }
            else if (result === 'You lose'){
              score.loses += 1;
              //return score.loses
            }
            else if (result === 'Tie'){
              score.tie += 1;
              //return score.tie
            }
            localStorage.setItem('score' , JSON.stringify(score));
            
            //updateResult();
            //updateMoves();
            document.querySelector('.js-moves')
                  .innerHTML =  `Your Move <img src="Images/${playerMove}.png" class="moves-icon-result"> <img src="Images/${computerMove}.png" class="moves-icon-result"> Computer Move `;

            updateScoreboard();
            document.querySelector('.js-result')
                  .innerHTML = `${result} <img src="Images/${computerMove}.png" class="moves-icon-result">`;

            

          /*alert(`you picked ${playerMove} , computer picked ${computerMove} . ${result}
          total wins : ${score.wins}  total loses : ${score.loses}   total tie : ${score.tie}`);*/
      }
      


      function updateResult(){
         document.querySelector('.js-result')
                .innerHTML =  `${result}`;
      }
      function updateMoves(){
         document.querySelector('.js-moves')
                .innerHTML =  `you picked ${playerMove} , computer picked ${computerMove}`;
      }

      function updateScoreboard(){
        let scoreBoardElement = document.querySelector('.js-scoreboard')
            .innerHTML = `Total wins : ${score.wins}  Total loses : ${score.loses}   Total tie : ${score.tie}`;
      }
      
      function pickComputerMove(){
        const randomNumber = Math.random();
        console.log(randomNumber)
        let computerMove=''
        if (randomNumber <= 0.3){
          computerMove='rock';}
        else if  (randomNumber >= 0.3 && randomNumber <=0.6){
          computerMove='paper';;
          } 
        else {
          computerMove='scissors';
        } 
        return computerMove;
      }
