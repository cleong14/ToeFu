// Responsible for
//   preloading assets
//   and switching to the game state

// class constructor

ToeFu.Boot = function () {

};

ToeFu.Boot.prototype.preload = function () {

};

ToeFu.Boot.prototype.create = function () {
  
  // switch to game state
  this.state.start( ToeFu.STATES.GAME );
};