const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choice = ['rock', 'paper', 'scissors']
let userChoice 
let computerChoice

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'user choice: ' + userChoice 
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choice[Math.floor(Math.random() * choice.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'computer choice: ' + randomChoice
}

for(let i = 0; i < choice.length; i++){
    const button = document.createElement('button')
    button.id = choice[i] // you can delete this id you want ti use e.target.innerHTML in the handleClick
    button.innerHTML = choice[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "You WIN"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "You LOSE"
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            resultDisplay.innerHTML = "Its a DRAW"
            break
    }
}