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
                this.colLimit = 0
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

        this.gameTable.forEach(row => {
            row.forEach(col => {
                const rowNumb = this.gameTable.indexOf(row);
                const colNumb = this.gameTable[rowNumb].indexOf(col);
                
                if (this.gameTable[rowNumb][colNumb] != 0 // if tile isn't empty
                    && rowNumb != this.rowLimit // V
                    && colNumb != this.colLimit // distance limit
                    && this.gameTable[rowNumb+(this.rowDir)][colNumb+(this.colDir)] == 0 // the next tile is empty  
                    ) {
                    this.gameTable[rowNumb+(this.rowDir)][colNumb+(this.colDir)] = this.gameTable[rowNumb][colNumb];
                    this.gameTable[rowNumb][colNumb] = 0;
                    this.moveTiles(this.dir);
                }
            });
        });
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