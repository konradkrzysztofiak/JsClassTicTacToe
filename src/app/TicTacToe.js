import Engine from './controller/Engine.js';

let game = new Engine(true);

window.onload = function main() {
    if (game._activePlayer === null){
    game.initPlayers();
    }
    if (game.gameIsRunning) {
        let htmlAllSquares = document.querySelectorAll(".boardSquare");
        for (let i = 0; i < htmlAllSquares.length; i++) {
            htmlAllSquares[i].onclick = function () {
                game.runApp(this.id);
            };
        }
    }


};
