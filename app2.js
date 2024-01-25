let inputEl = document.getElementById('input-el')
let player ={
    name: " lugan ",
    chips: 145
}
let cards = []
let sum = 0                                                  
let cardsEl = document.querySelector('#cards-el')
let sumEl = document.getElementById('sum-el')
let massageEl = document.getElementById('massage-el')
let hadBlackJack = false
let isAlive = false
let massage = ""


let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": R" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if ( randomNumber === 1){
        return randomNumber = 11
    }
    else if( randomNumber > 10){
        return randomNumber = 10
    }
    return randomNumber
    

    
}

function startGame(){
   
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard =getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

    
function renderGame(){
   
    cardsEl.textContent = "Cards: "
    
    for ( let i = 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
        

    }
    sumEl.textContent = "Sum: " + sum
    

    if (sum <= 20){
        massage = "Do you want to draw a new card?👍"
        
      
        
    } else if (sum === 21){
        massage = "Wohoo! You've got Blackjack👌"
        
     
        hadBlackJack =  true
    } else {
        massage ="You're out of the game😢"
        
       
        isAlive = false
    }
    massageEl.textContent = massage
   

}
function newCard(){
    if( isAlive === true && hadBlackJack === false ){
    let card = getRandomCard()
    cards.push(card)
    sum += card
    console.log('card was drawn')
    
    renderGame()
    }
    
   
}

