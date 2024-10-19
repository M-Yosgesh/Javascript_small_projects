
let Array = [10,20,30];
let Array2 = [1,20,22,24,5];
let Array3 = ['hi','hello','good'];
//console.log(Array);
Array[2] = 99;
//console.log(Array);

function getLastValue(array){
  let totalValue = array.length - 1;
  //console.log(totalValue);
  console.log(array[totalValue]);
}

//console.log(getLastValue(Array));
//console.log(getLastValue(Array2));
//console.log(getLastValue(Array3));


function arraySwapFirstToLast(array){
  let swapVariable = array[0] ;
  //console.log(`swapvarible ${swapVariable}`);
  let totalValue = array.length - 1;
 // console.log(`totalvalue ${totalValue}`);
  array[0] = array[totalValue];
  //console.log(`array 1st element ${array[0]}`);
  array[totalValue] = swapVariable;
  //console.log(`array Last element ${array[totalValue]}`);
  console.log(`After swapped array  ${array}`);

}

//arraySwapFirstToLast(Array);
//arraySwapFirstToLast(Array2);
//arraySwapFirstToLast(Array3);

/*
let array4 = []
for (let i = 0 ; i <= 10 ; i+=2){
  array4.push(i);
  
}
console.log(array4)


let array5 = [];
for (let i = 5 ; i >=0 ;i--){
  array5.push(i);

}
console.log(array5);

let i=0;
while ( i <= 10){
  console.log(i);
   i += 2;
}

let ie =5;
while ( ie >= 0){
  console.log(ie);
   ie--;
}
 */

function addExtraOneToArray(array){
  for (let i = 0 ; i < array.length ; i++){
    array[i] += 1;
    console.log(array);
  }
}

//addExtraOneToArray(Array);
//addExtraOneToArray(Array2);
//addExtraOneToArray(Array3);

const arrayy = [-2,-1,0,99];
//addExtraOneToArray(arrayy);



function addNumToArray(array,num){
  for (let i = 0 ; i < array.length ; i++){
    array[i] += num;
    console.log(array);
  }
}
//addNumToArray(Array,2);

function addArrayToArray(array1,array){
  console.log(array1);
  console.log(array);
  for (let i = 0 ; i < array.length ; i++){
    
    array1[i] += array[i];
    
  }
  console.log(array1);
}
//addArrayToArray(Array ,Array2 );

function countPositiveNum(array){
  total= 0;
  for( let i = 0 ; i < array.length ; i++){
    
    if (array[i] > 0 ){
      
      total++;
      
    }
    
  }
  console.log(total)
}

//countPositiveNum([1,-3,5]);
//countPositiveNum([-2,3,-5,7,10]);

function minMax(nums){
  let result = {min :null ,max : null};
  //console.log(min,max)
  for (let i = 0; i < nums.length ; i++){
   let compNum= nums[i];
   //console.log(compNum)
   if (result.min === null || compNum < result.min){
    result.min=compNum;
   }
   if (result.max === null || compNum > result.max){
    result.max=compNum;
   }
   
  }
  console.log(result);
}

/*
minMax([1,-3,5]);
minMax([-2,3,-5,7,10]);
minMax([]);
minMax([3]);
*/

function searchStringInArray(array,string){
  let indexValue = -1 ;
  for (i = 0 ; i < array.length ; i++){
    if ( array[i] === string){
    indexValue = i ;
    
    } 

  }
  console.log(indexValue)
}

/*
searchStringInArray(['hello','search','world','search','search' , 'good'],'search');
searchStringInArray(['not','found'],'search');

searchStringInArray(['green','red','blue','red'],'red');
searchStringInArray(['green','red','blue','red'],'yellow');
*/


function removeStringInArray(array,string){
  let result = [];
  let limitedRemove = 0;
  for (i = 0 ; i < array.length ; i++){
    
    
  if (array[i] === string && limitedRemove < 2){
    limitedRemove++
    continue;
    
    
  }
  
  result.push(array[i])
  
  }
  console.log(result);
  //console.log(string);
}

//removeStringInArray(['egg','apple','egg','egg','ham'] ,'egg');


function removeStringInArrayInReverse(array,string){
  let result = [];
  let limitedRemove = 0;
  let clonedArray = array.slice();
  let reverse = clonedArray.reverse();
    for (i = 0 ; i < array.length ; i++){   
      if (reverse[i] === string && limitedRemove < 2){
        limitedRemove++
        continue;    
      }   
    result.push(reverse[i]) 
    console.log()   
    }
  console.log(result.reverse());
  console.log(`normal ${array}`);
  console.log(`reverse ${clonedArray}`);
  //console.log(string);
}

//removeStringInArrayInReverse(['egg','apple','egg','egg','ham'] ,'egg');


function fizzBuzzProblem(){
  for (i = 1 ; i<21 ; i++){
   
   if ( i % 3 === 0 ){
    result = 'fizz';
   }else if ( i % 5 === 0){
    result = 'Buzz';
   }
   else {
    result = i;
   }
   if ( i % 15 === 0 ){
    result = 'fizzBuzz';
   }
   console.log(result);
  }
  }



//fizzBuzzProblem();

function unique(array){
  const result = [];
  for (i = 0 ; i < array.length ; i++){
    const word = array[i];
    if (searchStringInArray(result,word) === -1 ){
      result.push(word);
    }
  }
  return result;
}

unique(['green', 'red' , 'blue', 'red'])