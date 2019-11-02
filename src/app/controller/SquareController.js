import Square from "../model/Square.js";

export default class SquareController {
    _squaresList = [];
    constructor(){
        this._squaresList = this.initSquares();
    }

    initSquares() {
        let squaresList = [];

        for (let i = 0; i < 9; i++) {
            squaresList[i] = new Square(i + 1)
        }
        return squaresList;

    }

    getSquareById(id){
        for (let i = 0; i < this._squaresList.length; i++){
            if (this._squaresList[i].squareId == id){
                return this._squaresList[i];
            }
        }
        return "Error";
    }

    markSquare(id){
        let square = this.getSquareById(id);
        square.hitSign = "X";
    }


    get squaresList() {
        return this._squaresList;
    }
}