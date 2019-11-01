export default class Square {


    constructor(squareId, pos) {
        this._hitSign = " ";
        this._squareId = squareId;
        this._pos = pos;
    }

    get squareId() {
        return this._squareId;
    }

    get pos() {
        return this._pos;
    }

    get hitSign() {
        return this._hitSign;
    }


    set hitSign(value) {
        this._hitSign = value;
    }
}