class Game {
    startValues = () => {
        this.gameTable = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];

        this.numbOptions = [2, 2, 2, 4];
    }
    
    addNumb = () => {
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
                    this.gameTable[row+(this.rowDir)][col+(this.colDir)] = nextTile+currentTile;
                    this.gameTable[row][col] = 0;
                    this.moveTiles(this.dir);
                }
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