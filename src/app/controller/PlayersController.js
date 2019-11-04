import Player from "../model/Player.js";

export default class PlayersController {
    _playersList = [];

    constructor() {
        this._playersList = this.createPlayers();
    }

    createPlayers() {
        let player1 = new Player(1, "playerOne", "X", true);
        let player2 = new Player(2, "playerTwo", "0", false);
        return [player1, player2];
    }



    get playersList() {
        return this._playersList;
    }

    getActivePlayer() {
        for (let i = 0; i < this.playersList.length; i++) {
            if (this.playersList[i].turn) {
                return this.playersList[i];
            }
        }
        return 0;
    }

    getPlayerWhereTurnFalse() {
        for (let i = 0; i < this.playersList.length; i++) {
            if (!this.playersList[i].turn) {
                return this.playersList[i];
            }
        }
        return "error";
    }

    getPlayerById(id) {
        for (let i = 0; i < this.playersList.length; i++) {
            if (this.playersList[i].playerId == id) {
                return this.playersList[i];
            }
        }
        return "Error";
    }

    getPlayerBySign(sign){
        for (let i = 0; i < this.playersList.length; i++) {
            if (this.playersList[i].playerSign === sign) {
                return this.playersList[i];
            }
        }
        return "Error";
    }

    changeTurn() {
        let nextTurnPlayer = this.getPlayerWhereTurnFalse();
        for (let i = 0; i < this.playersList.length; i++) {
            if (this.playersList[i].playerId == nextTurnPlayer.playerId) {
                this.playersList[i].turn = true;
            } else {
                this.playersList[i].turn = false;
            }
        }
    }

}