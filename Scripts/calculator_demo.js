   
      
     let calculation = JSON.parse(localStorage.getItem('final-result'));
     if (!calculation){
      calculation= '0';
     } 
     document.querySelector('.js-displayCalculation').innerHTML=calculation;


     function doCalculation(number){
      calculation += number;
      document.querySelector('.js-displayCalculation').innerHTML=calculation;
      }


      function equalsTo(finalCalculation){
       result = eval(finalCalculation);
       calculation=result;

       document.querySelector('.js-displayCalculation').innerHTML=calculation;
       localStorage.setItem('final-result',JSON.stringify(calculation));            
      }
      function pressNumberToSubmit(event){
        //document.querySelector('button').innerHTML='yes';

        num=document.querySelector(`.js-key${event.key}`).innerHTML;
        doCalculation(num);
        console.log(event.key);
      }
      