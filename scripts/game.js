class StartGame {
    
    startValues = () => {
        this.gameTable = {
            1: [0, 0, 0, 0],
            2: [0, 0, 0, 0],
            3: [0, 0, 0, 0],
            4: [0, 0, 0, 0]
        };

        this.numbOptions = [2, 2, 2, 4];
    }
    
    addNumb = () => {
        const rowNumb = Math.floor(Math.random() * 4)+1;
        const colNumb = Math.floor(Math.random() * 4);
        const numb = Math.floor(Math.random() * 4);

        let addPlace = this.gameTable[rowNumb][colNumb];

        if (addPlace==0) {
            this.gameTable[rowNumb][colNumb] = this.numbOptions[numb];
        } else {
            this.addNumb();
        }
    }
}

startGame = new StartGame();
startGame.startValues();
startGame.addNumb();
console.log(startGame.gameTable);