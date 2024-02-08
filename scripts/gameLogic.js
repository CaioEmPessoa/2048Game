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
    
    moveUp = () => {
        this.gameTable.forEach(row => {
            row.forEach(col => {
                const rowNumb = this.gameTable.indexOf(row)
                const colNumb = this.gameTable[rowNumb].indexOf(col)

                if ( rowNumb!=0 && this.gameTable[rowNumb][colNumb] != 0 && this.gameTable[rowNumb-1][colNumb] == 0 ) {
                    this.gameTable[rowNumb-1][colNumb] = this.gameTable[rowNumb][colNumb]
                    this.gameTable[rowNumb][colNumb] = 0
                    this.moveUp()
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
game.startValues()
game.addNumb()
game.addNumb()
game.addNumb()
game.addNumb()
game.addNumb()
game.showTable()
game.moveUp()
game.showTable()

module.exports = game