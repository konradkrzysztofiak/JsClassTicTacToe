import Square from '../model/Square.js';
import Board from '../model/Board.js';

let board;
let squaresList = [];
export default class Game {

    constructor(gameIsRunning) {
        this._gameIsRunning = gameIsRunning;
    }


    runApp() {
        this.initializeBoard();
        let buttonReset = document.getElementById("reset");
        buttonReset.addEventListener("click", this.resetBoard);
        this.markSquare();


    }

    markSquare() {
        let boardSquares = board.squares;
        let htmlAllSquares = document.querySelectorAll(".boardSquare");
        for (let i = 0; i < htmlAllSquares.length; i++) {
            //todo
            htmlAllSquares[i].onclick = function () {
                boardSquares[i].hitSign = "O";
                board.refreshBoard();
            };
        }
    }


    resetBoard() {
        for (let i = 0; i < board.squares.length; i++) {
            board.squares[i].hitSign = " ";
        }
        board.refreshBoard();
    }

//todo prywatna metoda
    initializeBoard() {
        board = new Board(this.generateSquares());
        board.fillBoard();
    }


    generateSquares() {
        for (let i = 0; i < 9; i++) {
            squaresList[i] = new Square(i + 1)
        }
        return squaresList;
    }
}