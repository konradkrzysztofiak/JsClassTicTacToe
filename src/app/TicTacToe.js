import Engine from './controller/Engine.js';

let game = new Engine(true);

window.onload = function main() {

    let htmlAllSquares = document.querySelectorAll(".boardSquare");
    document.getElementById("actualTurn").innerHTML = "Actual Turn:" + " " + game._activePlayer.playerName;
    for (let i = 0; i < htmlAllSquares.length; i++) {
        htmlAllSquares[i].onclick = function () {
            if (game.gameIsRunning){
                game.runApp(this.id);
            }
        };
    }


};
