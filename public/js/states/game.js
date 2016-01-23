// class constructor

ToeFu.Game = function () {

  this.player_1;

};

ToeFu.Game.prototype.create = function () {

  this.player_1 = new ToeFu.Player( this.game, 0 );
  this.game.add.existing(this.player_1);

};

ToeFu.Game.prototype.update = function () {

};

ToeFu.Game.prototype.shutdown = function () {

};