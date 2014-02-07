var world = new World();
var game = new Game(world);
var board = new Board();

board.init();

board.position.x = 100;
board.position.y = 50;
world.addObject(board);

game.render()


//var mappedY = 100 + y * this.tileHeight + (x % 2) * this.tileHeight / 2;
//var mappedX = 100 + x * this.tileWidth;
