//DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

//Event to get the values
generateEl.addEventListener("click", () => {
    const length = parseInt(lengthEl.value);//an easier way would be to add + to lengthEL.value(+lengthEL.value)

    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasSymbol = symbolsEl.checked;
    const hasNumber = numbersEl.checked;

    resultEl.innerHTML = generatePassword(hasLower,hasNumber,hasSymbol,hasUpper,length);
});

//const variable to store random function
const randomFunc = {
    symbols: getRandomSymbol,
    number: getRandomNumber,
    upper: getRandomUppercase,
    lower: getRandomLowercase
};

//Function to Generate Password
 //we first init password variable
//then we filter unchecked selectors if we have to
//loop over length to call generate function for each type
//finally we add results to password variable and return
const generatePassword = (lower,upper,symbols,number) => {
   

    let generatedPassword = "";

    const typesCount = lower + upper + number + symbols;// we need to check how many select have been checked

    console.log("typesCount:", typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbols}].filter(
        item => Object.values(item)[0]
    );//code to remove unchecked selectors
    console.log("typesArr:", typesArr)

    if(typesCount === 0){
         return "";
    };

   

      //create a loop
    if(typesCount !== 0) {
        typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          
          generatedPassword += randomFunc[funcName]();
        });
       finalPassword = generatedPassword
      }
     return finalPassword; 
}




//Generate Functions

//function to generate random lower case letters from a to z
function getRandomLowercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);//String.fromCharCode is simply effective
};

//function to get random Upper case letters from A to Z
function getRandomUppercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

//function to get random number between zero to ten
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
};




