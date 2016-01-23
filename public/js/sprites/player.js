(function () {

  // private static variable
  var ANIMATIONS = {
    IDLE : {
      name : 'idle',
      frames : [0, 1, 2, 3],
      fps : 5
    }
  };

  // sprite class constructor
  //  @id is 0 index based

  ToeFu.Player = function (game, id, name) {
    this.game = game;
    this.id = id;

    // ? is like an 'if'
    this.name = name? name : 'Player ' +(id+1);

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);

    // set animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames );

    //  play the initial animation
    // 'true'/3rd argument means loop
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);

  };

  // extend Sprite prototype
  ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: ToeFu.Player
    }
  });

})();