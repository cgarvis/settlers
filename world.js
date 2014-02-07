function World() {
  PIXI.DisplayObjectContainer.call(this);
}

// Constructor
World.constructor = PIXI.DisplayObjectContainer;
World.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

World.prototype.addObject = function(obj) {
  this.addChild(obj);
}

World.prototype.addSprite = function(texture) {
  if (typeof texture === 'string') {
    texture = PIXI.Texture.fromImage(texture);
  }

  var sprite = new PIXI.Sprite(texture);

  this.addChild(sprite);
}

World.prototype.update = function() {
}
