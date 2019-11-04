import SquareController from './SquareController.js';
import PlayersController from "./PlayersController.js";
import BoardController from "./BoardController.js";

export default class Engine {
    _squareController;
    _playersController;
    _boardController;
    _activePlayer;
    _board;
    _square;

    constructor(gameIsRunning) {
        this._gameIsRunning = gameIsRunning;
        this._squareController = new SquareController();
        this._playersController = new PlayersController();
        this._boardController = new BoardController(this._squareController.squaresList);
        this._activePlayer = null;
        this._board = this._boardController.getBoard();
    }

    runApp(id) {
        this._gameIsRunning = this.checkGameProgress();
        if (this._gameIsRunning) {
            this.buttonsInit();
            this._activePlayer = this._playersController.getActivePlayer();
            let square = this._squareController.getSquareById(id);
            if (this._boardController.checkIfMoveIsValid(square)) {
                this._squareController.markSquare(square, this._activePlayer.playerSign);
                this._playersController.changeTurn();
            }
            this._boardController.refreshBoard();
        }
        console.log(this.gameIsRunning);

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

    getPlayersList() {
        return this._playersController.playersList;
    }


    resetBoard() {

        this._boardController.resetBoard();
    }


}