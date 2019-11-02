import Square from '../model/Square.js';
import Board from '../model/Board.js';
import Player from '../model/Player.js';
import SquareController from './SquareController.js';

let board;
let squareController;
let squaresList = [];
let activeTurn = null;
export default class Engine {

    constructor(gameIsRunning) {
        this._gameIsRunning = gameIsRunning;
    }


    runApp(id, players) {

        let buttonReset = document.getElementById("reset");
        buttonReset.addEventListener("click", this.resetBoard);
        this.markSquare(id);
        board.refreshBoard();

        if (activeTurn === false) {
           this.checkTurn(players);

        }




    }

    get gameIsRunning() {
        return this._gameIsRunning;
    }

    initPlayers() {
        let player1 = new Player(1, "playerOne", "X", true);
        let player2 = new Player(2, "playerTwo", "0", false);
        return [player1, player2];
    }

    markSquare(id) {

        console.log();
        squareController.markSquare(id);


    }
    checkTurn(players){
        console.log(activeTurn);
        if (activeTurn === null) {
            for (let i = 0; i < players.length; i++) {
                if (players[i].turn === true) {
                    activeTurn = players[i];
                }
            }
        } else {
            this.changeTurn(players)
        }
    }


    changeTurn(players, playerId) {
        console.log(players.length + "length");
        for (let i = 0; i < players.length; i++) {
            if (players[i].playerId !== playerId) {
                console.log(players[i].playerId + "elo");
                players[i] = true;
            }
        }
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