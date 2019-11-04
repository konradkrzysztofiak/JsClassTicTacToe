export default class Player {

    constructor(playerId, playerName, playerSign, turn){
        this._playerId = playerId;
        this._playerName = playerName;
        this._playerSign = playerSign;
        this._turn = turn;
    }


    get turn() {
        return this._turn;
    }

    set turn(value) {
        this._turn = value;
    }

    get playerId() {
        return this._playerId;
    }

    get playerName() {
        return this._playerName;
    }

    get playerSign() {
        return this._playerSign;
    }

}