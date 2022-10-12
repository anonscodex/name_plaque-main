  // Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const buypreview = document.querySelector('.buy-submit')


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
    const price = some_data.replaceAll(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

const buyNow = () => {
 let input = userInput.value;
  
  if (userInput.value === '') {
   alert("Kindly input a letter")
   }else if(input.toUpperCase() === 'YOUR NAME'){
    alert('Enter your custom name')
    userPricePreview.textContent = '$0'
    userInput.value = ''
    userLeterPreview.textContent = 'Your name'
  }else if(userInput.value.length > 15){
    alert('You have exceeded the number of available letters')
    alert('We have 15 letters left in stock and you have exceeded the limit')
  }else{
    alert('You have successfully entered your name')
  }
 
}

buypreview.onclick = ()=> {
  buyNow()
}

