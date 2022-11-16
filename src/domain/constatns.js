const RULE = Object.freeze({
  // rule of the game
  BRIDGE: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 20,
    CAN_GO:{
      UP: 1,
      DOWN: 0,
    }
  },

  USER:{
    BEHAVIOR:{
      UP: 'U',
      DOWN: 'D'
    }
  }

});
