const TileDisplay = document.querySelector(".tile-container");
const Keyboard = document.querySelector(".key-container");
const messageDisplay = document.querySelector(".message-container");

const wordle = "Super"

const keys = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", 
    "G", "H", "J", "K", "L", "ENTER", "Z", "X", "C", "V", "B", "N", "M", "«",
];

const guessRows = [
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",]
];

let currentRow = 0
let currentTile = 0

guessRows.forEach((guessRow,guessRowIndex) => {
    const rowElement = document.createElement("div");
    rowElement.setAttribute("id", "guessRow-" + guessRowIndex);
    TileDisplay.append(rowElement)
    guessRow.forEach((guess, guessIndex) => {
        const tileElement = document.createElement("div");
        tileElement.setAttribute("id", "guessRow-" + guessRowIndex + "-tile-" + guessIndex);
        rowElement.append(tileElement);
        tileElement.classList.add("tile")
    })
})

function handleClick(letter) {
    console.log("clicked", letter);
    if(letter === "«") {
        deleteLetter()
        console.log("guessRows",guessRows)
        return
    }
    if(letter === "ENTER") {
        checkRow()
        console.log("guessRows",guessRows)
        return
    }
    addLetter(letter);
} 

const addLetter = (letter) => {
    if(currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById("guessRow-" + currentRow + "-tile-" + currentTile);
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter;
        tile.setAttribute("data", letter)
        currentTile++
        
    }
    
}

function checkRow() {
    const guess = guessRows[currentRow].join("");
    if(currentTile === 5) {
        console.log("guess is " + guess, "wordle is " + wordle)
        if(wordle == guess) {
            showMessage("Magnificent")
        }
    }
};

function showMessage(message) {
    const messageElement = document.createElement("p")
    messageElement.textContent = message
    messageDisplay.append(messageElement)
}

const deleteLetter = () => {
    if(currentTile > 0) {
        const tile = document.getElementById("guessRow-" + currentRow + "-tile-" + currentTile)
        tile.textContent = ""
        guessRows[currentRow][currentTile] = ""
        tile.setAttribute("data", "")
        currentTile--
    }
    
}

keys.forEach(key => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = key;
    Keyboard.append(buttonElement)
    buttonElement.setAttribute("id", key); 
    buttonElement.addEventListener("click", () => handleClick(key))
})