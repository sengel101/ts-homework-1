//The Game class
class Game {
    //The constructor
    constructor(public name: string, public rating: number) { }
    
    //A function that returns the HTML object you need
    createListNode() :HTMLElement {
        //Create the nodes we'll need
        let newRow = document.createElement("tr");
        let nameCell = document.createElement("td");
        let rateCell = document.createElement("td");
        let nameText = document.createTextNode(this.name);
        let rateText = document.createTextNode(this.rating.toString());
        
        //Add the text
        nameCell.appendChild(nameText);
        rateCell.appendChild(rateText);
        
        //Add cells to row
        newRow.appendChild(nameCell);
        newRow.appendChild(rateCell);

        //Return the row
        return newRow;
    }
}

//Declare the varible to store the game.
let newGame: Game;

//The function that adds the game
function addGame() :void {

    //YOUR CODE GOES HERE
    let gameName = document.getElementById("name").value;
    let rating = Number(document.getElementById("rating").value);
    newGame = new Game(gameName, rating);
    document.getElementById("games").appendChild(newGame.createListNode());
}