// here will have html - js communication
const gameLogic = require(__dirname+"/gameLogic.js")

gameLogic.startValues()
gameLogic.addNumb()

const generateBoard = () => {
    for(let x=0; x < 4; x++){
        document.getElementById("gameBoard").innerHTML = document.getElementById("gameBoard").innerHTML +`<div id=\"row${x}\"></div>`
        for(let y =0; y < 4; y++){
            document.getElementById(`row${x}`).innerHTML += `<div class=\"square\" id=\"square${y}${x}\"></div>`
        }
    }
}

const updateBoard = () => {
    console.log(gameLogic.gameTable)
    for(let x = 0; x < 4; x++) {
        for(let y = 0; y < 4; y++){
            if (gameLogic.gameTable[x][y] != 0){
                document.getElementById(`square${x}${y}`).innerHTML = gameLogic.gameTable[x][y]
            } else {
                document.getElementById(`square${x}${y}`).innerHTML = ""
            }
        }
    }
}

document.onkeydown = (e) => {
    switch (e.key){
        case "ArrowUp":
            gameLogic.moveTiles("n")
            gameLogic.addNumb()
            updateBoard()
            break

        case "ArrowDown":
            gameLogic.moveTiles("s")
            gameLogic.addNumb()
            updateBoard()
            break

        case "ArrowLeft":
            gameLogic.moveTiles("w")
            gameLogic.addNumb()
            updateBoard()
            break

        case "ArrowRight":
            gameLogic.moveTiles("e")
            gameLogic.addNumb()
            updateBoard()
            break


    }
}

generateBoard()
updateBoard()