export default class Board {


    constructor(squares) {
        this._squares = squares;
    }


    get squares() {
        return this._squares;
    }


    fillBoard() {
        for (let i = 0; i < this._squares.length; i++) {
            let squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "col-4 boardSquare");
            squareDiv.setAttribute("id", this._squares[i].squareId);
            squareDiv.innerHTML = this._squares[i].hitSign;
            document.getElementById("board").appendChild(squareDiv)
        }
    }

    refreshBoard() {
        for (let i = 0; i < this._squares.length; i++) {
            document.getElementById(this.squares[i].squareId).innerHTML = "<p class='text-center'>" + this.squares[i].hitSign + "</p>";
        }
    }
}