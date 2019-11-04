import Board from "../model/Board.js";

export default class BoardController {
    _board;
    _squaresList;

    constructor(squaresList) {
        this._board = new Board(squaresList);
        this._squaresList = this._board.squares;
        this.fillBoard();
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
        }
        this.refreshBoard();

    }
}