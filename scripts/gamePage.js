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
    for(let x = 0; x < 4; x++) {
        for(let y = 0; y < 4; y++){
            if (gameLogic.gameTable[x][y] != 0){
                document.getElementById(`square${y}${x}`).innerHTML = gameLogic.gameTable[x][y]
            }
        }
    }
}

document.onkeydown = (e) => {
    switch (e.key){
        case "ArrowDown":
            alert('ArrowDown!');
            break
            
            case "ArrowUp":
            alert('ArrowUp!');
            break

        case "ArrowRight":
            alert('ArrowRight!');
            break

        case "ArrowLeft":
            alert('ArrowLeft!');
            break

    }
}


generateBoard()
updateBoard()