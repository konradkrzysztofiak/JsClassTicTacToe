export default class Square {


    constructor(squareId) {
        this._hitSign = " ";
        this._squareId = squareId;

    }

    get squareId() {
        return this._squareId;
    }


    get hitSign() {
        return this._hitSign;
    }


    set hitSign(value) {
        this._hitSign = value;
    }
}