// here will have html - js communication
const gameLogic = require(__dirname+"/gameLogic.js")

gameLogic.startValues()
gameLogic.readProgress()
gameLogic.addNumb()
gameLogic.addNumb()

const generateBoard = () => {
    for(let x=0; x < 4; x++){
        document.getElementById("gameBoard").innerHTML = document.getElementById("gameBoard").innerHTML +`<div id=\"row${x}\"></div>`
        for(let y =0; y < 4; y++){
            document.getElementById(`row${x}`).innerHTML += `<div id=\"square${y}${x}\"></div>`
        }
    }
}

const tierDict = {
    2:"one", 4:"two",
    8:"three", 16:"four",
    32:"five", 64:"six",
    128:"seven", 256:"eight",
    512:"nine", 1024:"ten",
    2048:"eleven"
}

const updateBoard = () => {
    document.getElementById("currentScore").innerHTML = gameLogic.score;
    document.getElementById("currentTile").innerHTML = gameLogic.bigTile;
    
    document.getElementById("bestScore").innerHTML = gameLogic.highScore;
    document.getElementById("bestTile").innerHTML = gameLogic.highTile;

    for(let x = 0; x < 4; x++) {
        for(let y = 0; y < 4; y++){

            tileNumb = gameLogic.gameTable[x][y]
            
            if (tileNumb != 0){
                document.getElementById(`square${x}${y}`).innerHTML = tileNumb;
                
                document.getElementById(`square${x}${y}`).classList = ""; // clear class
                
                document.getElementById(`square${x}${y}`).classList.add("square");
                document.getElementById(`square${x}${y}`).classList.add('tier-' + tierDict[tileNumb]);
                
            } else {
                document.getElementById(`square${x}${y}`).innerHTML = "";
                document.getElementById(`square${x}${y}`).classList = ""; // clear class

                document.getElementById(`square${x}${y}`).classList.add("tier-zero", "square");
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