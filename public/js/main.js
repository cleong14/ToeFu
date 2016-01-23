// create a single global variable
// type is an object

window.ToeFu = {

  // all caps because theyre constance
  // can access is but cannot set it
  ASSETS : {},

  STAGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STAGE_ID : 'game', // the div in index.html to render this game

  STATES : {
    BOOT : 'Boot',
    GAME : 'Game'
  }
  
};