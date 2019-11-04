import SquareController from './SquareController.js';
import PlayersController from "./PlayersController.js";
import BoardController from "./BoardController.js";

export default class Engine {
    //todo create players by given data
    //todo points
    //todo show active player turn
    //todo AI

    _squareController;
    _playersController;
    _boardController;
    _activePlayer;
    _board;
    _winner;
    _winnerBoxes = [];
    _winPositions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]];

    constructor(gameIsRunning) {
        this._gameIsRunning = gameIsRunning;
        this._squareController = new SquareController();
        this._playersController = new PlayersController();
        this._boardController = new BoardController(this._squareController.squaresList);
        this._activePlayer = null;
        this._board = this._boardController.getBoard();
        this._activePlayer = this._playersController.getActivePlayer();
    }

    runApp(id) {


        this._gameIsRunning = this.checkGameProgress();
        if (this._gameIsRunning) {
            this.buttonsInit();
            let square = this._squareController.getSquareById(id);
            if (this._boardController.checkIfMoveIsValid(square)) {
                this._squareController.markSquare(square, this._activePlayer.playerSign);
                if (!this.checkWinner()) {
                    if (this._boardController.checkBoardFill()){
                        this._playersController.changeTurn();
                        this._activePlayer = this._playersController.getActivePlayer();
                        document.getElementById("actualTurn").innerHTML = "Actual Turn: "+this._activePlayer.playerName;
                    }
                } else {
                    this._boardController.markWinnerSquares(this._winnerBoxes, "rgba(30, 204, 27, 0.8)", this._winner.playerName);
                    this._gameIsRunning = false;

                }

            }
            this._boardController.refreshBoard();
        }


    }


    checkWinner() {


        for (let i = 0; i < this._winPositions.length; i++) {
            for (let j = 0; j < this._winPositions[i].length; j++) {
                if (this._squareController.getSquareById(this._winPositions[i][j]).hitSign !== " ") {
                    if (this._squareController.getSquareById(this._winPositions[i][0]).hitSign ===
                        this._squareController.getSquareById(this._winPositions[i][1]).hitSign &&
                        this._squareController.getSquareById(this._winPositions[i][0]).hitSign ===
                        this._squareController.getSquareById(this._winPositions[i][2]).hitSign) {
                        this._winnerBoxes = this._winPositions[i];
                        this._winner = this._playersController.getPlayerBySign(this._squareController.getSquareById(this._winPositions[i][0]).hitSign);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    buttonsInit() {
        let buttonReset = document.getElementById("reset");
        let engine = this; // ?
        buttonReset.onclick = function () {
            //why i cant type just like this.methodName() ?
            engine._gameIsRunning = true;
            engine.resetBoard();
        };
    }

    checkGameProgress() {
        let squaresList = this._boardController.squaresList;
        let gameInProgress = [];
        for (let i = 0; i < squaresList.length; i++) {
            if (squaresList[i].hitSign === " ") {
                gameInProgress.push(squaresList[i]);
            }
        }
        return gameInProgress.length > 0;

    }

    get gameIsRunning() {
        return this._gameIsRunning;
    }


    resetBoard() {

        this._boardController.resetBoard();
    }


}