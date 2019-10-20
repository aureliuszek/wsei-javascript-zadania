//zadanie 0 
function distFromAvarage(numberArray){
    var avarage = 0;
    numberArray.forEach(element => {
        avarage += element;
    });
    
    avarage = avarage / numberArray.length;
    console.log(avarage);
var returnArray = [];
numberArray.forEach(element => {
    returnArray.push(element - avarage);
});
 console.log(returnArray);
 return returnArray;
   
}
distFromAvarage([1,2,3,4,5,6,7])

//zadanie 1 

let fruits = ['apple','orange','banana','peach','pear'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
for(let count = 0; count < fruits.length; count++){
    console.log(fruits[count]);
}
//zadanie 3 
function printTable(array){
    for(let i = 0; i <= array.length; i++){
        console.log(array[i]);
    }
}
printTable([1,3,4,5,6])

//zadanie 4 
function multiply(array){
    var multiplication=1;
    for(let i=0; i<array.length; i++){
        multiplication=multiplication*array[i];
    }
    console.log(multiplication);
}
multiply([1,2,3,4,5,6,7]);

//zadanie 5
function getEvenAvarage(array){
    let avg = 0;
    let evenNumber = 0;
    array.forEach(element => {
        if(element % 2 == 0){
            avg += element
            evenNumber ++
        }
    });
    if(avg == 0){
        console.log(null)
    } else {
        console.log(avg/evenNumber)
    }
}
getEvenAvarage([1,2,3,4,5,6,7])
getEvenAvarage([1,1,1,1])
getEvenAvarage([2,8,3,7,4])

//zadanie 6

function sortArray(array){
    function compareNumbers(arrayFirstValue, arraySecondValue){
        if(arrayFirstValue < arraySecondValue){
            return -1;
        }
        if(arrayFirstValue > arraySecondValue){
            return 1;
        }
        else{
            return 0;
        }
    }
    console.log(array.sort(compareNumbers));
}

sortArray([145,11,3,64,4,6,10]);

