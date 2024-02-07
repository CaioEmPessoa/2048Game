let gameTable = {
    1: [0, 0, 0, 0],
    2: [0, 0, 0, 0],
    3: [0, 0, 0, 0],
    4: [0, 0, 0, 0]
}

const numbOptions = [2, 2, 2, 4]

let rowNumb = Math.floor(Math.random() * 4)+1
let colNumb = Math.floor(Math.random() * 4)
let numb = Math.floor(Math.random() * 4)
console.log(rowNumb)
gameTable[rowNumb][colNumb] = numbOptions[numb]

console.log(gameTable)