import Square from '../model/Square.js';
import Board from '../model/Board.js';


export default class Game {

    constructor(gameIsRunning) {
        this._gameIsRunning = gameIsRunning;
    }

    runApp() {
        if (this._gameIsRunning) {

            this.initializeBoard();
        }
    }

    //todo prywatna metoda
    initializeBoard() {
        let board = new Board(this.generateSquares());
        board.fillBoard();

    }


    generateSquares() {
        let squaresList = [];
        for (let i = 0; i < 9; i++) {
            //todo nadawanie pozycji ? albo moze w ogole nie bedzie potrzebne
            squaresList[i] = new Square(i + 1, [0, 0])
        }
        return squaresList;
    }
}