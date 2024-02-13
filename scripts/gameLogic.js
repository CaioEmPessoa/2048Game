const { log } = require("console");
const fs = require("fs");
class Game {
    saveProgress = () => {
        // i am lazy and should just do a json as a save but wtv
        if (this.score > this.highScore) {
            // saving just the high score, maintaning biggest tile
            fs.writeFile(__dirname+"/../save.txt", this.score+","+this.highTile, (err) => {})

        }
        if (this.bigTile > this.highTile){
            // saving just the biggest tile, maitaning high score
            fs.writeFile(__dirname+"/../save.txt", this.highScore+","+this.bigTile, (err) => {})
        }
    }

    readProgress = function() {
        fs.readFile(__dirname+"/../save.txt", (err, data) => {
            if (err) {
                this.highScore = 0;
                this.highTile = 0;
              return
            }
            data = data.toString() // convert buffer to string
            const saveData = data.split(",")
            this.highScore = saveData[0]
            this.highTile = saveData[1]
        })
    }

    startValues = () => {
        this.gameTable = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];

        this.numbOptions = [2, 2, 2, 4];
        
        this.readProgress()

        this.score = 0;
        this.bigTile = 0;
        
    }
    
    addNumb = () => {
        if (!this.checkPossible()){
            console.log("game over!")
            return
        }

        const rowNumb = Math.floor(Math.random() * 4);
        const colNumb = Math.floor(Math.random() * 4);
        const numb = Math.floor(Math.random() * 4);
        
        let addPlace = this.gameTable[rowNumb][colNumb];

        if (addPlace==0) {
            this.gameTable[rowNumb][colNumb] = this.numbOptions[numb];
        } else {
            this.addNumb();
        }

    }

    checkPossible = () => {
        // remake this
        for (let i = 0; i < this.gameTable.length; i++) {
            for (let j = 0; j < this.gameTable[i].length - 1; j++) {
                if (this.gameTable[i][j] === this.gameTable[i][j + 1]) {
                    return true; // Pair found horizontally
                }
            }
        }
        
        // Check vertically
        for (let j = 0; j < this.gameTable[0].length; j++) {
            for (let i = 0; i < this.gameTable.length - 1; i++) {
                if (this.gameTable[i][j] === this.gameTable[i + 1][j]) {
                    return true; // Pair found vertically
                }
            }
        }

        for (let t = 0; t < this.gameTable.length; t++) {
            if (this.gameTable[t].includes(0)) {
                return true
            }
        }

        return false; // No pair found
    
    }

    moveTiles = (nswe) => {
        switch (nswe) {
            case "n":
                this.rowLimit = 0
                this.colLimit = "None"
                this.rowDir = -1
                this.colDir = 0
                this.dir = "n"
                break
                
            case "s":
                this.rowLimit = 3
                this.colLimit = "None"
                this.rowDir = +1
                this.colDir = 0
                this.dir = "s"
                break
                
            case "w":
                this.rowLimit = "None"
                this.colLimit = "None" // i'm pretty sure it has to have a limit but it doesn't works with one ...
                this.rowDir = 0
                this.colDir = -1
                this.dir = "w"
                break

            case "e":
                this.rowLimit = "None"
                this.colLimit = 3
                this.rowDir = 0
                this.colDir = +1
                this.dir = "e"
                break
        }

        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (row == this.rowLimit || col == this.colLimit ) {
                    break
                }
                
                const currentTile = this.gameTable[row][col]
                const nextTile = this.gameTable[row+(this.rowDir)][col+(this.colDir)]
        
                if (currentTile != 0 && nextTile == 0) {
                    this.gameTable[row+(this.rowDir)][col+(this.colDir)] = currentTile;
                    this.gameTable[row][col] = 0;
                    this.moveTiles(this.dir);
                } 
                else if (nextTile == currentTile && currentTile!=0) {
                    const newNumb = nextTile+currentTile;
                    this.gameTable[row+(this.rowDir)][col+(this.colDir)] = newNumb;
                    this.gameTable[row][col] = 0;
                    this.moveTiles(this.dir);
                    this.score += newNumb
                    if (newNumb > this.bigTile) {
                        this.bigTile = newNumb
                    }
                }

                this.saveProgress()
            }
            
        }
    }
    

    showTable = () => {
        this.gameTable.forEach(row => {
            console.log(row)
        });
        console.log("")
    }
}

game = new Game();
/* test 
game.startValues()
game.addNumb()
game.showTable()
game.moveTiles("e")
game.showTable()
*/

module.exports = game