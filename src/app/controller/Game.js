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
        //while (this._gameIsRunning){
        let boardSquares = board.squares;
        buttonReset.addEventListener("click", this.resetBoard);
        let htmlAllSquares = document.querySelectorAll(".boardSquare");
        for (let i = 0; i < htmlAllSquares.length; i++) {
            //todo
            htmlAllSquares[i].onclick = function () {
                boardSquares[i].hitSign = "X";
                board.refreshBoard();
            };


        }


    }
    resetGame() {
        //this.resetBoard();
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
            //todo nadawanie pozycji ? albo moze w ogole nie bedzie potrzebne
            squaresList[i] = new Square(i + 1, [0, 0])
        }
        return squaresList;
    }
}