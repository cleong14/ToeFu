(function () {

  // private static variable
  var ANIMATIONS = {
    IDLE : {
      name : 'idle',
      frames : [0, 1, 2, 3],
      fps : 5
    }
  };

  var FACING_FACTOR = {
    LEFT : -1,
    RIGHT : 1
  };

  // changes frames [0, 1, 2, 3] to [9, 10, 11, 12]
  function select_sprite_row(player_id){
    return function(frame_id){
      return frame_id + player_id*ToeFu.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    };
  }

  // sprite class constructor
  //  @id is 0 index based

  ToeFu.Player = function (game, id, name) {
    this.game = game;
    this.id = id;

    // ? is like an 'if'
    this.name = name? name : 'Player ' +(id+1);
    this.facing; // direction that player is facing. state updates this

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);

    // set center registration point
    this.anchor = { x : 0.5, y : 0.5 };

    // set animations
    // if(this.id == 0) {
    //   this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames );
    // } else {
    //   var frames = ANIMATIONS.IDLE.frames;
    //   for (var i = 0; i < frames.length; i++) {
    //     frames[i] = frames[i] + ToeFu.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    //   }
    //   this.animations.add(ANIMATIONS.IDLE.name, frames);
    // }

    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

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

  // public static variable
  ToeFu.Player.FACING = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT'
  };

  // is invoked on every frame
  ToeFu.Player.prototype.update = function () {

    // update facing
    this.scale.x = FACING_FACTOR[ this.facing ];

  };

  // Input actions
  ToeFu.Player.prototype.jump = function () {

  };

  ToeFu.Player.prototype.dive = function () {

  };

  ToeFu.Player.prototype.dive_stop = function () {

  };

  ToeFu.Player.prototype.step_left = function () {
    console.log('stepping left');
  };

  ToeFu.Player.prototype.step_right = function () {

  };

  // stop stepping left or right
  ToeFu.Player.prototype.stop = function () {

  };

})();