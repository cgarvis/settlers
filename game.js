var backgroundColor = 0x6e97c5;
// create an new instance of a pixi stage
var stage = new PIXI.Stage(backgroundColor);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, null);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);
renderer.view.style.position = "absolute";
renderer.view.style.top = "0px";
renderer.view.style.left = "0px";
requestAnimFrame( animate );

function Hex(type, texture) {
  this.type = type;
  this.texture = texture;
  this.sprite = new PIXI.Sprite(this.texture);
  this.sprite.anchor.x = 0.5;
  this.sprite.anchor.y = 0.5;
  this.width = 54;
  this.height = 48;
}


Hex.prototype = {
  addToStage: function(stage) {
    stage.addChild(this.sprite);
  },
  position: function(x, y) {
    this.sprite.position.x = x;
    this.sprite.position.y = y;
  },
  rotation: function(speed) {
    this.sprite.rotation = speed;
  }
}

function Tilemap(width, height) {
  this.map = [];
}

Tilemap.prototype = {
  addHex: function(hex) {

  }
}



// Special Textures
var desertTexture = PIXI.Texture.fromImage("assets/desertHex.gif");
var waterTexture = PIXI.Texture.fromImage("assets/waterHex.gif");

// Resource Textures
var clayTexture = PIXI.Texture.fromImage("assets/clayHex.gif");
var oreTexture = PIXI.Texture.fromImage("assets/oreHex.gif");
var sheepTexture = PIXI.Texture.fromImage("assets/sheepHex.gif");
var wheatTexture = PIXI.Texture.fromImage("assets/wheatHex.gif");
var woodTexture = PIXI.Texture.fromImage("assets/woodHex.gif");


for(var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    var water = new Hex("water", waterTexture);

    var x = 100 + i * water.width + (j % 2) * water.width / 2 ;
    var y = 100 + j * water.height;
    water.position(x,y);
    water.addToStage(stage);
  }
}


function animate() {
  requestAnimFrame( animate );

  // render the stage
  renderer.render(stage);
}
