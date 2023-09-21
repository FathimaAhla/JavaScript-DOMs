const gameBoard = document.querySelector('#gameBoard')
const infoDisplay = document.querySelector('#info')
const startCells = [
    "", "", "", "", "", "", "", "", ""
]

let go = "circle"
infoDisplay.textContent = "Circle goes First"

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })
}
createBoard()

function addGo (e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go == "circle" ? "cross" : "circle"
    infoDisplay.textContent = " Its is now " + go + "'s go."
    e.target.removeEventListener("click", addGo)
    checkScore()
}

function checkScore () {
    const allSquare = document.querySelectorAll(".square")
    const winingCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    console.log(allSquare[4])

    winingCombos.forEach(array => {
        const circleWins = array.every(cell => 
            allSquare[cell].firstChild?.classList.contains('circle'))

            if(circleWins) {
                infoDisplay.textContent = "Circle Wins!"
                allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })

    winingCombos.forEach(array => {
        const crossWins = array.every(cell => 
            allSquare[cell].firstChild?.classList.contains('cross'))

            if(crossWins) {
                infoDisplay.textContent = "Cross Wins!"
                allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })
}