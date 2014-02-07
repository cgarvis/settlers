function Board(world) {
  PIXI.DisplayObjectContainer.call(this);

  this.world = world;

  this.textures = {
    clay: PIXI.Texture.fromImage("assets/clayHex.gif"),
    desert: PIXI.Texture.fromImage("assets/desertHex.gif"),
    ore: PIXI.Texture.fromImage("assets/oreHex.gif"),
    sheep: PIXI.Texture.fromImage("assets/sheepHex.gif"),
    water: PIXI.Texture.fromImage("assets/waterHex.gif"),
    wheat: PIXI.Texture.fromImage("assets/wheatHex.gif"),
    wood: PIXI.Texture.fromImage("assets/woodHex.gif"),
  }
}

// Constructor
Board.constructor = PIXI.DisplayObjectContainer;
Board.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

Board.prototype.init = function() {
  var addSprite = function(texture, x, y) {
    var sprite = new PIXI.Sprite(texture);
    sprite.rotation = 90 * (3.14159265/180.0);

    // Center sprites anchor point
    sprite.anchor.x = 0.5
    sprite.anchor.y = 0.5

    sprite.position.x = x;
    sprite.position.y = y;

    board.addChild(sprite)
  }

  var size = 48;
  var height = 52;
  var x = size;

  var map = [
    'E', 'E', 'E', 'W', 'E', 'E', 'E',
    'E', 'W', 'W', '?', 'W', 'W', 'E',
    'W', '?', '?', '?', '?', '?', 'W',
    'W', '?', '?', '?', '?', '?', 'W',
    'W', '?', '?', '?', '?', '?', 'W',
    'W', 'W', '?', '?', '?', 'W', 'W',
    'E', 'E', 'W', 'W', 'W', 'E', 'E',
  ]

  var randomTx = [
    this.textures.clay,
    this.textures.ore,
    this.textures.sheep,
    this.textures.wood,
    this.textures.wheat,
  ]

  var randomTexture = function() {
    var index = Math.round(Math.random() * 4);
    return randomTx[index];
  }

  var column, x, row, y;
  for(var i = 0; i < map.length; i++) {
    if(map[i] != 'E') {
      column = i % 7;
      x = column * size;
      row = Math.ceil((i+1)/7)
      y = (row + column%2*0.5) * height;

      var tx = map[i] == '?' ? randomTexture() : this.textures.water;
      addSprite(tx, x, y);
    }
  }
}
