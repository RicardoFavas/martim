const Chess = require('./src/Chess.js')


const game = Chess.createGame();

game.render();


game.printFen();
