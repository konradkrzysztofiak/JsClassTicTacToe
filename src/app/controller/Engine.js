import Board from '../model/Board.js';
import Player from '../model/Player.js';
import SquareController from './SquareController.js';
import PlayersController from "./PlayersController.js";

let board;
let squareController;
let playersController;
let activeTurn = null;
export default class Engine {

    constructor(gameIsRunning) {
        this._gameIsRunning = gameIsRunning;
    }


    runApp(id) {

        let buttonReset = document.getElementById("reset");

        buttonReset.addEventListener("click", this.resetBoard);
        activeTurn = playersController.getActivePlayer();
        if (activeTurn !== null){
            squareController.markSquare(id, activeTurn.playerSign);
            playersController.changeTurn();
        }
        board.refreshBoard();



    }

    get gameIsRunning() {
        return this._gameIsRunning;
    }

    initPlayers() {
        playersController = new PlayersController();
        return playersController.playersList;
    }



    resetBoard() {
        for (let i = 0; i < board.squares.length; i++) {
            board.squares[i].hitSign = " ";
        }
        activeTurn = null;
        board.refreshBoard();
    }

//todo prywatna metoda
    initializeBoard() {
        squareController = new SquareController();
        board = new Board(squareController.squaresList);
        board.fillBoard();
    }



}