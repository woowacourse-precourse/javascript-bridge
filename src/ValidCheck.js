const { ERROR } = require("./Constants/Constants"); 

const ValidCheck = {
  sizeInput: function(size) {
    if (!(Number(size) >= 3 && Number(size) <= 20)) throw new Error(ERROR.SIZE_ERROR);
  },

  movingInput: function(moving) {
    if (!(moving === "U" || moving === "D")) throw new Error(ERROR.MOVING_ERROR);
  }
};

module.exports = ValidCheck;