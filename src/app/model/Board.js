export default class Board {

    _squares = [];
    constructor(squares) {
        this._squares = squares;
    }


    get squares() {
        return this._squares;
    }

}