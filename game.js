function Game(world) {
  this.container = document.body;

  // create a new instance of a pixi stage
  this.stage = new PIXI.Stage(0xffffff);

  this.world = world;
  this.stage.addChild(world);

  // create a renderer instance
  this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, null);
  this.container.appendChild(this.renderer.view);
}

Game.prototype = {
  render: function render() {
    this._tick();
    return true;
  },

  _tick: function _tick() {
    // Start game loop
    window.requestAnimFrame(this._tick.bind(this));

    this.world.update()

    // @TODO: figure how to render thie board once
    // @See http://www.html5gamedevs.com/topic/1706-basic-tiled-game-performance-enhancement/?hl=tile
    this.renderer.render(this.stage);
  }
}
