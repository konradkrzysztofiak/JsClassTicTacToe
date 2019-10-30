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
            document.getElementById("board").appendChild(squareDiv)
        }
    }
}