import Board from "../model/Board.js";

export default class BoardController {
    _board;
    _squaresList;

    constructor(squaresList) {
        this._board = new Board(squaresList);
        this._squaresList = this._board.squares;
        this.fillBoard();
        this._squaresList = squaresList;
    }


    get squaresList() {
        return this._squaresList;
    }

    getBoard() {
        return this._board;
    }

    fillBoard() {
        for (let i = 0; i < this._squaresList.length; i++) {
            let squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "col-4 boardSquare");
            squareDiv.setAttribute("id", this._squaresList[i].squareId);
            squareDiv.innerHTML = this._squaresList[i].hitSign;
            document.getElementById("board").appendChild(squareDiv)
        }
    }

    refreshBoard() {
        for (let i = 0; i < this._squaresList.length; i++) {
            document.getElementById(this._squaresList[i].squareId).innerHTML = "<p class='text-center'>" + this._squaresList[i].hitSign + "</p>";
        }
    }

    resetBoard() {
        for (let i = 0; i < this._squaresList.length; i++) {
            this._squaresList[i].hitSign = " ";
            document.getElementById(this._squaresList[i].squareId).style.backgroundColor = "rgba(189, 189, 189, 0.8)";
        }
        this.refreshBoard();

    }

    checkBoardFill() {
        let freeSquares = [];
        for (let i = 0; i < this._squaresList.length; i++) {
            if (this._squaresList[i].hitSign === " ") {
                freeSquares.push(this.squaresList[i])
            }
        }
        if (freeSquares.length > 0) {
            return true
        } else {
            this.markWinnerSquares(this._squaresList, "red", "DRAW");
            this.refreshBoard();
            return false;
        }
    }

    markWinnerSquares(squaresList, color, playerName) {
        for (let i = 0; i < squaresList.length; i++) {
            if (playerName !== "DRAW") {
                document.getElementById(squaresList[i]).style.backgroundColor = color;
            } else {
                document.getElementById(squaresList[i].squareId).style.backgroundColor = color;
            }

        }
        document.getElementById("winner").innerHTML = "The winner is" + " " + playerName;

    }

    checkIfMoveIsValid(square) {

        return square.hitSign === " ";


    }
}